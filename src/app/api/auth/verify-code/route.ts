// app/api/auth/verify-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { randomUUID } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { valid: false, error: 'Email y código son requeridos' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedCode = code.trim();
    const supabaseAdmin = getSupabaseAdmin();

    // Get the reset code record
    const { data: codeRecord, error: fetchError } = await supabaseAdmin
      .from('password_reset_codes')
      .select('*')
      .eq('email', normalizedEmail)
      .single();

    if (fetchError || !codeRecord) {
      return NextResponse.json(
        { valid: false, error: 'No se encontró una solicitud de código para este email' },
        { status: 404 }
      );
    }

    // Check if already used
    if (codeRecord.used) {
      return NextResponse.json(
        { valid: false, error: 'Este código ya fue utilizado' },
        { status: 400 }
      );
    }

    // Check if expired
    if (new Date(codeRecord.expires_at) < new Date()) {
      return NextResponse.json(
        { valid: false, error: 'El código ha expirado. Solicita uno nuevo.' },
        { status: 400 }
      );
    }

    // Check attempts
    if (codeRecord.attempts >= codeRecord.max_attempts) {
      return NextResponse.json(
        { valid: false, error: 'Demasiados intentos. Solicita un nuevo código.' },
        { status: 429 }
      );
    }

    // Increment attempts
    await supabaseAdmin
      .from('password_reset_codes')
      .update({ attempts: codeRecord.attempts + 1 })
      .eq('id', codeRecord.id);

    // Verify the code
    if (codeRecord.code !== normalizedCode) {
      const remainingAttempts = codeRecord.max_attempts - codeRecord.attempts - 1;
      return NextResponse.json(
        {
          valid: false,
          error: `Código incorrecto. ${remainingAttempts} intentos restantes.`
        },
        { status: 400 }
      );
    }

    // Code is valid! Generate reset token
    const resetToken = randomUUID();

    // Mark as verified and add reset token
    const { error: updateError } = await supabaseAdmin
      .from('password_reset_codes')
      .update({
        verified: true,
        reset_token: resetToken,
      })
      .eq('id', codeRecord.id);

    if (updateError) {
      console.error('[verify-code] Error updating record:', updateError);
      return NextResponse.json(
        { valid: false, error: 'Error del servidor' },
        { status: 500 }
      );
    }

    console.log('[verify-code] Code verified for:', normalizedEmail);
    return NextResponse.json({
      valid: true,
      resetToken,
    });
  } catch (error) {
    console.error('[verify-code] Unexpected error:', error);
    return NextResponse.json(
      { valid: false, error: 'Error del servidor' },
      { status: 500 }
    );
  }
}
