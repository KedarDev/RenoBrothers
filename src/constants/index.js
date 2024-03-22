import { image10, image11, video1, video2, video3, video4 } from "../assets";




const sliderContent = [
  {
    img: image10,
    name: "BEFORE",
  },
  {
    img: image11,
    name: "AFTER",
  },
  {
    img: image10,
    name: "BEFORE",
  },
  {
    img: image11,
    name: "AFTER",
  },
];

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "Gallery",
    title: "Gallery",
  },
];

const services = [
  {
    id: "Carpentry",
    title: "CARPENTRY",
    img: image10,
  },
  {
    id: "Roofing",
    title: "ROOFING",
    img: image11,
  },
  {
    id: "Legal Basement",
    title: "LEGAL BASEMENT",
    img: image10,
  },
  {
    id: "Flooring",
    title: "FLOORING",
    img: image11,
  },
];

const gallery = [
  {
    id: "img1",
    img: image10,
  },
  {
    id: "img2",
    img: image11,
  },
  {
    id: "img3",
    img: image10,
  },
  {
    id: "img4",
    img: image11,
  },
];

const gallerySlide = [
  {
    id: "img1",
    img: image10,
  },
  {
    id: "img2",
    img: image11,
  },
  {
    id: "img3",
    img: image10,
  },
  {
    id: "img4",
    img: image11,
  },
];

const slides = [
  {
    id: "img1",
    img: image10,
  },
  {
    id: "img2",
    img: image11,
  },
  {
    id: "img3",
    img: image10,
  },
  {
    id: "img4",
    img: image11,
  },
];

const videos = [
  {
    id: "video1",
    video: video1,
  },
  {
    id: "video2",
    video: video2,
  },
  {
    id: "video3",
    video: video3,
  },
  {
    id: "video4",
    video: video4,
  },
];

const steps = [
    {
      id: 'Intro',
      message: "Hi, it's Reno your Messenger Assisstent. Whats your name?",
      end: true,
    },
    {
      id: 'Email',
      message: "Hi, {previousValue}, Whats your email?",
      end: true,
    },
    {
      id: 'Number',
      message: "Whats your number?",
      end: true,
    },
    {
      id: 'Message',
      message: "Whats your your message?",
      end: true,
    },
]



export { steps, navLinks, services, gallery, gallerySlide, sliderContent, slides, videos };
