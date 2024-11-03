import { UserPersonalDataContract } from '../contracts/user-personal-data-contract';

export const mockPersonalDataContract: UserPersonalDataContract = {
  name: 'Test Name',
  professions: ['Developer', 'QA', 'DevOps'],
  socialNetworks: [
    { name: 'Twitter', url: 'https://twitter.com/developer' },
    { name: 'Facebook', url: 'https://facebook.com/developer' },
    { name: 'LinkedIn', url: 'https://linkedin.com/developer' },
  ],
};
