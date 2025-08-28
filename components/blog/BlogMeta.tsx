import { formatDate } from 'pliny/utils/formatDate';

import { StatsType } from '@prisma/client';

import type { BlogMetaProps } from '@/types/index';

import Twemoji from '@/components/ui/Twemoji';
import ViewCounter from '@/components/blog/ViewCounter';

const BlogMeta = ({ date, slug, readingTime }: BlogMetaProps) => {
  return (
    <dd className="flex-column flex items-center gap-1 font-semibold text-gray-500 dark:text-gray-400">
      <time dateTime={date} className="flex items-center">
        <Twemoji emoji="calendar" />
        <span className="text-center sm:ml-2">{formatDate(date)}</span>
      </time>

      <span className="mx-2">{` • `}</span>

      <div className="flex items-center">
        <Twemoji emoji="hourglass-not-done" />
        <span className="text-center sm:ml-1.5">{Math.ceil(readingTime.minutes)} mins read</span>
      </div>

      <span className="mx-2">{` • `}</span>

      <div className="flex items-center">
        <Twemoji emoji="eye" />
        <ViewCounter className="text-center sm:ml-2" slug={slug} type={StatsType.blog} />
      </div>
    </dd>
  );
};

export default BlogMeta;
