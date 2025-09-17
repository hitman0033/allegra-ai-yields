import { ValidationErrors, PasswordStrength } from '../types/auth';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): PasswordStrength => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  const criteria = [hasUppercase, hasLowercase, hasNumber, hasSymbol, hasMinLength];
  const score = criteria.filter(Boolean).length;

  const feedback: string[] = [];
  if (!hasMinLength) feedback.push('At least 8 characters');
  if (!hasUppercase) feedback.push('One uppercase letter');
  if (!hasLowercase) feedback.push('One lowercase letter');
  if (!hasNumber) feedback.push('One number');
  if (!hasSymbol) feedback.push('One special character');

  return {
    score,
    feedback,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    hasMinLength,
  };
};

export const getPasswordStrengthLabel = (score: number): string => {
  switch (score) {
    case 0:
    case 1:
      return 'Very Weak';
    case 2:
      return 'Weak';
    case 3:
      return 'Fair';
    case 4:
      return 'Good';
    case 5:
      return 'Strong';
    default:
      return 'Very Weak';
  }
};

export const getPasswordStrengthColor = (score: number): string => {
  switch (score) {
    case 0:
    case 1:
      return 'bg-red-500';
    case 2:
      return 'bg-orange-500';
    case 3:
      return 'bg-yellow-500';
    case 4:
      return 'bg-blue-500';
    case 5:
      return 'bg-green-500';
    default:
      return 'bg-gray-300';
  }
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateWebsite = (website: string): boolean => {
  try {
    new URL(website.startsWith('http') ? website : `https://${website}`);
    return true;
  } catch {
    return false;
  }
};

export const validateForm = (formData: any, accountType: string): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Email validation
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password validation
  if (!formData.password) {
    errors.password = 'Password is required';
  } else {
    const passwordStrength = validatePassword(formData.password);
    if (passwordStrength.score < 3) {
      errors.password = 'Password is too weak. Please include: ' + passwordStrength.feedback.join(', ');
    }
  }

  // Confirm password validation
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Enterprise account specific validations
  if (accountType === 'enterprise') {
    if (!formData.businessName) {
      errors.businessName = 'Business name is required';
    }

    if (!formData.businessAddress) {
      errors.businessAddress = 'Business address is required';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (formData.website && !validateWebsite(formData.website)) {
      errors.website = 'Please enter a valid website URL';
    }
  }

  // Terms acceptance validation
  if (!formData.termsAccepted) {
    errors.termsAccepted = 'You must accept the Terms of Service and Privacy Policy';
  }

  return errors;
};

export const simulateRateLimit = (attempts: number, lastAttempt: number): { allowed: boolean; waitTime?: number } => {
  const now = Date.now();
  const timeSinceLastAttempt = now - lastAttempt;
  const maxAttempts = 5;
  const lockoutDuration = 15 * 60 * 1000; // 15 minutes
  const attemptWindow = 5 * 60 * 1000; // 5 minutes

  // Reset attempts if enough time has passed
  if (timeSinceLastAttempt > attemptWindow) {
    return { allowed: true };
  }

  // Check if user is locked out
  if (attempts >= maxAttempts) {
    const waitTime = Math.ceil((lockoutDuration - timeSinceLastAttempt) / 1000 / 60);
    return { allowed: false, waitTime };
  }

  return { allowed: true };
};
