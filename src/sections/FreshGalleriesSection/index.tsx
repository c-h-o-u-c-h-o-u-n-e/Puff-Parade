import { SectionHeader } from "@/components/SectionHeader";
import { GalleryCard } from "@/sections/FreshGalleriesSection/components/GalleryCard";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const FreshGalleriesSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        >
          <SectionHeader
            title="Fresh Galleries"
            buttonText="View All Galleries"
            iconVariant="ml-2"
          />
        </motion.div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="box-border caret-transparent gap-x-4 md:gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6"
        >
          <motion.div variants={itemVariants}>
            <GalleryCard
              imageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/PuffParade.2026.02.08.Amaya.Serrano.Twilight.Reverie.iMAGESET-015.webp"
              imageAlt="Twilight Reverie"
              title="Twilight Reverie"
              imageCount={15}
              model="Amaya Serrano"
              views={1}
              downloads={0}
              publishedOn="February 4, 2026"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GalleryCard
              imageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/PuffParade.2026.01.07.Amaya.Serrano.Sgerhe.iMAGESET-001.png"
              imageAlt="sgerhe"
              title="sgerhe"
              imageCount={4}
              model="Amaya Serrano"
              views={1}
              downloads={0}
              publishedOn="February 2, 2026"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GalleryCard
              imageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/PuffParade.2026.02.01.Linnea.Bergstrom.Calculated.Rebellion.iMAGESET-020.webp"
              imageAlt="Calculated Rebellion"
              title="Calculated Rebellion"
              imageCount={33}
              model="Linnea Bergstrom"
              views={2}
              downloads={0}
              publishedOn="January 31, 2026"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <GalleryCard
              imageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/PuffParade.2026.02.01.Elin.Andersson.Rooftop.iMAGESET-001.webp"
              imageAlt="Rooftop"
              title="Rooftop"
              imageCount={38}
              model="Elin Andersson"
              views={1}
              downloads={0}
              publishedOn="January 30, 2026"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
