import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'Scikoop',
    description:
      'The pioneering E-commerce data intelligence platform in Vietnam for brands with the most granular data information.',
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
    title: 'Bottlr',
    description: 'Explore the World of Basic 3D Modeling Simulations on Our Website.',
    imgSrc: '/static/images/projects/bottlr-thumbnail.png',
    url: 'https://bottlr.ai',
    builtWith: ['VueJS', 'Convex', 'Typescript', 'Shadcn/ui'],
  },
  {
    type: 'academic',
    title: 'Magix - Card Game',
    description: 'Explore the World of Basic 3D Modeling Simulations on Our Website.',
    imgSrc: '/static/images/projects/magix-thumbnail.png',
    url: 'https://magix.ahmedsadek.dev',
    builtWith: ['VueJS', 'Convex', 'Typescript', 'Shadcn/ui'],
  },
];

export default projectsData;
