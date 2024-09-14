import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppHeader() {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <Link href="/">
              <Image
                src={activeTheme === 'dark' ? logoDark : logoLight}
                className="w-36 cursor-pointer"
                alt={`${activeTheme === 'dark' ? 'Dark' : 'Light'} Logo`}
                width={150}
                height={120}
              />
          </Link>
        </div>

        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <Link href="/contact"  className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Contact Button">
                Contact
            </Link>
          </div>

          <div
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-2 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === 'dark' ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-base" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-base" />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
