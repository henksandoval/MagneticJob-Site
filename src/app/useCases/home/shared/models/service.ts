export interface Service {
  title: string;
  overview: string;
  serviceDetails: ServiceDetails[];
}

export interface ServiceDetails {
  name: string;
  description: string;
  backgroundUrl: string;
}
