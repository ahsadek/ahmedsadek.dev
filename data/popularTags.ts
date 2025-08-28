import { BrandIconType } from '@/components/ui/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/tags/react',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/tags/tailwindcss',
    iconType: 'TailwindCSS',
    slug: 'tailwindcss',
    title: 'Tailwind',
  },
  {
    href: '/tags/nextjs',
    iconType: 'NextJS',
    slug: 'nextjs',
    title: 'NextJS',
  },
  {
    href: '/tags/postgres',
    iconType: 'Postgres',
    slug: 'postgres',
    title: 'Postgres',
  },
];

export default popularTags;
