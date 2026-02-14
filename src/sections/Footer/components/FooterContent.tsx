import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <FooterBrand />
      <FooterLinks />
    </div>
  );
};
