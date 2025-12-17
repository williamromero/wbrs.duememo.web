// lib/resend.ts
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
let resendClient: Resend | null = null;

export function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.NEXT_RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('Missing NEXT_RESEND_API_KEY environment variable');
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Default sender - using Resend's test domain
// In production, replace with your verified domain
export const FROM_EMAIL = process.env.NEXT_RESEND_FROM_EMAIL || 'DuoMemo <onboarding@resend.dev>';
