'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import Link from '../ui/Link';
import headerNavLinks from '@/data/headerNavLinks';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const scrollPositionRef = useRef(0);
  const isScrollLocked = useRef(false);

  const lockScroll = useCallback(() => {
    if (!isScrollLocked.current) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      isScrollLocked.current = true;
    }
  }, []);

  const unlockScroll = useCallback(() => {
    if (isScrollLocked.current) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
      isScrollLocked.current = false;
    }
  }, []);

  const onToggleNav = useCallback(() => {
    setNavShow((status) => !status);
  }, []);

  // Handle scroll lock/unlock based on navShow state
  useEffect(() => {
    if (navShow) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [navShow, lockScroll, unlockScroll]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, [unlockScroll]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && navShow) {
        setNavShow(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navShow]);

  return (
    <>
      <button
        data-umami-event="mobile-nav-toggle"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="sm:hidden"
        aria-expanded={navShow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition appear show={navShow} as={Fragment}>
        <Dialog as="div" onClose={onToggleNav} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className="fixed left-0 top-0 z-50 h-screen w-full bg-gray-200 dark:bg-dark"
              // style={{ opacity: 0.97 }}
            >
              <nav className="mt-8 flex h-full flex-col items-start overflow-y-auto pl-8 pt-2 text-left">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              <button
                className="fixed right-2 top-7 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                aria-label="Close Menu"
                onClick={onToggleNav}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNav;
