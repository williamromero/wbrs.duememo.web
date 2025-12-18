// emails/PasswordResetCode.tsx
import * as React from 'react';

interface PasswordResetCodeEmailProps {
  code: string;
  expiresInMinutes?: number;
}

const LOGO_URL = 'https://www.duomemo.site/images/logo.png';

export function PasswordResetCodeEmail({
  code,
  expiresInMinutes = 15,
}: PasswordResetCodeEmailProps): React.ReactElement {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img
            src={LOGO_URL}
            alt="DuoMemo"
            width="80"
            height="80"
            style={styles.logo}
          />
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

      {/* Footer */}
      <div style={styles.footerLinks}>
        <a href="https://www.duomemo.site" style={styles.link}>duomemo.site</a>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#f0fdf4', // emerald-50
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '48px 40px',
    maxWidth: '480px',
    margin: '0 auto',
    boxShadow: '0 4px 24px rgba(16, 185, 129, 0.1)',
    border: '1px solid #d1fae5', // emerald-200
  },
  logoContainer: {
    textAlign: 'center' as const,
    marginBottom: '24px',
  },
  logo: {
    borderRadius: '16px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#064e3b', // emerald-900
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  },
  text: {
    fontSize: '16px',
    color: '#374151', // gray-700
    textAlign: 'center' as const,
    lineHeight: '1.6',
    margin: '0 0 28px 0',
  },
  codeContainer: {
    background: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)', // emerald to violet
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center' as const,
    marginBottom: '16px',
  },
  code: {
    fontSize: '40px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '10px',
    fontFamily: 'monospace',
  },
  expiry: {
    fontSize: '14px',
    color: '#6b7280', // gray-500
    textAlign: 'center' as const,
    margin: '0 0 28px 0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#e5e7eb', // gray-200
    margin: '24px 0',
  },
  footer: {
    fontSize: '14px',
    color: '#9ca3af', // gray-400
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
  },
  signature: {
    fontSize: '14px',
    color: '#10b981', // emerald-500
    textAlign: 'center' as const,
    margin: '0',
    fontWeight: '500',
  },
  footerLinks: {
    textAlign: 'center' as const,
    marginTop: '24px',
  },
  link: {
    fontSize: '14px',
    color: '#10b981', // emerald-500
    textDecoration: 'none',
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

duomemo.site
  `.trim();
}
