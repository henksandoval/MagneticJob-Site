import { PortFolio } from '../../models/portfolio';
import { WebPage } from '../../models/webPage';

export const mockWebPage: WebPage = {
  position: 1,
  title: 'Aventuras Animales',
  description: 'Cada fotografía captura momentos únicos y comportamientos fascinantes.',
  link: 'https://www.jetbrains.com/teamcity/?gdmcid=7f94a68d-ad43-4c54-ad20-364c52ae127e',
  image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
  type: 'CAT',
};

export const mockWebPage2: WebPage = {
  position: 2,
  title: 'Horizontes Naturales',
  description:
    'Cada imagen captura la esencia de lugares únicos, desde montañas imponentes hasta costas tranquilas, invitándote a explorar la belleza del mundo',
  link: 'https://pixabay.com/es/videos/oceano-playa-ondas-rompiendo-olas-160767/',
  image: 'https://th.bing.com/th/id/OIP.iwFhHHKPOqAJUDO-iSov_wHaE8?rs=1&pid=ImgDetMain',
  type: 'NATURE',
};

export const mockWebPage3: WebPage = {
  position: 3,
  title: 'Instantes Eternos',
  description:
    'Cada fotografía captura la esencia y la alegría de un día tan especial, transformando recuerdos en arte eterno.',
  link: 'https://www.istockphoto.com/es/v%C3%ADdeo/reci%C3%A9n-casados-bailando-vals-en-la-pista-de-baile-gm1180011493-330411869',
  image:
    'https://1.bp.blogspot.com/-j-w8B3RW3qI/VwgTezGX_6I/AAAAAAAAFag/-bUAYbTtqzorWspGeEgjbCq41iLIOC9Tw/s1600/Wedding06-main.jpg',
  type: 'MARRIES',
};

export const mockWebPage4: WebPage = {
  position: 4,
  title: 'Aventuras Animales',
  description: 'Cada fotografía captura momentos únicos y comportamientos fascinantes.',
  link: 'https://www.jetbrains.com/teamcity/?gdmcid=7f94a68d-ad43-4c54-ad20-364c52ae127e',
  image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
  type: 'CAT',
};

export const mockWebPage5: WebPage = {
  position: 5,
  title: 'Aventuras Animales',
  description: 'Cada fotografía captura momentos únicos y comportamientos fascinantes.',
  link: 'https://www.jetbrains.com/teamcity/?gdmcid=7f94a68d-ad43-4c54-ad20-364c52ae127e',
  image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
  type: 'CAT',
};

export const mockWebPage6: WebPage = {
  position: 6,
  title: 'Aventuras Animales',
  description: 'Cada fotografía captura momentos únicos y comportamientos fascinantes.',
  link: 'https://www.jetbrains.com/teamcity/?gdmcid=7f94a68d-ad43-4c54-ad20-364c52ae127e',
  image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
  type: 'NATURE',
};

export const mockWebPage7: WebPage = {
  position: 4,
  title: 'Music',
  description:
    'Cada imagen captura la esencia de la musica, el sonido llega al alma dando una hermosa sensacion de relajacion',
  link: '',
  image: 'https://i0.wp.com/www.nus.agency/wp-content/uploads/2023/03/musica-arte-scaled.jpg?ssl=1',
  type: 'Music',
};

export const mockPortfolio: PortFolio = {
  text: 'Portfolio',
  webPage: [mockWebPage, mockWebPage2, mockWebPage3, mockWebPage4, mockWebPage5, mockWebPage6, mockWebPage7],
};
