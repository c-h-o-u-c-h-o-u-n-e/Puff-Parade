import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute w-full box-border caret-transparent z-50">
      <nav className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-center box-border caret-transparent flex h-16 justify-between">
          <NavbarLogo />
          <DesktopMenu />
          <MobileMenuButton 
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-zinc-900 border-l border-neutral-700 z-50 md:hidden"
            >
              <div className="flex flex-col p-8 pt-24">
                <Link
                  to="/models"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-100 text-2xl font-bold bg-transparent caret-transparent block leading-9 text-left mb-6 p-0 hover:text-red-600 transition-colors"
                >
                  Models
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-100 text-2xl font-bold bg-transparent caret-transparent block leading-9 text-left mb-6 p-0 hover:text-red-600 transition-colors"
                >
                  Members
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-100 text-xl md:text-2xl font-medium bg-red-600 caret-transparent block leading-9 text-left px-6 py-3 rounded-xl hover:bg-red-700 transition-colors duration-300 overflow-hidden group"
                >
                  <span className="inline-block group-hover:scale-110 transition-transform duration-200">
                    Join for Free
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
