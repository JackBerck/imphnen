import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-128px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="section-padding-x pt-12 pb-12 text-dark-base dark:text-light-base bg-light-base dark:bg-dark-base scroll-mt-12"
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 max-w-3xl mx-auto p-4 md:p-8 lg:p-12 xl:p-16 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md"
        >
          <motion.h2
            variants={containerVariants}
            className="font-bold mb-2 text-2xl md:text-3xl lg:text-4xl"
          >
            Siap Menjadi{" "}
            <span className="bg-blue-imphnen-base text-light-base">
              Programmer Handal
            </span>
            ?
          </motion.h2>
          <motion.p
            variants={containerVariants}
            className="text-gray-500 mb-6 md:text-lg"
          >
            Bergabunglah dengan komunitas IMPHNEN sekarang dan mulai perjalanan
            programming-mu dengan cara yang menyenangkan!
          </motion.p>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/W4XyRAmPSD"
              className="text-light-base bg-gradient-to-br from-blue-imphnen-base to-blue-imphnen-secondary px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 shadow hover:shadow-lg"
            >
              Gabung Discord
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/groups/programmerhandal"
              className="px-4 py-2 md:px-6 md:py-3 border border-blue-imphnen-base rounded-xl font-semibold transition-all duration-300 text-blue-imphnen-base hover:bg-blue-imphnen-base hover:text-white"
            >
              Join Grup Facebook
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
