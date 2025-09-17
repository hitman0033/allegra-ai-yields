// Social media and external links constants
import { Twitter, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
    ariaLabel: 'Twitter',
  },
  {
    name: 'Telegram',
    href: '#',
    icon: MessageCircle,
    ariaLabel: 'Telegram',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Email',
    href: '#',
    icon: Mail,
    ariaLabel: 'Email',
  },
] as const;
