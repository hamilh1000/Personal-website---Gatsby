import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hugh Hamilton-Green', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website - all things tech, start-ups and sustainability', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Hugh Hamilton-Green',
  subtitle:
    'I am an MSc Computer Science (conversion) student and Economics and Management graduate.',
  cta: 'Find out more below',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_6413.jpg',
  paragraphOne:
    'I am a MSc Computer Science (conversion) student and Economics and Management graduate. Passion for data and technology and how they can transform industries. Actively pursuing interests in FinTech, Data Science, Venture Capital, and Digital Strategy.',
  paragraphTwo:
    'Aspiring entrepreneur pursuing ideas in the food and beverage industry, with a focus on sustainability and healthy living.',
  paragraphThree:
    'Alongside my studies, I am a keen sportsman and budding chef. The dream is to one day own a restaurant on the Cornish coast.',
  resume: 'HUGH HAMILTON-GREEN CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to get in contact...',
  btn: '',
  email: 'hughgreen1664@hotmail.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hugh-hamilton-green/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
