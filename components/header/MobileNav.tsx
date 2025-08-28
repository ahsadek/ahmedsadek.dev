'use client';

import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import Link from '../ui/Link';
import headerNavLinks from '@/data/headerNavLinks';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const scrollPositionRef = useRef(0);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  const lockBodyScroll = useCallback(() => {
    scrollPositionRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockBodyScroll = useCallback(() => {
    const scrollY = scrollPositionRef.current;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollY,
        behavior: 'instant',
      });
    });
  }, []);

  const openNav = useCallback(() => {
    setNavShow(true);
    setIsClosing(false);
    lockBodyScroll();
  }, [lockBodyScroll]);

  const closeNav = useCallback(() => {
    setIsClosing(true);
    // Wait for close animation to complete before hiding
    setTimeout(() => {
      setNavShow(false);
      setIsClosing(false);
      unlockBodyScroll();
    }, 200); // Match the close animation duration
  }, [unlockBodyScroll]);

  const handleOverlayClick = useCallback(
    (e) => {
      // Close nav when clicking outside the panel
      if (e.target === e.currentTarget) {
        closeNav();
      }
    },
    [closeNav]
  );

  const handleKeyDown = useCallback(
    (e) => {
      // Close nav when pressing Escape key
      if (e.key === 'Escape') {
        closeNav();
      }
    },
    [closeNav]
  );

  const handleLinkClick = useCallback(() => {
    closeNav();
  }, [closeNav]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && navShow) {
        closeNav();
      }
    };

    if (navShow) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [navShow, closeNav]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      unlockBodyScroll();
    };
  }, [unlockBodyScroll]);

  return (
    <>
      <button
        data-umami-event="mobile-nav-toggle"
        aria-label="Toggle Menu"
        onClick={openNav}
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

      {navShow && (
        <div
          className="relative z-50"
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close mobile navigation"
        >
          {/* Slide panel */}
          <div
            ref={panelRef}
            className="fixed left-0 top-0 z-50 h-screen w-full bg-gray-200 dark:bg-dark"
            style={{
              animation: isClosing ? 'slideOutRight 200ms ease-in forwards' : 'slideInRight 300ms ease-in-out forwards',
            }}
          >
            <nav className="mt-8 flex h-full flex-col items-start overflow-y-auto pl-8 pt-2 text-left">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <button
              className="fixed right-2 top-7 h-16 w-16 p-4 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              aria-label="Close Menu"
              onClick={closeNav}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNav;
