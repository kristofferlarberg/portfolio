import {v4 as uuidv4} from 'uuid';

const data = {
  bio: [
    {
      description: `I’m a Stockholm based front-end developer with graphic design experience, 
      often from working in close collaboration with clients. 
      The last few years I’ve shifted from graphic design towards web development which I’ve 
      become rather passionate about. I’m drawn to working with data structures, 
      developing playful visual aesthetics and creating intuitive functionality.`,
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
      category: [['Development']],
      description:
        `During my degree project in front-end development
        I worked on the user dashboard of the new version of Zetkin,
        a web based tool for political organizing.`,
      format: 'Website',
      github: 'https://github.com/zetkin/app.zetkin.org',
      id: uuidv4(),
      img: './img/Z.png',
      role: 'Developer',
      team: '',
      title: 'Zetkin',
      tools: 'Adobe React Spectrum, HTML, CSS, Cypress, JavaScript, Next.js, React, React Query, TypeScript',
      url: 'https://github.com/zetkin/app.zetkin.org',
    },
    {
      category: [['Development'], ['Design']],
      description:
        `A presentation tool in the shape of a website for artist Tris Vonna-Michell. 
        It is intented to be used foremost as an alternatives to PDF:s and the like during presentations, 
        but has the extra functionality of a portfolio website.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/trisvonnamichell',
      id: uuidv4(),
      img: './img/T.png',
      role: 'Developer, Designer',
      team: 'Erik Calmfors',
      title: 'Tris Vonna-Michell',
      tools: 'HTML, CSS, JavaScript, Prismic, React',
      url: 'https://www.tris-vonna-michell.com/',
    },
    {
      category: [['Development'], ['Design']],
      description:
        `A platform which presents the graduate projects from the programs MA Spatial Design and 
        BA Interior Architecture & Furniture Design at Konstfack 2020.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/appendix',
      id: uuidv4(),
      img: './img/A.png',
      role: 'Developer, Designer',
      team: 'Per Sturesson',
      title: 'Appendix',
      tools: 'HTML, CSS, Gatsby, JavaScript, React',
      url: 'https://konstfack2020.se/appendix/',
    },
    {
      category: [['Development']],
      description:
        `The foundation for a web app proposal which visualizes voting data from 
        the Swedish parliament via 'The Riksdag’s open data' API. 
        This project was carried out as a team assignment part of a diploma course 
        in front-end development. The assignment had its main focus on React and handling 
        API requests as well as a basic introduction to Firebase. The project also 
        included training in agile tools, especially Scrum.`,
      format: 'Website',
      github: 'https://github.com/kristofferlarberg/fe19tp2_strawberry',
      id: uuidv4(),
      img: './img/RK1.png',
      role: 'Developer',
      team: 'Amanda Olsson, Erik Calmfors, Ismail Güven, Mohmed Salah Ahmed',
      title: 'Riksdagskollen',
      tools: 'HTML, CSS, JavaScript, React',
      url: 'https://github.com/kristofferlarberg/fe19tp2_strawberry',
    },
    {
      category: [['Design']],
      description:
        `Konsthall C is an artistic space located in the suburb of Hökarängen in Stockholm
        with a direction and theme that changes every two years, 
        in addition to certain fixed formats and events. 
        The filtering function makes it easy to take part of all past events, 
        an important aspect of the previous website. The design also builds upon previous 
        use of colours and the typeface Georgia.`,
      format: 'Website',
      github: '',
      id: uuidv4(),
      img: './img/KC.png',
      role: 'Designer',
      team: 'Sanna Frese (Development)',
      title: 'Konsthall C',
      tools: 'Layout, Typography, UI, UX',
      url: 'https://konsthallc.se/',
    },
  ],
  tech: {
    frameLib: [
      {
        id: uuidv4(),
        title: 'Adobe React Spectrum',
      },
      {
        id: uuidv4(),
        title: 'Chakra UI',
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
        title: 'React Query',
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
        title: 'VS Code',
      },
    ],
    tools: [
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
        title: 'Styled Components',
      },
    ],
  },
};

export default data;
