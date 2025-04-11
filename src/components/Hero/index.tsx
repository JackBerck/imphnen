export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-light-base text-dark-base dark:bg-dark-base dark:text-light-base section-padding-x pt-24 pb-24"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27%2399a1af%27 fill-opacity=%270.1%27%3E%3Cpolygon fill-rule=%27evenodd%27 points=%278 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4%27/%3E%3C/g%3E%3C/svg%3E')",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex gap-4 flex-col xl:flex-row justify-between">
        <div className="">
          <div className="text-dark-base dark:text-light-base rounded-lg mb-4">
            <span className="gradient-to-r text-light-base from-blue-imphnen-base to-blue-imphnen-secondary bg-gradient-to-br flex items-center gap-2 mb-2 w-fit py-1 px-3 rounded-md">
              <svg
                className="w-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
              <p className="extra-small-font-size">
                Tempat Kumpulnya Para Programmer Indonesia
              </p>
            </span>
            <h1 className="font-bold mb-2 md:text-left">
              Ingin Menjadi Programmer Handal? Namun Enggan Ngoding?
            </h1>
            <p className="mb-2">
              Bergabunglah dengan kami di IMPHNEN, tempat belajar pemrograman
              yang menyenangkan dan interaktif. Kami menyediakan berbagai
              tutorial, latihan, dan proyek yang dirancang untuk membantu Anda
              belajar dengan cara yang menyenangkan.
            </p>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                className="rounded-md bg-blue-base text-light-base py-2 px-4 font-semibold hover:bg-blue-quaternary hover:text-blue-base transition duration-300 small-font-size"
              >
                Gabung Facebook
              </a>
              <a
                href="https://discord.gg"
                className="rounded-md border border-blue-base text-blue-base py-2 px-4 font-semibold hover:bg-blue-quaternary transition duration-300 small-font-size"
              >
                Gabung Discord
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:justify-between gap-4">
            <div className="text-dark-base dark:text-light-base flex gap-8 justify-between items-center p-4 rounded-lg text-center">
              <div className="flex flex-col gap-2 border-r-2 border-gray-200 pr-4">
                <h4 className="font-semibold">20+</h4>
                <p>Tentor</p>
              </div>
              <div className="flex flex-col gap-2 border-r-2 border-gray-200 pr-4">
                <h4 className="font-semibold">100+</h4>
                <p>Diskusi Perhari</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">108K+</h4>
                <p>Member</p>
              </div>
            </div>
            <div className="p-4 rounded-lg gradient-to-r from-blue-base to-blue-secondary bg-gradient-to-br text-light-base">
              <div className="flex gap-4 items-center mb-2">
                <h4 className="font-semibold">4.9/5</h4>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-8 text-yellow-tertiary"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  ))}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className="absolute w-8 text-gray-200"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      className="absolute w-8 text-yellow-tertiary"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ clipPath: "inset(0 20% 0 0)" }}
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-4">
                  <img
                    className="w-10 aspect-square rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="User 1"
                  />
                  <img
                    className="w-10 aspect-square rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="User 2"
                  />
                  <img
                    className="w-10 aspect-square rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt="User 3"
                  />
                  <img
                    className="w-10 aspect-square rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                    alt="User 4"
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold">1000+</h4>
                  <p>Ulasan Anggota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/image.png"
            alt="IMPHNEN Banner"
            className="xl:max-w-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
