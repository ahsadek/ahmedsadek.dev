import type { GithubRepository, ProjectCardProps } from '@/types/index';

import { Zoom, Link, Image } from '@/components/ui';
import { GithubRepo } from '@/components/project';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imgSrc, url, repo, builtWith } = project;

  const repository = repo as GithubRepository | undefined;

  const href = repository?.url || url;

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${imgSrc && 'h-full'} flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-neutral-50 shadow-lg dark:border-gray-800 dark:bg-neutral-900/80`}
      >
        <Zoom>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-60"
            width={1088}
            height={612}
          />
        </Zoom>

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {repository?.description || description}
          </p>

          <div className="mb-3 flex flex-wrap space-x-1.5">
            <span className="font-medium text-gray-600 dark:text-gray-300">Built with: {builtWith?.join(', ')}.</span>
          </div>
          {repository ? (
            <GithubRepo repo={repository} />
          ) : (
            href && (
              <Link
                href={href}
                className="text-primary text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                Visit &rarr;
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
