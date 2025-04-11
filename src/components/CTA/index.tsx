export default function CTA() {
  return (
    <section
      id="cta"
      className="section-padding-x pt-12 pb-12 text-dark-base dark:text-light-base bg-light-base dark:bg-dark-base"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-8 max-w-3xl mx-auto p-4 md:p-8 lg:p-12 xl:p-16 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900">
          <h2 className="font-bold mb-2">Siap Menjadi <span className="bg-blue-imphnen-base text-light-base">Programmer Handal</span>?</h2>
          <p className="text-gray-500 mb-4">
            Bergabunglah dengan komunitas IMPHNEN sekarang dan mulai perjalanan
            programming-mu dengan cara yang menyenangkan!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://discord.gg/W4XyRAmPSD"
              className="text-light-base gradient-to-r from-blue-imphnen-base to-blue-imphnen-secondary bg-gradient-to-br px-3 py-1 md:px-6 md:py-3 rounded-xl font-semibold small-font-size"
            >
                Gabung Discord
            </a>
            <a
              href="https://www.facebook.com/groups/programmerhandal"
              className="px-3 py-1 md:px-6 md:py-3 border border-blue-imphnen-base rounded-xl font-semibold small-font-size"
            >
              Join Grup Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
