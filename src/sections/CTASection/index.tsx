import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const CTASection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className="relative bg-zinc-900 bg-[url('https://cnogxcbicsqqkhtqpzov.supabase.co/storage/v1/object/public/headers/header-unlock-full-access.webp')] bg-cover box-border caret-transparent bg-center py-20 sm:py-28 md:py-40 lg:py-52">
      <div className="absolute box-border caret-transparent inset-0">
        <div className="absolute bg-[linear-gradient(rgb(26,26,26)_0%,rgba(26,26,26,0.95)_30px,rgba(26,26,26,0.8)_60px,rgba(26,26,26,0.4)_100px,rgba(26,26,26,0.2)_140px,rgba(26,26,26,0.1)_180px,rgba(26,26,26,0.05)_220px,rgba(0,0,0,0)_300px),linear-gradient(to_top,rgb(26,26,26)_0%,rgba(26,26,26,0.95)_30px,rgba(26,26,26,0.8)_60px,rgba(26,26,26,0.4)_100px,rgba(26,26,26,0.2)_140px,rgba(26,26,26,0.1)_180px,rgba(26,26,26,0.05)_220px,rgba(0,0,0,0)_300px)] bg-size-[auto,auto] box-border caret-transparent bg-[position:0%,0%_0%,0%] inset-0"></div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative box-border caret-transparent max-w-4xl text-center mx-auto px-4 md:px-8"
      >
        <h2 className="text-zinc-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold box-border caret-transparent tracking-[2px] md:tracking-[3px] leading-[1.2] uppercase mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-4 md:mb-6">
          Unlock Full Access
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg md:text-xl box-border caret-transparent tracking-[0.8px] md:tracking-[1px] leading-6 md:leading-7 mb-6 md:mb-8">
          You must be 18 or older to navigate this website
        </p>
        <motion.button 
          whileHover={{ scale: 1 }}
          className="text-zinc-100 text-lg sm:text-xl md:text-2xl font-medium items-center bg-red-600 caret-transparent inline-flex leading-8 mb-8 sm:mb-12 md:mb-16 lg:mb-24 px-6 sm:px-8 py-3 md:py-4 rounded-xl hover:bg-red-700 transition-colors duration-300 overflow-hidden group"
        >
          <motion.span
            className="inline-block group-hover:scale-110 transition-transform duration-200"
          >
            Join for Free
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
};
