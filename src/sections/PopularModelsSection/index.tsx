import { SectionHeader } from "@/components/SectionHeader";
import { ModelCard } from "@/sections/PopularModelsSection/components/ModelCard";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const PopularModelsSection = () => {
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
    <section className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Popular Models"
          buttonText="View All Models"
          iconVariant="ml-4"
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
          <ModelCard
            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/persona-gen-stage2.png"
            name="Linnea Bergstrom"
            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/sweden.svg"
            countryName="Sweden"
            galleries="1"
            pictures="33"
            profileViews="3"
            fans="0"
            firstSeen="January 31, 2026"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ModelCard
            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/profile.png"
            name="Elin Andersson"
            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/sweden.svg"
            countryName="Sweden"
            galleries="1"
            pictures="38"
            profileViews="2"
            fans="0"
            firstSeen="January 30, 2026"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ModelCard
            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Comfy-UI-00302.png"
            name="Molly Strasser"
            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/germany.svg"
            countryName="Germany"
            galleries="1"
            pictures="10"
            profileViews="5"
            fans="0"
            firstSeen="January 22, 2026"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ModelCard
            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Comfy-UI-00235.png"
            name="Giulia Romano"
            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/italy.svg"
            countryName="Italy"
            galleries="1"
            pictures="6"
            profileViews="4"
            fans="0"
            firstSeen="January 13, 2026"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
