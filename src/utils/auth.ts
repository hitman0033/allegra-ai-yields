// Authentication utilities and mock services

export interface EmailVerificationToken {
  token: string;
  email: string;
  expiresAt: number;
  used: boolean;
}

export interface PasswordResetToken {
  token: string;
  email: string;
  expiresAt: number;
  used: boolean;
}

// Mock storage for tokens (in real app, this would be handled by backend)
let emailVerificationTokens: EmailVerificationToken[] = [];
let passwordResetTokens: PasswordResetToken[] = [];

export const generateToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const sendVerificationEmail = async (email: string): Promise<{ success: boolean; token?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const token = generateToken();
  const verificationToken: EmailVerificationToken = {
    token,
    email,
    expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    used: false,
  };

  emailVerificationTokens.push(verificationToken);

  // In real app, send email here
  console.log(`Mock: Verification email sent to ${email} with token: ${token}`);
  console.log(`Mock: Verification link: ${window.location.origin}/verify-email?token=${token}`);

  return { success: true, token };
};

export const verifyEmailToken = async (token: string): Promise<{ success: boolean; email?: string; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const verificationToken = emailVerificationTokens.find(t => t.token === token);

  if (!verificationToken) {
    return { success: false, error: 'Invalid verification token' };
  }

  if (verificationToken.used) {
    return { success: false, error: 'Verification token has already been used' };
  }

  if (verificationToken.expiresAt < Date.now()) {
    return { success: false, error: 'Verification token has expired' };
  }

  // Mark token as used
  verificationToken.used = true;

  return { success: true, email: verificationToken.email };
};

export const sendPasswordResetEmail = async (email: string): Promise<{ success: boolean; token?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if email exists (in real app, this would be a backend check)
  const userExists = localStorage.getItem('allegra_user');
  if (!userExists) {
    // Don't reveal if email exists or not for security
    return { success: true };
  }

  const token = generateToken();
  const resetToken: PasswordResetToken = {
    token,
    email,
    expiresAt: Date.now() + (15 * 60 * 1000), // 15 minutes
    used: false,
  };

  passwordResetTokens.push(resetToken);

  // In real app, send email here
  console.log(`Mock: Password reset email sent to ${email} with token: ${token}`);
  console.log(`Mock: Reset link: ${window.location.origin}/reset-password?token=${token}`);

  return { success: true, token };
};

export const verifyResetToken = async (token: string): Promise<{ success: boolean; email?: string; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const resetToken = passwordResetTokens.find(t => t.token === token);

  if (!resetToken) {
    return { success: false, error: 'Invalid reset token' };
  }

  if (resetToken.used) {
    return { success: false, error: 'Reset token has already been used' };
  }

  if (resetToken.expiresAt < Date.now()) {
    return { success: false, error: 'Reset token has expired' };
  }

  return { success: true, email: resetToken.email };
};

export const resetPassword = async (token: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const resetToken = passwordResetTokens.find(t => t.token === token);

  if (!resetToken) {
    return { success: false, error: 'Invalid reset token' };
  }

  if (resetToken.used) {
    return { success: false, error: 'Reset token has already been used' };
  }

  if (resetToken.expiresAt < Date.now()) {
    return { success: false, error: 'Reset token has expired' };
  }

  // Mark token as used
  resetToken.used = true;

  // In real app, update password in database
  console.log(`Mock: Password reset for ${resetToken.email}`);

  return { success: true };
};

export const getStoredUser = () => {
  const savedUser = localStorage.getItem('allegra_user');
  return savedUser ? JSON.parse(savedUser) : null;
};

export const updateStoredUser = (userData: any) => {
  localStorage.setItem('allegra_user', JSON.stringify(userData));
};

export const clearAuthStorage = () => {
  localStorage.removeItem('allegra_user');
  localStorage.removeItem('allegra_wallet');
  localStorage.removeItem('allegra_session');
};

export const createSession = (user: any, rememberMe: boolean = false) => {
  const expiresAt = rememberMe 
    ? Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
    : Date.now() + (24 * 60 * 60 * 1000); // 24 hours

  const session = {
    userId: user.id,
    expiresAt,
    createdAt: Date.now(),
  };

  localStorage.setItem('allegra_session', JSON.stringify(session));
  return session;
};

export const validateSession = () => {
  const savedSession = localStorage.getItem('allegra_session');
  if (!savedSession) return false;

  const session = JSON.parse(savedSession);
  return session.expiresAt > Date.now();
};

export const cleanupExpiredTokens = () => {
  const now = Date.now();
  emailVerificationTokens = emailVerificationTokens.filter(token => token.expiresAt > now);
  passwordResetTokens = passwordResetTokens.filter(token => token.expiresAt > now);
};
