import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'Scikoop : Inclusive Research Platform',
    description:
      'AI-powered platform helping researchers build inclusive studies through EDI assessments, strategies, support, and certification.',
    imgSrc: '/static/images/projects/scikoop-thumbnail.png',
    url: 'https://scikoop.com',
    builtWith: ['Next.js', 'Firebase', 'Typescript', 'Redux', 'Shadcn/ui'],
  },
  // {
  //   type: 'work',
  //   title: 'Military 7A Bidding',
  //   description:
  //     'Creating a web-based system designed for the efficient management of bidding packages related to medical supplies information.',
  //   imgSrc: '/static/images/projects/military-7a-bidding.png',
  //   builtWith: ['NestJS', 'PosgreSQL', 'JWT', 'VueJS', 'Tailwind'],
  // },
  // {
  //   type: 'self',
  //   title: 'Personal website',
  //   imgSrc: '/static/images/projects/karhdo-blog.png',
  //   repo: 'Karhdo/karhdo.dev',
  //   builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  // },
  // {
  //   type: 'self',
  //   title: 'Website Selling Food',
  //   imgSrc: '/static/images/projects/website-selling-food.png',
  //   repo: 'Karhdo/Website-Selling-Food',
  //   builtWith: ['PHP', 'Laravel', 'MySQL', 'VueJS', 'Bootstrap'],
  // },
  {
    type: 'self',
    title: 'Bottlr : AI-powered Chatbot',
    description: 'Bottlr automates business communication with AI chatbots powered by your documents.',
    imgSrc: '/static/images/projects/bottlr-thumbnail.png',
    url: 'https://bottlr.ai',
    builtWith: ['Vite', 'Convex', 'Typescript', 'Shadcn/ui', 'Stripe'],
  },
  {
    type: 'self',
    title: 'TerminalWear : E-commerce Template',
    description: 'E-commerce template integrated with Printful for print-on-demand, featuring Stripe payments.',
    imgSrc: '/static/images/projects/terminalwear-thumbnail.png',
    url: 'https://terminalwear.com',
    builtWith: ['Next.js', 'PostgreSQL', 'Drizzle', 'Stripe', 'Sanity.io'],
  },
  {
    type: 'academic',
    title: 'Magix : Online Card Game',
    description: 'Online card game built in PHP with custom state management.',
    imgSrc: '/static/images/projects/magix-thumbnail.png',
    url: 'https://magix.ahmedsadek.dev',
    builtWith: ['PHP', 'Javascript', 'PostgreSQL'],
  },
];

export default projectsData;
