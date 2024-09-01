import { PortFolio } from '../../models/portfolio';
import { WebPage } from '../../models/webPage';

export const mockWebPage: WebPage = {
  position: 1,
  title: 'Aventuras Animales',
  description: 'Cada fotografía captura momentos únicos y comportamientos fascinantes.',
  link: 'https://www.jetbrains.com/teamcity/?gdmcid=7f94a68d-ad43-4c54-ad20-364c52ae127e',
  image: 'img/portfolio/portfolio-1.jpg',
  type: 'APP',
};

export const mockWebPage2: WebPage = {
  position: 2,
  title: 'Horizontes Naturales',
  description:
    'Cada imagen captura la esencia de lugares únicos, desde montañas imponentes hasta costas tranquilas, invitándote a explorar la belleza del mundo',
  link: 'https://pixabay.com/es/videos/oceano-playa-ondas-rompiendo-olas-160767/',
  image: 'https://th.bing.com/th/id/OIP.iwFhHHKPOqAJUDO-iSov_wHaE8?rs=1&pid=ImgDetMain',
  type: 'WEB',
};

export const mockWebPage3: WebPage = {
  position: 3,
  title: 'Instantes Eternos',
  description:
    'Cada fotografía captura la esencia y la alegría de un día tan especial, transformando recuerdos en arte eterno.',
  link: 'https://www.istockphoto.com/es/v%C3%ADdeo/reci%C3%A9n-casados-bailando-vals-en-la-pista-de-baile-gm1180011493-330411869',
  image:
    'https://1.bp.blogspot.com/-j-w8B3RW3qI/VwgTezGX_6I/AAAAAAAAFag/-bUAYbTtqzorWspGeEgjbCq41iLIOC9Tw/s1600/Wedding06-main.jpg',
  type: 'APP',
};

export const mockPortfolio: PortFolio = {
  text: 'Portfolio',
  webPage: [mockWebPage, mockWebPage2, mockWebPage3],
};
