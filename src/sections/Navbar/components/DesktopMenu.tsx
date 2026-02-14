import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <div className="items-center box-border caret-transparent hidden min-h-0 min-w-0 pt-16 md:flex md:min-h-[auto] md:min-w-[auto]">
      <Link to="/models" className="text-zinc-100 text-xl md:text-2xl lg:text-3xl font-bold bg-transparent caret-transparent inline-block leading-9 min-h-0 min-w-0 text-center p-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600 transition-colors duration-300">
        Models
      </Link>
      <button className="text-zinc-100 text-xl md:text-2xl lg:text-3xl font-bold bg-transparent caret-transparent inline-block leading-9 min-h-0 min-w-0 text-center ml-4 lg:ml-6 px-0 py-2 md:block md:min-h-[auto] md:min-w-[auto] hover:text-red-600 transition-colors duration-300">
        Members
      </button>
      <motion.button 
        whileHover={{ scale: 1 }}
        className="text-zinc-100 text-lg md:text-xl lg:text-2xl font-medium items-center bg-red-600 caret-transparent inline-flex leading-8 min-h-0 min-w-0 text-center ml-4 lg:ml-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-xl md:block md:min-h-[auto] md:min-w-[auto] hover:bg-red-700 transition-colors duration-300 overflow-hidden group"
      >
        <motion.span
          className="inline-block group-hover:scale-110 transition-transform duration-200"
        >
          Join for Free
        </motion.span>
      </motion.button>
    </div>
  );
};
