import { Service, ServiceDetails } from '../../../shared/models/service';

export const mockServiceDetails: ServiceDetails = {
  name: 'SEO Consulting',
  description:
    "We optimize your website's performance and develop strategies to attract users interested in purchasing your products or hiring your services.",
  backgroundUrl:
    'https://www.bing.com/images/search?view=detailV2&ccid=KfOHRb47&id=0FD86363309638790692EF7C087E0578B8C18CB8&thid=OIP.KfOHRb47qEB8y3vbKpTifQHaEU&mediaurl=https%3a%2f%2fwww.campustraining.es%2fwp-content%2fuploads%2f2020%2f12%2ffunciones-fotografo-profesional.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.29f38745be3ba8407ccb7bdb2a94e27d%3frik%3duIzBuHgFfgh87w%26pid%3dImgRaw%26r%3d0&exph=918&expw=1571&q=imagen+de+fotografo&simid=608028028367489008&FORM=IRPRST&ck=5264DEF23DC72764EC24610924AC8C9E&selectedIndex=18&itb=0',
};

export const mockService: Service = {
    title: "Services",
    overview: "We focus on understanding your company's needs to create a website tailored to your clients. You also have the support of our specialists in programming, design, and digital marketing to guide you through the process and resolve any questions you may have.",
    serviceDetails: [mockServiceDetails]
}