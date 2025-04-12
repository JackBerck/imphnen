import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import communities from "../../data/communities";

export default function Communities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-256px" });
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
      id="komunitas"
      ref={ref}
      className="section-padding-x pt-12 pb-12 text-dark-base dark:text-light-base bg-light-base dark:bg-slate-950 scroll-mt-12"
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
            Komunitas Kami
          </motion.p>
          <motion.h2
            className="font-bold mb-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            custom={2}
          >
            Bergabunglah dengan Ribuan{" "}
            <span className="bg-blue-imphnen-base text-light-base">
              Programmer Indonesia
            </span>{" "}
            yang Saling Membantu dan Berbagi Pengetahuan
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              className="shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="relative">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{community.name}</h3>
                <p className="text-gray-500 mb-4">{community.description}</p>
                <a
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block py-1 px-3 text-center border border-gray-400 rounded-md transition-all duration-300 hover:bg-blue-imphnen-base hover:text-light-base hover:border-blue-imphnen-base text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-imphnen-base dark:hover:text-light-base"
                >
                  {community.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
