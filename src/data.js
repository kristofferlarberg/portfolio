import {v4 as uuidv4} from 'uuid';

const data = {
  bio: [
    {
      description: `I’m a Stockholm based developer with a background in graphic design,
       drawn to working with data and experiment with visual expressions.
       This portfolio contains selected work done while freelancing and studying.
       See my GitHub for smaller experiments and more work.`,
      id: uuidv4(),
    },
  ],
  contact: [
    {
      contact: 'mail@kristofferlarberg.se',
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
      category: ['Development', 'Design'],
      description:
        `A new home for for Antikvariat Hundörat in Stockholm and Österlen.
         Aside from general information about the stores,
         the site collects writings and news articles by owner Peter Bodén.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/hundorat',
      id: uuidv4(),
      img: './img/H.png',
      team: '',
      title: 'Hundörat',
      tools: 'HTML, CSS, JavaScript, React, React Query, TypeScript, Chakra UI',
      url: 'http://hundorat.se/',
    },
    {
      category: ['Development'],
      description:
        `During my degree project in front-end development
         I worked on the user dashboard of the new version of Zetkin,
         a web based tool for political organizing.`,
      format: 'Website',
      github: 'https://github.com/zetkin/app.zetkin.org',
      id: uuidv4(),
      img: './img/Z.png',
      team: '',
      title: 'Zetkin',
      tools: 'Adobe React Spectrum, HTML, CSS, Cypress, JavaScript, Next.js, React, React Query, TypeScript',
      url: 'https://github.com/zetkin/app.zetkin.org',
    },
    {
      category: ['Development', 'Design'],
      description:
        `A presentation tool in the shape of a website for artist Tris Vonna-Michell.
         It is intented to be used foremost as an alternative to PDF:s and the like during presentations,
         but has the extra functionality of a portfolio website.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/trisvonnamichell',
      id: uuidv4(),
      img: './img/T.png',
      team: 'Erik Calmfors',
      title: 'Tris Vonna-Michell',
      tools: 'HTML, CSS, JavaScript, Prismic, React, UI',
      url: 'https://www.tris-vonna-michell.com/',
    },
    {
      category: ['Development', 'Design'],
      description:
        `A platform which presents the graduate projects from the programs MA Spatial Design and
         BA Interior Architecture & Furniture Design at Konstfack 2020.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/appendix',
      id: uuidv4(),
      img: './img/A.png',
      team: 'Per Sturesson',
      title: 'Appendix',
      tools: 'HTML, CSS, Gatsby, JavaScript, React',
      url: 'https://konstfack2020.se/appendix/',
    },
    {
      category: ['Design', 'Development'],
      description:
        `Konsthall C is an artistic space located in the suburb of Hökarängen in Stockholm
         with a direction and theme that changes every two years,
         in addition to certain fixed formats and events.
         The filtering function makes it easy to take part of all past events,
         an important aspect of the previous website. In a second stage of the development,
         Shopify was integrated into the site.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/konsthallc.se',
      id: uuidv4(),
      img: './img/KC.png',
      team: 'Sanna Frese, Erik Calmfors, Per Sturesson',
      title: 'Konsthall C',
      tools: 'UI, UX, Nuxt.js, Shopify',
      url: 'https://konsthallc.se/',
    },
  ],
  tech: {
    frameLib: [
      {
        id: uuidv4(),
        title: 'Eleventy',
      },
      {
        id: uuidv4(),
        title: 'Flutter',
      },
      {
        id: uuidv4(),
        title: 'Gatsby',
      },
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
        title: 'HTML 5',
      },
      {
        id: uuidv4(),
        title: 'Javascript ES6',
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
        title: 'Glyphs',
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
        title: 'Firebase',
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
    ],
  },
};

export default data;
