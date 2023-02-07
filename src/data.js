import {v4 as uuidv4} from 'uuid';

const data = {
  bio: [
    {
      description: `I’m a Stockholm based developer drawn to working with both user interfaces and handling data, with a passion for accessibility.
       This portfolio contains selected work. See my GitHub for more work and other projects.`,
      id: uuidv4(),
    },
  ],
  contact: [
    {
      contact: 'kristoffer.larberg@icloud.com',
      id: uuidv4(),
    },
  ],
  links: [
    {
      id: uuidv4(),
      link: 'https://github.com/kristofferlarberg',
      name: 'GitHub',
    },
    {
      id: uuidv4(),
      link: 'https://se.linkedin.com/in/kristofferlarberg',
      name: 'LinkedIn',
    },
  ],
  projects: [
    {
      category: ['Development'],
      description:
        'A temporary site for the new version of sparvagsmuseet.se.',
      format: 'Website',
      frameLibs: 'Next.js',
      github: '',
      id: uuidv4(),
      languages: 'CSS, HTML, JavaScript, TypeScript',
      team: 'Familjen Sthlm',
      title: 'Spårvägsmuseet',
      tools: 'ESLint, Styled Components',
      url: 'https://sparvagsmuseet.se/',
      video: './video/S.mov',
    },
    {
      category: ['Development', 'Design'],
      description:
        `A new home for for Antikvariat Hundörat in Stockholm and Österlen.
         Aside from general information about the stores,
         the site collects writings and news articles by owner Peter Bodén.`,
      format: 'Website',
      frameLibs: 'React',
      github: 'https://github.com/kristofferlarberg/hundorat',
      id: uuidv4(),
      img: './img/H.png',
      languages: 'CSS, HTML, JavaScript, TypeScript',
      team: '',
      title: 'Hundörat',
      tools: 'Chakra UI, ESLint, React Query',
      url: 'http://hundorat.se/',
    },
    {
      category: ['Development'],
      description:
        `During my degree project in front-end development
         I worked on the user dashboard of the new version of Zetkin,
         a web based tool for political organizing.`,
      format: 'Website',
      frameLibs: 'Next.js',
      github: 'https://github.com/zetkin/app.zetkin.org',
      id: uuidv4(),
      img: './img/Z.png',
      languages: 'CSS, HTML, JavaScript, TypeScript',
      team: '',
      title: 'Zetkin',
      tools: 'Adobe React Spectrum, ESLint, React Query',
      url: 'https://github.com/zetkin/app.zetkin.org',
    },
    {
      category: ['Development', 'Design'],
      description:
        `A presentation tool in the shape of a website for artist Tris Vonna-Michell.
         It is intented to be used foremost as an alternative to PDF:s and the like during presentations,
         but has the extra functionality of a portfolio website.`,
      format: 'Website',
      frameLibs: 'React',
      github: 'https://github.com/kristofferlarberg/trisvonnamichell',
      id: uuidv4(),
      img: './img/T.png',
      languages: 'CSS, HTML, JavaScript',
      team: 'Erik Calmfors',
      title: 'Tris Vonna-Michell',
      tools: 'ESLint, Prismic',
      url: 'https://www.tris-vonna-michell.com/',
    },
  ],
  tech: {
    frameLibs: [
      {
        id: uuidv4(),
        title: 'Next.js',
      },
      {
        id: uuidv4(),
        title: 'React',
      },
      {
        id: uuidv4(),
        title: 'Vue.js',
      },
    ],
    languages: [
      {
        id: uuidv4(),
        title: 'CSS',
      },
      {
        id: uuidv4(),
        title: 'HTML',
      },
      {
        id: uuidv4(),
        title: 'Javascript',
      },
      {
        id: uuidv4(),
        title: 'TypeScript',
      },
    ],
    software: [
      {
        id: uuidv4(),
        title: 'Adobe CC',
      },
      {
        id: uuidv4(),
        title: 'Figma',
      },
      {
        id: uuidv4(),
        title: 'Notion',
      },
      {
        id: uuidv4(),
        title: 'VS Code',
      },
    ],
    tools: [
      {
        id: uuidv4(),
        title: 'Contentful',
      },
      {
        id: uuidv4(),
        title: 'Cypress',
      },
      {
        id: uuidv4(),
        title: 'ESLint',
      },
      {
        id: uuidv4(),
        title: 'GraphQL',
      },
      {
        id: uuidv4(),
        title: 'Git',
      },
      {
        id: uuidv4(),
        title: 'npm',
      },
      {
        id: uuidv4(),
        title: 'Prismic',
      },
      {
        id: uuidv4(),
        title: 'React Query',
      },
      {
        id: uuidv4(),
        title: 'Styled Components',
      },
      {
        id: uuidv4(),
        title: 'Tailwind',
      },
    ],
  },
};

export default data;
