import { UserPersonalData } from '../interfaces/user-personal-data';
import { SocialNetworkTypes } from '@core/Constants/social-network-def';

export const mockPersonalData: UserPersonalData = {
  name: 'Test Name',
  professions: ['Developer', 'QA', 'DevOps'],
  socialNetworks: [
    { type: SocialNetworkTypes.Facebook, url: 'http://facebook.com/userprofile' },
    { type: SocialNetworkTypes.Twitter, url: 'http://twitter.com/userprofile' },
    { type: SocialNetworkTypes.LinkedIn, url: 'http://linkedin.com/userprofile' },
  ],
};
