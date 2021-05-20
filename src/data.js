import { v4 as uuidv4 } from "uuid";

export const projects = [
	{
		title: 'Zetkin',
		description:
			'During my degree project in front-end development I worked on the user dashboard of the new version of Zetkin, a web based tool for political organizing.',
		img: [{ img: './img/Z.png', id: uuidv4(), credits: '' }],
		url: 'https://github.com/zetkin/app.zetkin.org',
		role: 'Developer',
		category: [['Development']],
		format: 'Website',
		tools: ' Adobe React Spectrum, HTML, CSS, Cypress, JavaScript, Next.js, React, React Query, TypeScript',
		github: 'https://github.com/zetkin/app.zetkin.org',
		credits: '',
		id: uuidv4(),
	},
  {
		title: 'Tris Vonna-Michell',
		description:
			'A presentation tool in the shape of a website for artist Tris Vonna-Michell. It is intented to be used foremost as an alternatives to PDF:s and the like during presentations, but has the extra functionality of a portfolio website.',
		img: [{ img: './img/T.png', id: uuidv4(), credits: '' }],
		url: 'https://www.tris-vonna-michell.com/',
		role: 'Developer, Designer',
		category: [['Development'], ['Design']],
		team: 'Erik Calmfors',
		format: 'Website',
		tools: 'HTML, CSS, JavaScript, Prismic, React',
		github: 'https://github.com/kristofferlarberg/trisvonnamichell',
		credits: '',
		id: uuidv4(),
	},
	{
		title: 'Appendix',
		description:
			'A platform which presents the graduate projects from the programs MA Spatial Design and BA Interior Architecture & Furniture Design at Konstfack 2020.',
		img: [{ img: './img/A.png', id: uuidv4(), credits: '' }],
		url: 'https://konstfack2020.se/appendix/',
		role: 'Developer, Designer',
		category: [['Development'], ['Design']],
		team: 'Per Sturesson',
		format: 'Website',
		tools: 'HTML, CSS, Gatsby, JavaScript, React',
		github: 'https://github.com/kristofferlarberg/appendix',
		credits: '',
		id: uuidv4(),
	},
	{
		title: 'Riksdagskollen',
		description:
			'The foundation for a web app proposal which visualizes voting data from the Swedish parliament via "The Riksdag’s open data" API. This project was carried out as a team assignment part of a diploma course in front-end development. The assignment had its main focus on React and handling API requests as well as a basic introduction to Firebase. The project also included training in agile toolss, especially Scrum.',
		img: [{ img: './img/RK1.png', id: uuidv4(), credits: '' }],
		url: 'https://github.com/kristofferlarberg/fe19tp2_strawberry',
		role: 'Developer',
		category: [['Development']],
		team: 'Amanda Olsson, Erik Calmfors, Ismail Güven, Mohmed Salah Ahmed',
		format: 'Website',
		tools: 'HTML, CSS, JavaScript, React',
		github: 'https://github.com/kristofferlarberg/fe19tp2_strawberry',
		id: uuidv4(),
	},
	{
		title: 'Konsthall C',
		description:
			'Konsthall C is an artistic space located in the suburb of Hökarängen in Stockholm with a direction and theme that changes every two years, in addition to certain fixed formats and events. The filtering function makes it easy to take part of all past events, an important aspect of the previous website. The design also builds upon previous use of colours and the typeface Georgia.',
		img: [{ img: './img/KC.png', id: uuidv4(), credits: '' }],
		url: 'https://konsthallc.se/',
		role: 'Designer',
		category: [['Design']],
		team: 'Sanna Frese (Development)',
		format: 'Website',
		tools: 'Layout, Typography, UI, UX',
		github: '',
		id: uuidv4(),
	},
];

export const bio = [
  {
    description: `I’m a Stockholm based front-end developer with graphic design experience, often from working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development which I’ve become rather passionate about. I’m drawn to working with data structures, developing playful visual aesthetics and creating intuitive functionality.`,
    credits: "",
    img: "./img/portrait.png",
    id: uuidv4(),
  },
];

export const contact = [
  {
    contact: "mail@kristofferlarberg.se",
    id: uuidv4(),
  },
];

export const links = [
  {
    name: "GitHub",
    link: "https://github.com/kristofferlarberg",
    id: uuidv4(),
  },
  {
    name: "LinkedIn",
    link: "https://se.linkedin.com/in/kristofferlarberg",
    id: uuidv4(),
  },
];

export const languages = [
  {
    title: "CSS",
    id: uuidv4(),
  },
  {
    title: "HTML 5",
    id: uuidv4(),
  },
  {
    title: "Javascript ES6",
    id: uuidv4(),
  },
  {
    title: "TypeScript",
    id: uuidv4(),
  },
];

export const frameLib = [
  {
    title: "Adobe React Spectrum",
    id: uuidv4(),
  },
  {
    title: "Chakra UI",
    id: uuidv4(),
  },
  {
    title: "Flutter",
    id: uuidv4(),
  },
  {
    title: "Gatsby",
    id: uuidv4(),
  },
  {
    title: "Next.js",
    id: uuidv4(),
  },
  {
    title: "React",
    id: uuidv4(),
  },
  {
    title: "React Query",
    id: uuidv4(),
  },
];

export const tools = [
  {
    title: "Firebase",
    id: uuidv4(),
  },
  {
    title: "GraphQL",
    id: uuidv4(),
  },
  {
    title: "Git",
    id: uuidv4(),
  },
  {
    title: "npm",
    id: uuidv4(),
  },
  {
    title: "Prismic",
    id: uuidv4(),
  },
  {
    title: "Styled Components",
    id: uuidv4(),
  },
];

export const software = [
  {
    title: "Adobe CC",
    id: uuidv4(),
  },
  {
    title: "Figma",
    id: uuidv4(),
  },
  {
    title: "Glyphs",
    id: uuidv4(),
  },
  {
    title: "VS Code",
    id: uuidv4(),
  },
];
