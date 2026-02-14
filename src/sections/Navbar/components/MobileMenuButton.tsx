import { motion } from "framer-motion";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="bg-transparent caret-transparent block min-h-[auto] min-w-[auto] text-center p-2 md:hidden md:min-h-0 md:min-w-0 relative w-8 h-8"
      aria-label="Toggle menu"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="block w-6 h-0.5 bg-zinc-100 absolute top-2 left-1 transition-all"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="block w-6 h-0.5 bg-zinc-100 absolute top-4 left-1 transition-all"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="block w-6 h-0.5 bg-zinc-100 absolute top-6 left-1 transition-all"
      />
    </button>
  );
};
