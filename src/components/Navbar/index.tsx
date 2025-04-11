import { useState, useEffect } from "react";
import NavigationLink from "./NavigationLink";
import navigation from "../../data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("color-theme")) {
      return localStorage.getItem("color-theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      id="navbar"
      className={`section-padding-x fixed top-0 w-full z-[998] text-dark-base normal-font-size transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-md"
          : "lg:bg-transparent shadow-none"
      } py-4 dark:text-light-base`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#">
          <img src="/logo.png" className="w-16" alt="IMPHNEN Logo" />
        </a>
        <button
          type="button"
          className="lg:hidden text-dark-base dark:text-light-base relative z-[999] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-200 rounded-lg lg:flex-row rtl:space-x-reverse lg:mt-0 lg:border-none gap-2 lg:gap-4">
            {navigation.map((route, index) => (
              <NavigationLink
                key={index}
                url={route.path}
                addClass={`${
                  route.title === "Gabung Discord"
                    ? "text-light-base gradient-to-r from-blue-imphnen-base to-blue-imphnen-secondary bg-gradient-to-br"
                    : ""
                }`}
              >
                {route.title}
              </NavigationLink>
            ))}
            <button
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm py-2 px-3 transition-all duration-300 cursor-pointer w-fit"
            >
              {isDarkMode ? (
                <svg
                  id="theme-toggle-light-icon"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
