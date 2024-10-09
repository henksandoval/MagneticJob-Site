export interface Service {
  overview: string;
  serviceDetails: ServiceDetails[];
}

export interface ServiceDetails {
  name: string;
  description: string;
  backgroundUrl: string;
}
