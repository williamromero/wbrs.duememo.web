// emails/PasswordResetCode.tsx
import * as React from 'react';

interface PasswordResetCodeEmailProps {
  code: string;
  expiresInMinutes?: number;
}

export function PasswordResetCodeEmail({
  code,
  expiresInMinutes = 15,
}: PasswordResetCodeEmailProps): React.ReactElement {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
          <span style={styles.logoText}>DuoMemo</span>
        </div>

        <h1 style={styles.title}>Código de verificación</h1>

        <p style={styles.text}>
          Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.
          Usa el siguiente código para continuar:
        </p>

        <div style={styles.codeContainer}>
          <span style={styles.code}>{code}</span>
        </div>

        <p style={styles.expiry}>
          Este código expira en {expiresInMinutes} minutos.
        </p>

        <div style={styles.divider} />

        <p style={styles.footer}>
          Si no solicitaste este código, puedes ignorar este mensaje de forma segura.
        </p>

        <p style={styles.signature}>
          — El equipo de DuoMemo
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#f4f4f5',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '480px',
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  logo: {
    textAlign: 'center' as const,
    marginBottom: '24px',
  },
  logoText: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#8B5CF6',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#18181b',
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  },
  text: {
    fontSize: '16px',
    color: '#52525b',
    textAlign: 'center' as const,
    lineHeight: '1.5',
    margin: '0 0 24px 0',
  },
  codeContainer: {
    backgroundColor: '#f4f4f5',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center' as const,
    marginBottom: '16px',
  },
  code: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#18181b',
    letterSpacing: '8px',
  },
  expiry: {
    fontSize: '14px',
    color: '#a1a1aa',
    textAlign: 'center' as const,
    margin: '0 0 24px 0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#e4e4e7',
    margin: '24px 0',
  },
  footer: {
    fontSize: '14px',
    color: '#71717a',
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
  },
  signature: {
    fontSize: '14px',
    color: '#a1a1aa',
    textAlign: 'center' as const,
    margin: '0',
  },
};

// Plain text version for email clients that don't support HTML
export function getPlainTextEmail(code: string, expiresInMinutes = 15): string {
  return `
DuoMemo - Código de verificación

Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.

Tu código de verificación es: ${code}

Este código expira en ${expiresInMinutes} minutos.

Si no solicitaste este código, puedes ignorar este mensaje de forma segura.

— El equipo de DuoMemo
  `.trim();
}
