import { Position } from '../../models/position';
import { WorkExperience } from '../../models/workExperience';

export const mockPosition: Position = {
  specialist: '',
  startdate: '',
  location: '',
  communicationDesignLeadership: '',
  teamLeadership: '',
  designQualityAssurance: '',
  expertiseArea: '',
};

export const mockWorkExperience: WorkExperience = {
  position: [mockPosition],
};
