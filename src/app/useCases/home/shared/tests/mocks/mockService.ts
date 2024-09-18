import { Service, ServiceDetails } from '../../../shared/models/service';

export const mockServiceDetails: ServiceDetails = {
  name: 'SEO Consulting',
  description:
    "We optimize your website's performance and develop strategies to attract users interested in purchasing your products or hiring your services.",
  backgroundUrl: 'https://www.educaciontrespuntocero.com/recursos/programas-gratis-para-editar-imagenes/',
};

export const mockServiceDetails2: ServiceDetails = {
  name: 'Web and Brand Graphic Design',
  description:
    "Tell us your idea, and we'll make it a reality. We create a custom design based on your brand image, attractive for your visitors and efficient to ensure smooth navigation through your website.",
  backgroundUrl: 'https://www.educaciontrespuntocero.com/recursos/programas-gratis-para-editar-imagenes/',
};

export const mockServiceDetails3: ServiceDetails = {
  name: 'Web Development',
  description:
    'We bring your digital business vision to life with a 100% scalable website that you can update to stay current and ensure you are one step ahead of your competition.',
  backgroundUrl:
    'https://www.shutterstock.com/es/image-photo/poznan-pol-feb-25-2022-laptop-2259576401?consentChanged=true',
};

export const mockService: Service = {
  title: 'Services',
  overview:
    "We focus on understanding your company's needs to create a website tailored to your clients. You also have the support of our specialists in programming, design, and digital marketing to guide you through the process and resolve any questions you may have.",
  serviceDetails: [mockServiceDetails, mockServiceDetails2, mockServiceDetails3],
};
