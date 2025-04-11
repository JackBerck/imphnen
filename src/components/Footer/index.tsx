import navigation from "../../data/navigation";
import learningResources from "../../data/learning-resources";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-light-base text-dark-base dark:bg-dark-base dark:text-light-base section-padding-x py-4"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap md:grid md:grid-cols-4 lg:flex lg:flex-wrap gap-8 lg:gap-16 justify-between mb-4 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-sm lg:max-w-sm md:max-w-none md:col-span-4">
            <a href="#" className="mb-4 block">
              <img src="/logo.png" className="w-32" alt="IMPHNEN Logo" />
            </a>
            <small className="mb-4 block text-gray-700 dark:text-gray-400">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang
              belajar programming dengan cara yang menyenangkan.
            </small>
            <div className="flex gap-4">
              <a href="https://facebook.com">
                <svg
                  className="footer-social-media-link"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href="https://discord.gg">
                <svg
                  className="footer-social-media-link"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>
              </a>
              <a href="https://x.com">
                <svg
                  className="footer-social-media-link"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
              <a href="https://instragram.com">
                <svg
                  className="footer-social-media-link"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://youtube.com">
                <svg
                  className="footer-social-media-link"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-sm lg:max-w-sm">
            <h5 className="font-semibold mb-2">Tautan Cepat</h5>
            <ul className="flex flex-col gap-1">
              {navigation.map((route, index) => (
                <li key={index}>
                  <a href={`#${route.path}`} className="footer-link">
                    {route.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-sm lg:max-w-sm">
            <h5 className="font-semibold mb-2">Sumber Belajar</h5>
            <ul className="flex flex-col gap-1">
              {learningResources.map((route, index) => (
                <li key={index}>
                  <a href={route.path} className="footer-link">
                    {route.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-sm lg:max-w-sm md:max-w-none md:col-span-2">
            <h5 className="font-semibold mb-2">Bahasa Pemrograman</h5>
            <ul className="flex flex-wrap gap-1">
              <li>
                <a
                  href="https://www.javascript.com"
                  className="py-1 px-2 bg-yellow-tertiary text-yellow-base rounded-md text-sm"
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  href="https://www.python.org"
                  className="py-1 px-2 bg-blue-tertiary text-blue-base rounded-md text-sm"
                >
                  Python
                </a>
              </li>
              <li>
                <a
                  href="https://www.java.com"
                  className="py-1 px-2 bg-red-tertiary text-red-base rounded-md text-sm"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="https://golang.org"
                  className="py-1 px-2 bg-green-tertiary text-green-base rounded-md text-sm"
                >
                  Go
                </a>
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org"
                  className="py-1 px-2 bg-cyan-tertiary text-cyan-base rounded-md text-sm"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                  className="py-1 px-2 bg-purple-tertiary text-purple-base rounded-md text-sm"
                >
                  C#
                </a>
              </li>
              <li>
                <a
                  href="https://www.rust-lang.org"
                  className="py-1 px-2 bg-orange-tertiary text-orange-base rounded-md text-sm"
                >
                  HTML
                </a>
              </li>
              <li>
                <a
                  href="https://kotlinlang.org"
                  className="py-1 px-2 bg-pink-tertiary text-pink-base rounded-md text-sm"
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/swift/"
                  className="py-1 px-2 bg-teal-tertiary text-teal-base rounded-md text-sm"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://www.php.net"
                  className="py-1 px-2 bg-violet-tertiary text-violet-base rounded-md text-sm"
                >
                  PHP
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
          © 2025 IMPHNEN - Ingin Menjadi Programmer Handal, Namun Enggan
          Ngoding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
