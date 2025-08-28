import { map } from 'lodash';

import popularTags from '@/data/popularTags';

// import Link from '@/components/ui/Link';
import BrandIcon from '@/components/ui/BrandIcon';

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="mt-10 space-y-2 pb-3 md:space-y-5 xl:mt-8 xl:pb-0">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14 xl:text-3xl xl:leading-9">
          My Tech Stack
        </h1>
        {/* <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Popular tags feature the most widely favored topics.
        </p> */}
      </div>

      <div className="popular-tags grid grid-cols-2 gap-2 pt-6 sm:grid-cols-3">
        {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag;

          const className = `flex gap-1 justify-start items-center border border-gray-200 dark:border-gray-800 w-full space-x-2 rounded-lg py-3 px-4 bg-neutral-50/50 dark:bg-neutral-900/30 hover:bg-neutral-50 dark:hover:bg-neutral-900`;

          return (
            <div key={slug} className={className}>
              <BrandIcon type={iconType} className="h-6 w-6" />
              <div className="my-auto text-black dark:text-white">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTags;
