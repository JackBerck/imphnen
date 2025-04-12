import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Learn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-96px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="sumber-belajar"
      ref={ref}
      className="section-padding-x pt-12 pb-12 text-dark-base dark:text-light-base bg-light-base dark:bg-dark-base scroll-mt-12"
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          className="text-center mb-8 max-w-3xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          custom={0}
        >
          <motion.p
            className="px-2 py-0.5 mb-2 rounded-md text-blue-base bg-blue-tertiary font-semibold w-fit mx-auto"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            custom={1}
          >
            Sumber Belajar
          </motion.p>
          <motion.h2
            className="font-bold mb-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            custom={2}
          >
            Akses Berbagai Materi Belajar yang Akan Membantu Kamu Menguasai
            Konsep{" "}
            <span className="bg-blue-imphnen-base text-light-base">
              Programming
            </span>
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 * 0.15, ease: "easeOut" }}
            className={
              "shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 p-4 pt-8 bg-gray-50 dark:bg-gray-900 rounded-lg relative overflow-hidden group hover:bg-violet-base"
            }
          >
            <div className="absolute h-full w-full bg-violet-base -top-62 left-0 transition-all duration-300 group-hover:top-0 z-1"></div>
            <div className="relative z-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="w-12 aspect-square mb-2 text-violet-base transition-all duration-300 group-hover:text-white"
              >
                <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
              </svg>
              <h3 className="font-semibold mb-1 transition-all duration-300 group-hover:text-white">
                Video Tutorial
              </h3>
              <p className="text-gray-500 mb-4 transition-all duration-300 group-hover:text-white">
                Belajar melalui tutorial video langkah demi langkah yang mudah
                diikuti.
              </p>
              <a
                href="#"
                className="text-violet-base transition-all duration-300 group-hover:text-white"
              >
                Lihat semua video
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 * 0.15, ease: "easeOut" }}
            className={
              "shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 p-4 pt-8 bg-gray-50 dark:bg-gray-900 rounded-lg relative overflow-hidden group hover:bg-cyan-base"
            }
          >
            <div className="absolute h-full w-full bg-cyan-base -top-62 left-0 transition-all duration-300 group-hover:top-0 z-1"></div>
            <div className="relative z-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-12 aspect-square mb-2 text-cyan-base transition-all duration-300 group-hover:text-white"
              >
                <path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z" />
              </svg>
              <h3 className="font-semibold mb-1 transition-all duration-300 group-hover:text-white">
                Artikel & Tutorial
              </h3>
              <p className="text-gray-500 mb-4 transition-all duration-300 group-hover:text-white">
                Pelajari konsep programming melalui artikel yang disusun secara
                terstruktur.
              </p>
              <a
                href="#"
                className="text-cyan-base transition-all duration-300 group-hover:text-white"
              >
                Baca artikel terbaru
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2 * 0.15, ease: "easeOut" }}
            className={
              "shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 p-4 pt-8 bg-gray-50 dark:bg-gray-900 rounded-lg relative overflow-hidden group hover:bg-orange-base"
            }
          >
            <div className="absolute h-full w-full bg-orange-base -top-62 left-0 transition-all duration-300 group-hover:top-0 z-1"></div>
            <div className="relative z-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-12 aspect-square mb-2 text-orange-base transition-all duration-300 group-hover:text-white"
              >
                <path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2l56.8 0c26.5 0 48 21.5 48 48l0 56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8L0 176c0-26.5 21.5-48 48-48l120.8 0c12.8 0 23.2-10.4 23.2-23.2z" />
              </svg>
              <h3 className="font-semibold mb-1 transition-all duration-300 group-hover:text-white">
                Tantangan Koding
              </h3>
              <p className="text-gray-500 mb-4 transition-all duration-300 group-hover:text-white">
                Uji kemampuanmu dengan tantangan koding yang menyenangkan dan
                menantang.
              </p>
              <a
                href="#"
                className="text-orange-base transition-all duration-300 group-hover:text-white"
              >
                Mulai tantangan
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 3 * 0.15, ease: "easeOut" }}
            className={
              "shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 p-4 pt-8 bg-gray-50 dark:bg-gray-900 rounded-lg relative overflow-hidden group hover:bg-green-base"
            }
          >
            <div className="absolute h-full w-full bg-green-base -top-62 left-0 transition-all duration-300 group-hover:top-0 z-1"></div>
            <div className="relative z-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                className="w-12 aspect-square mb-2 text-green-base transition-all duration-300 group-hover:text-white"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
              </svg>
              <h3 className="font-semibold mb-1 transition-all duration-300 group-hover:text-white">
                Sharing Session
              </h3>
              <p className="text-gray-500 mb-4 transition-all duration-300 group-hover:text-white">
                Ikuti sesi sharing bersama programmer berpengalaman dan belajar
                dari mereka.
              </p>
              <a
                href="#"
                className="text-green-base transition-all duration-300 group-hover:text-white"
              >
                Mulai tantangan
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
