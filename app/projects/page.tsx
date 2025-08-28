import { genPageMetadata } from 'app/seo';

import projectsData from '@/data/projectsData';
import { fetchRepoData } from '@/servers/github.server';
import ProjectCard from '@/components/project/ProjectCard';

export const metadata = genPageMetadata({ title: 'Projects' });

export default async function Projects() {
  // await Promise.all(
  //   projectsData.map(async (p) => {
  //     if (p.repo && typeof p.repo === 'string') {
  //       p.repo = await fetchRepoData(p.repo as string);
  //     }
  //   })
  // );

  const projects = projectsData.map((p) => {
    return { ...p, repo: undefined };
  });

  const description = 'My open-source side projects and stuff that I built with my colleagues at work';

  const workProjects = projects.filter(({ type }) => type === 'work');
  const sideProjects = projects.filter(({ type }) => type === 'self');

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-3 md:space-y-5 md:pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects - Work
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p> */}
        </div>
        {/* <div className="container py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Got lazy, will add my projects here soon.
            </p>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">If you're a recruiter, HMU!</p>
          </div>
        </div> */}

        <div className="container py-12">
          {/* <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Work
          </h3> */}
          <div className="-m-4 flex flex-wrap">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p> */}
      </div>
    </>
  );
}
