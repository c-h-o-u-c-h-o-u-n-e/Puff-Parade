import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="text-zinc-100 bg-zinc-900 box-border caret-transparent">
      <div className="box-border caret-transparent max-w-screen-xl mx-auto pt-12 pb-6 px-4 md:px-8">
        <FooterContent />
        <FooterBottom />
      </div>
    </footer>
  );
};
