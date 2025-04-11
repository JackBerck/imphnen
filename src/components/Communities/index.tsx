import communities from "../../data/communities";

export default function Communities() {
  return (
    <section
      id="communities"
      className="section-padding-x pt-12 pb-12 text-dark-base dark:text-light-base bg-light-base dark:bg-dark-base"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <p className="px-2 py-0.5 rounded-md text-blue-base bg-blue-tertiary font-semibold w-fit mx-auto">
            Komunitas Kami
          </p>
          <h2 className="font-bold mb-2">
            Bergabunglah dengan Ribuan Programmer Indonesia yang Saling Membantu
            dan Berbagi Pengetahuan
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            communities.map((community, index) => (
              <div
                key={index}
                className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{community.name}</h3>
                  <p className="text-gray-500 mb-4">{community.description}</p>
                  <a href={community.link} target="_blank" rel="noopener noreferrer" className="w-full inline-block py-1 px-3 text-center border border-gray-400 rounded-md transition-all duration-300 hover:bg-blue-imphnen-base hover:text-light-base hover:border-blue-imphnen-base text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-imphnen-base dark:hover:text-light-base">
                    {community.cta}
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

/**
 * <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/instagram-imphnen.png"
                alt="Instagram IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Instagram</h3>
              <p className="text-gray-500">
                Ikuti kami di Instagram untuk tips programming, quotes
                inspiratif, dan info event terbaru.
              </p>
            </div>
          </div>
          <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/discord-imphnen.png"
                alt="Discord IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Discord Server</h3>
              <p className="text-gray-500">
                Diskusi realtime dengan sesama programmer dan dapatkan bantuan
                langsung dari para ahli.
              </p>
            </div>
          </div>
          <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/github-imphnen.png"
                alt="GitHub IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Discord Server</h3>
              <p className="text-gray-500">
                Diskusi realtime dengan sesama programmer dan dapatkan bantuan
                langsung dari para ahli.
              </p>
            </div>
          </div>
 * <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/instagram-imphnen.png"
                alt="Instagram IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Instagram</h3>
              <p className="text-gray-500">
                Ikuti kami di Instagram untuk tips programming, quotes
                inspiratif, dan info event terbaru.
              </p>
            </div>
          </div>
          <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/discord-imphnen.png"
                alt="Discord IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Discord Server</h3>
              <p className="text-gray-500">
                Diskusi realtime dengan sesama programmer dan dapatkan bantuan
                langsung dari para ahli.
              </p>
            </div>
          </div>
          <div className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="/github-imphnen.png"
                alt="GitHub IMPHNEN"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">Discord Server</h3>
              <p className="text-gray-500">
                Diskusi realtime dengan sesama programmer dan dapatkan bantuan
                langsung dari para ahli.
              </p>
            </div>
          </div>
 */