import BuildWith from '@/components/footer/BuildWith';

export default function Footer() {
  return (
    <footer>
      <div className="mt-4 flex w-full items-center justify-center space-y-4 border-t border-gray-200 py-8 dark:border-gray-700 md:mt-6 md:space-y-0 md:py-10">
        <span>
          Forked from{' '}
          <a
            href="https://github.com/Karhdo/karhdo.dev"
            className="text-primary cursor-pointer text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            target="_blank"
          >
            karhdo.dev
          </a>
        </span>
      </div>
    </footer>
  );
}
