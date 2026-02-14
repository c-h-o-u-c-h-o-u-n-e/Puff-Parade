import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { PopularModelsSection } from "@/sections/PopularModelsSection";
import { FreshGalleriesSection } from "@/sections/FreshGalleriesSection";
import { CatalogueGrowthSection } from "@/sections/CatalogueGrowthSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-zinc-900 box-border caret-transparent block tracking-[0.8px] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-kaytek_rounded">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent flex flex-col min-h-screen">
          <Navbar />
          <main className="box-border caret-transparent grow">
            <div className="relative bg-zinc-900 box-border caret-transparent min-h-full">
              <div className="box-border caret-transparent">
                <div className="bg-zinc-900 box-border caret-transparent">
                  <Hero />
                  <PopularModelsSection />
                  <FreshGalleriesSection />
                  <CatalogueGrowthSection />
                  <CTASection />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        <div className="fixed box-border caret-transparent gap-x-3 flex flex-col gap-y-3 z-[100] right-6 top-6"></div>
      </div>
    </body>
  );
};
