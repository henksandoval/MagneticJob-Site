export interface Titles {
  resume: string;
  profil: string;
  summary: string;
  education: string;
  workExperience: string;
}

export interface Contact {
  location: string;
  phoneNumber: string;
  aliceBarkle: string;
}

export interface Sumary {
  name: string;
  summary: string;
  contact: Contact[];
}


export interface Education {
  detail: Detail[];
}

export interface WorkExperience {
 experienceposition: Experienceposition[];
}

export interface Detail {
  experience: string;
  startdate: string;
  Academy: string;
  description: string;
}

export interface Experienceposition {
  position: string;
  startdate: string;
  location: string;
  communicationDesignLeadership: string;
  teamLeadership: string;
  designQualityAssurance: string;
  expertiseArea: string;
}

export interface Resume {
  titles: Titles;
  sumary: Sumary;
  education: Education;
  workExperience: WorkExperience;
}
