import { StatsCard } from "@/sections/CatalogueGrowthSection/components/StatsCard";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const CatalogueGrowthSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-zinc-900 box-border caret-transparent py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="items-center box-border caret-transparent flex mb-12"
        >
          <div className="box-border caret-transparent w-8 border-neutral-700 mr-4 border-t border-solid"></div>
          <h2 className="text-zinc-100 text-2xl md:text-4xl font-bold box-border caret-transparent tracking-[1.8px] leading-10">
            Catalogue Growth
          </h2>
          <div className="box-border caret-transparent basis-[0%] grow border-neutral-700 ml-4 border-t border-solid"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-red-600/10 box-border caret-transparent border-pink-950 mb-6 md:mb-8 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl border-2 border-solid"
        >
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl box-border caret-transparent tracking-[0.8px] md:tracking-[1px] leading-6 md:leading-7 text-center mb-3 md:mb-4">
            Puff Parade launched on December 30, 2025.
          </p>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl box-border caret-transparent tracking-[0.8px] md:tracking-[1px] leading-6 md:leading-7 text-center">
            Our catalogue is growing rapidly with a new gallery released every
            day of the week.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="box-border caret-transparent gap-x-4 md:gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6"
        >
          <motion.div variants={itemVariants}>
            <StatsCard value="32" label="Models" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard value="15" label="Galleries" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard value="0" label="Pictures" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard value="7" label="Weekly Updates" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
