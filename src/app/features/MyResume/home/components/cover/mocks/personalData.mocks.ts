import { UserPersonalData } from '../interfaces/user-personal-data';
import { SocialNetworkTypes } from '@core/Constants/social-network-def';

export const mockPersonalData: UserPersonalData = {
  name: 'Test Name',
  professions: ['Developer', 'QA', 'DevOps'],
  socialNetworks: [
    { type: SocialNetworkTypes.Twitter, url: 'https://twitter.com/developer' },
    { type: SocialNetworkTypes.Facebook, url: 'https://facebook.com/developer' },
    { type: SocialNetworkTypes.LinkedIn, url: 'https://linkedin.com/developer' },
  ],
};
