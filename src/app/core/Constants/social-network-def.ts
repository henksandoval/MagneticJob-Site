import { SocialNetworkInfo } from '@core/interfaces/social-network-info';

type SocialNetworkType = 'Facebook' | 'Twitter' | 'LinkedIn' | 'Instagram' | 'Skype';

type SocialNetworkDef = Record<SocialNetworkType, SocialNetworkInfo>;

export const SocialNetworkTypes: SocialNetworkDef = {
  Facebook: {
    name: 'Facebook',
    icon: 'bxl-facebook',
  },
  Twitter: {
    name: 'Twitter',
    icon: 'bxl-twitter',
  },
  Instagram: {
    name: 'Instagram',
    icon: 'bxl-instagram',
  },
  LinkedIn: {
    name: 'LinkedIn',
    icon: 'bxl-linkedin',
  },
  Skype: {
    name: 'Skype',
    icon: 'bxl-skype',
  },
} as const;
