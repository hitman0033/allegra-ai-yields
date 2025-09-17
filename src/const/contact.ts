// Contact information constants
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { ContactInfo } from '../types';

export const CONTACT_INFORMATION: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@allegra.finance', 'support@allegra.finance'],
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    description: 'Mon-Fri from 9am to 6pm EST',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Blockchain Street', 'Crypto City, CC 12345'],
    description: 'Visit our headquarters',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
    description: 'We\'re here to help',
  },
] as const;

export const INQUIRY_TYPES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'business', label: 'Business Partnership' },
  { value: 'media', label: 'Media & Press' },
  { value: 'legal', label: 'Legal & Compliance' },
] as const;
