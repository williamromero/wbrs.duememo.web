// app/api/auth/request-code/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { getResend, FROM_EMAIL } from '@/lib/resend';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { PasswordResetCodeEmail, getPlainTextEmail } from '@/emails/PasswordResetCode';
import { randomInt } from 'crypto';
import type { User } from '@supabase/supabase-js';

const CODE_EXPIRATION_MINUTES = 15;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email es requerido' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const supabaseAdmin = getSupabaseAdmin();

    // Check if user exists in Supabase
    const { data: users, error: userError } = await supabaseAdmin.auth.admin.listUsers();

    if (userError) {
      console.error('[request-code] Error fetching users:', userError);
      return NextResponse.json(
        { success: false, error: 'Error del servidor' },
        { status: 500 }
      );
    }

    const userExists = users.users.some(
      (u: User) => u.email?.toLowerCase() === normalizedEmail
    );

    if (!userExists) {
      // Don't reveal if user exists or not for security
      // But still return success to prevent email enumeration
      console.log('[request-code] User not found:', normalizedEmail);
      return NextResponse.json({ success: true });
    }

    // Generate 6-digit code
    const code = String(randomInt(100000, 999999));
    const expiresAt = new Date(Date.now() + CODE_EXPIRATION_MINUTES * 60 * 1000);

    // Delete any existing codes for this email
    await supabaseAdmin
      .from('password_reset_codes')
      .delete()
      .eq('email', normalizedEmail);

    // Insert new code
    const { error: insertError } = await supabaseAdmin
      .from('password_reset_codes')
      .insert({
        email: normalizedEmail,
        code,
        expires_at: expiresAt.toISOString(),
        attempts: 0,
        max_attempts: 5,
        used: false,
        verified: false,
      });

    if (insertError) {
      console.error('[request-code] Error inserting code:', insertError);
      return NextResponse.json(
        { success: false, error: 'Error del servidor' },
        { status: 500 }
      );
    }

    const emailHtml = await render(
      PasswordResetCodeEmail({ code, expiresInMinutes: CODE_EXPIRATION_MINUTES })
    );
    const emailText = getPlainTextEmail(code, CODE_EXPIRATION_MINUTES);

    const resend = getResend();
    const { error: emailError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: normalizedEmail,
      subject: `${code} es tu código de verificación - DuoMemo`,
      html: emailHtml,
      text: emailText,
    });

    if (emailError) {
      console.error('[request-code] Error sending email:', emailError);
      // Delete the code since email failed
      await supabaseAdmin
        .from('password_reset_codes')
        .delete()
        .eq('email', normalizedEmail);

      return NextResponse.json(
        { success: false, error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    console.log('[request-code] Code sent successfully to:', normalizedEmail);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[request-code] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Error del servidor' },
      { status: 500 }
    );
  }
}
