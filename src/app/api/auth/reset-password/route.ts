// app/api/auth/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import type { User } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { resetToken, newPassword } = await request.json();

    if (!resetToken || !newPassword) {
      return NextResponse.json(
        { success: false, error: 'Token y nueva contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Validate password
    if (newPassword.length < 6) {
      return NextResponse.json(
        { success: false, error: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      );
    }

    const supabaseAdmin = getSupabaseAdmin();

    // Find the reset code record by token
    const { data: codeRecord, error: fetchError } = await supabaseAdmin
      .from('password_reset_codes')
      .select('*')
      .eq('reset_token', resetToken)
      .single();

    if (fetchError || !codeRecord) {
      return NextResponse.json(
        { success: false, error: 'Token inválido o expirado' },
        { status: 400 }
      );
    }

    // Check if already used
    if (codeRecord.used) {
      return NextResponse.json(
        { success: false, error: 'Este enlace ya fue utilizado' },
        { status: 400 }
      );
    }

    // Check if verified
    if (!codeRecord.verified) {
      return NextResponse.json(
        { success: false, error: 'El código no ha sido verificado' },
        { status: 400 }
      );
    }

    // Check if expired (give extra 10 minutes after verification)
    const extendedExpiry = new Date(codeRecord.expires_at);
    extendedExpiry.setMinutes(extendedExpiry.getMinutes() + 10);

    if (extendedExpiry < new Date()) {
      return NextResponse.json(
        { success: false, error: 'El tiempo para cambiar la contraseña ha expirado' },
        { status: 400 }
      );
    }

    // Find user by email
    const { data: users, error: userError } = await supabaseAdmin.auth.admin.listUsers();

    if (userError) {
      console.error('[reset-password] Error fetching users:', userError);
      return NextResponse.json(
        { success: false, error: 'Error del servidor' },
        { status: 500 }
      );
    }

    const user = users.users.find(
      (u: User) => u.email?.toLowerCase() === codeRecord.email.toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Update the user's password
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
      user.id,
      { password: newPassword }
    );

    if (updateError) {
      console.error('[reset-password] Error updating password:', updateError);
      return NextResponse.json(
        { success: false, error: 'Error al actualizar la contraseña' },
        { status: 500 }
      );
    }

    // Mark the code as used
    await supabaseAdmin
      .from('password_reset_codes')
      .update({ used: true })
      .eq('id', codeRecord.id);

    console.log('[reset-password] Password reset successfully for:', codeRecord.email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[reset-password] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Error del servidor' },
      { status: 500 }
    );
  }
}
