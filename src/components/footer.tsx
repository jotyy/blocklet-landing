import { siteConfig } from '@/config/site';
import { Link } from 'react-router-dom';

import { Icons } from './icons';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 sm:px-6 mt-60">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Icons.Logo className="w-16 h-16" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <a
                href="#0"
                className="text-gray-600 dark:text-gray-300 dark:hover:text-gray-300 hover:underline transition duration-150 ease-in-out">
                Terms
              </a>{' '}
              ·{' '}
              <a
                href="#0"
                className="text-gray-600 dark:text-gray-300 dark:hover:text-gray-400 hover:underline transition duration-150 ease-in-out">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-400 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Web Studio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  DynamicBox Flex
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Programming Forms
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Command-line
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-400 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Tutorials & Guides
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-400 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Company values
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-150 ease-in-out">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 dark:text-gray-400 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="w-full text-gray-800 dark:text-gray-400 px-3 py-2 pr-12 text-sm border border-primary"
                      placeholder="Your email"
                      required
                    />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true" />
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-800">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
                <div className="p-2 shadow-md rounded-full dark:bg-primary">
                  <Icons.GitHub className="h-4 w-4" color="black" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Link to={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                <div className="p-2 shadow-md rounded-full dark:bg-primary">
                  <Icons.Twitter className="h-4 w-4" color="black" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 dark:text-gray-300 mr-4">&copy; ArcBlock.io. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
