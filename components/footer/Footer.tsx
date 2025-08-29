import BuildWith from '@/components/footer/BuildWith';

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-12 items-center justify-center space-y-4 md:mb-10 md:mt-16 md:flex md:space-y-0">
        {/* <BuildWith /> */}

        <div className="my-2 flex justify-between space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <div>
            <span>Copyright © {new Date().getFullYear()}</span>
            <span></span>
          </div>
          <span className="flex items-center px-3 sm:px-0">{` • `}</span>
          <span>Ahmed's Website</span>
          <span className="flex items-center px-3 sm:px-0">{` • `}</span>

          <span>
            Forked from{' '}
            <a
              href="https://github.com/Karhdo/karhdo.dev"
              className="text-primary cursor-pointer text-blue-500"
              target="_blank"
            >
              karhdo.dev
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
