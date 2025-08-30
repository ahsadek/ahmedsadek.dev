'use client';

import Snowfall from 'react-snowfall';
import { formatDate } from 'pliny/utils/formatDate';
// import NewsletterForm from 'pliny/ui/NewsletterForm';

import siteMetadata from '@/data/siteMetadata';
import { Tag, Link, Twemoji } from '@/components/ui';
import {
  Avatar,
  Heading,
  Greeting,
  TypedBios,
  BlogLinks,
  PopularTags,
  ShortDescription,
  SpotifyNowPlaying,
} from '@/components/homepage';
import Footer from '@/components/footer';

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
  return (
    <>
      <div className="relative">
        {/* <Snowfall
        snowflakeCount={60}
        style={{
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
        }}
      /> */}

        {/* Introduce myself */}
        <div className="mt-8 dark:divide-gray-700 md:mt-24">
          <Greeting />
          <div className="flex flex-col justify-between gap-5 md:my-4 xl:flex-row xl:gap-0">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex w-full justify-center sm:justify-start">
                <Avatar />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center text-lg leading-8 text-gray-600 dark:text-gray-400 xl:pr-8">
              <div className="rounded-md border border-gray-200 bg-neutral-50/50 p-6 dark:border-gray-800 dark:bg-neutral-900/30">
                <Heading />
                <div className="mt-2">
                  <TypedBios />
                </div>
              </div>
              <PopularTags />

              {/* <ShortDescription />
            <BlogLinks /> */}
              {/* <SpotifyNowPlaying /> */}
              {/* <p className="flex">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p> */}
            </div>
          </div>
        </div>

        {/* List all post */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="mt-10 space-y-2 pb-3 md:space-y-5 xl:pt-7">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14 xl:text-5xl">
              Recent Posts
            </h1>
          </div>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post;
              return (
                <li key={slug} className="py-6">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}

        {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
      </div>
      <Footer />
    </>
  );
}
