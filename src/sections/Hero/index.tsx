import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative items-end bg-zinc-900 bg-[url('https://cnogxcbicsqqkhtqpzov.supabase.co/storage/v1/object/public/headers/header-065.webp')] bg-cover box-border caret-transparent flex h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden bg-[position:50%_top]">
      <div className="absolute box-border caret-transparent inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute bg-[linear-gradient(to_top,rgb(26,26,26)_0%,rgba(26,26,26,0.95)_30px,rgba(26,26,26,0.8)_60px,rgba(26,26,26,0.4)_100px,rgba(26,26,26,0.2)_140px,rgba(26,26,26,0.1)_180px,rgba(26,26,26,0.05)_220px,rgba(0,0,0,0)_300px)] box-border caret-transparent inset-0"
        />
      </div>
      <div className="relative box-border caret-transparent max-w-screen-xl w-full mx-auto pb-8 md:pb-12 px-4 md:px-8"></div>
    </section>
  );
};
