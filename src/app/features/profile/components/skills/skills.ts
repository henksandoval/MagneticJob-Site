export interface SkillSet {
  overview: string;
  skillDetails: SkillDetail[];
}

export interface SkillDetail {
  rank: number;
  name: string;
  iconUrl: string;
}
