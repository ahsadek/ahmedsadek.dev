import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'Scikoop',
    url: 'https://scikoop.com',
    logo: '/static/images/experiences/scikoop-logo.png',
    start: 'Apr 2025',
    end: 'Present',
    title: 'Fullstack Developer',
    icon: 'man-technologist',
    event: 'career-scikoop',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Build{' '}
            <a href="https://ecomheat.youneteci.com" rel="noopener noreferrer" target="_blank">
              Ecomheat
            </a>{' '}
            - a website helps to measure the performance of the industry and players on E-Commerce platforms thru cross
            E-commerce channels.
          </li>
          <li>
            Build <strong>AppCore</strong> - Developed and published core NestJS packages, including DatabaseModule,
            CacheModule, RedisModule, ConfigModule and others on npm to accelerate development and deployment across
            multiple projects.
          </li>
        </ul>
      );
    },
  },
  {
    org: 'École de Technologie Supérieure',
    url: 'https://etsmtl.ca',
    logo: '/static/images/experiences/ets-logo.png',
    start: 'Sep 2024',
    end: 'Present',
    title: 'Bachelor Degree in Automation Engineering',
    icon: 'man-technologist',
    event: 'career-ets',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>Developed and maintained web applications</strong> for managing company website content, including
            blogs, clients, and recruitment.
          </li>
          <li>
            Implemented backend solutions using <strong> NestJS, PostgreSQL, and Prisma</strong>.
          </li>
          <li>
            <strong>Participated in Agile methodologies </strong> to boost project efficiency and completion rates.
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Cégep du Vieux Montréal',
    url: 'https://www.cvm.qc.ca/',
    logo: '/static/images/experiences/cvm-logo.png',
    start: 'Aug 2021',
    end: 'Jun 2024',
    title: 'Associate Degree in Computer Science',
    icon: 'man-technologist',
    event: 'career-cvm',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at <strong>School of Computer Science</strong>
          </li>
          <li>
            While most of my friends pursued careers in <strong> Data or AI Engineering </strong>, I found my passion in{' '}
            {''}
            <strong>Software Engineering</strong> , particularly in web and app development. This decision has shaped
            who I am today.
          </li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
