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
          <li>Build and maintain a large-scale project using Next.js (frontend) and Firebase (backend).</li>
          <li>Integrate Redux and Redux-Saga for efficient state management and complex client-side data workflows.</li>
          <li>Supervise interns, guiding them through development tasks and best practices.</li>
          <li>
            Significantly improve development productivity by leveraging AI tools for coding, documentation, and mockup
            generation.
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
            Pursue a degree in Automation Engineering, focusing on optimizing and automating technical and business
            workflows.
          </li>
          <li>
            Apply automation principles and tools to design efficient processes, reducing manual labor and operational
            costs.
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
          <li>Completed a Computer Science degree with a focus on web development and artificial intelligence.</li>
          <li>
            Gained hands-on experience in building web applications and exploring AI-driven solutions to real-world
            problems.
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
