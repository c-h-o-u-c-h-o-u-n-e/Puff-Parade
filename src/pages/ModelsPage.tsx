import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { ModelCard } from "@/sections/PopularModelsSection/components/ModelCard";

export const ModelsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("alphabetical");
  const [orderAsc, setOrderAsc] = useState(true);

  const months = [
    { name: "JAN", enabled: true },
    { name: "FEB", enabled: false },
    { name: "MAR", enabled: false },
    { name: "APR", enabled: false },
    { name: "MAY", enabled: false },
    { name: "JUN", enabled: false },
    { name: "JUL", enabled: false },
    { name: "AUG", enabled: false },
    { name: "SEP", enabled: false },
    { name: "OCT", enabled: false },
    { name: "NOV", enabled: false },
    { name: "DEC", enabled: true },
  ];

  const sortIcons = [
    { id: "alphabetical", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-alphabetical.svg", alt: "Sort alphabetically" },
    { id: "country", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-country.svg", alt: "Sort by Country" },
    { id: "galleries", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-galleries.svg", alt: "Sort by Galleries" },
    { id: "pictures", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-images.svg", alt: "Sort by Pictures" },
    { id: "views", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-views.svg", alt: "Sort by Views" },
    { id: "fans", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-fans.svg", alt: "Sort by Fans" },
    { id: "date", src: "https://c.animaapp.com/mlkz786xE7zbPi/assets/sort-calendar.svg", alt: "Sort by Date" },
  ];

  const toggleMonth = (month: string) => {
    setSelectedMonths(prev =>
      prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]
    );
  };

  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-zinc-900 box-border caret-transparent block tracking-[0.8px] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-kaytek_rounded">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent flex flex-col min-h-screen">
          <Navbar />
          <main className="box-border caret-transparent grow">
            <div className="relative bg-zinc-900 box-border caret-transparent min-h-full">
              <div className="box-border caret-transparent">
                <div className="bg-zinc-900 box-border caret-transparent">
                  {/* Hero Section */}
                  <section className="relative items-end bg-zinc-900 bg-[url('https://cnogxcbicsqqkhtqpzov.supabase.co/storage/v1/object/public/headers/header-models.webp')] bg-cover box-border caret-transparent flex h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden bg-center">
                    <div className="absolute box-border caret-transparent inset-0">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="absolute bg-[linear-gradient(to_top,rgb(26,26,26)_0%,rgba(26,26,26,0.95)_30px,rgba(26,26,26,0.8)_60px,rgba(26,26,26,0.4)_100px,rgba(26,26,26,0.2)_140px,rgba(26,26,26,0.1)_180px,rgba(26,26,26,0.05)_220px,rgba(0,0,0,0)_300px)] box-border caret-transparent inset-0"
                      />
                    </div>
                    <div className="relative box-border caret-transparent max-w-screen-xl w-full mx-auto pb-12 md:pb-16 lg:pb-20 px-4 md:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <h1 className="text-zinc-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold box-border caret-transparent tracking-[2px] md:tracking-[3px] leading-[1.2] mb-4">
                          Models
                        </h1>
                        <div className="flex items-center gap-2 text-neutral-400 text-base md:text-lg">
                          <a href="/" className="hover:text-zinc-100 transition-colors duration-300">
                            Puff Parade
                          </a>
                          <span>/</span>
                          <span className="text-zinc-100">Models</span>
                        </div>
                      </motion.div>
                    </div>
                  </section>

                  {/* Filters Section */}
                  <section className="bg-zinc-900 box-border caret-transparent py-6">
                    <div className="box-border caret-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      {/* Search and Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-2 flex flex-wrap items-center gap-4 bg-transparent rounded-xl py-4"
                      >
                        {/* Search Bar */}
                        <div className="relative flex-1 min-w-[200px]">
                          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer z-10">
                            <img
                              src="https://c.animaapp.com/mlkz786xE7zbPi/assets/search.svg"
                              alt="Search"
                              className="w-4 h-4 transition-all duration-300 brightness-0 saturate-100 invert-[60%]"
                            />
                          </button>
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border-2 border-pink-950 bg-red-600/10 outline-none text-neutral-400 focus:text-zinc-100 text-base rounded-xl pl-11 pr-11 py-2 transition-colors duration-300"
                            placeholder="Search"
                          />
                          {searchQuery && (
                            <button
                              onClick={() => setSearchQuery("")}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer z-10 transition-opacity duration-300"
                            >
                              <img
                                src="https://c.animaapp.com/mlkz786xE7zbPi/assets/x.svg"
                                alt="Clear search"
                                className="w-4 h-4 transition-all duration-300 brightness-0 saturate-100 invert-[60%]"
                              />
                            </button>
                          )}
                        </div>

                        {/* Model Directory Button */}
                        <button className="flex items-center gap-2 px-4 py-2 text-base rounded-xl cursor-pointer transition-all duration-300 border-2 border-pink-950 bg-red-600/10 text-zinc-100/80 hover:bg-pink-950/60 hover:text-zinc-100 hover:border-pink-950">
                          <img
                            src="https://c.animaapp.com/mlkz786xE7zbPi/assets/model-directory.svg"
                            alt="Model Directory"
                            className="w-4 h-4 transition-all duration-300 brightness-0 saturate-100 invert-[60%]"
                          />
                          <span className="font-normal ml-1 whitespace-nowrap transition-all duration-300">
                            Model Directory
                          </span>
                        </button>

                        {/* Tag Directory Button */}
                        <button className="flex items-center gap-2 px-4 py-2 text-base rounded-xl cursor-pointer transition-all duration-300 border-2 border-pink-950 bg-red-600/10 text-zinc-100/80 hover:bg-pink-950/60 hover:text-zinc-100 hover:border-pink-950">
                          <img
                            src="https://c.animaapp.com/mlkz786xE7zbPi/assets/tag.svg"
                            alt="Tags Directory"
                            className="w-4 h-4 transition-all duration-300 brightness-0 saturate-100 invert-[60%]"
                          />
                          <span className="ml-1 whitespace-nowrap transition-all duration-300">
                            Tag Directory
                          </span>
                        </button>

                        {/* Sort By Label */}
                        <div className="flex items-center gap-2 pl-4 py-2 bg-transparent rounded-xl">
                          <span className="text-neutral-400 text-base font-medium whitespace-nowrap">
                            Sort by :
                          </span>
                        </div>

                        {/* Sort Icons */}
                        <div className="flex items-center">
                          {sortIcons.map((icon, index) => (
                            <button
                              key={icon.id}
                              onClick={() => setSortBy(icon.id)}
                              className={`p-3 border-2 border-pink-950 bg-red-600/10 group overflow-hidden transition-all duration-300 hover:bg-pink-950/50 hover:border-pink-950 ${
                                index === 0 ? "rounded-l-xl" : ""
                              } ${
                                index === sortIcons.length - 1 ? "rounded-r-xl border-r-2" : "border-r-2"
                              } ${
                                sortBy === icon.id ? "bg-pink-950/50" : ""
                              }`}
                              aria-pressed={sortBy === icon.id}
                              aria-label={icon.alt}
                            >
                              <div className="relative w-4 h-4">
                                <img
                                  src={icon.src}
                                  alt={icon.alt}
                                  className="w-4 h-4 transition-all duration-200 group-hover:scale-125 brightness-0 saturate-100 invert-[60%]"
                                />
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Order By Label */}
                        <div className="flex items-center gap-2 pl-4 py-2 bg-transparent rounded-xl">
                          <span className="text-neutral-400 text-base font-medium whitespace-nowrap">
                            Order by :
                          </span>
                        </div>

                        {/* Order Toggle */}
                        <button
                          onClick={() => setOrderAsc(!orderAsc)}
                          className="p-3 border-2 border-pink-950 bg-red-600/10 rounded-xl group transition-all duration-300 hover:bg-pink-950/50 hover:border-pink-950"
                        >
                          <img
                            src="https://c.animaapp.com/mlkz786xE7zbPi/assets/order-descending.svg"
                            alt={orderAsc ? "Ascending Order" : "Descending Order"}
                            className="w-4 h-4 transition-all duration-300 group-hover:scale-110 brightness-0 saturate-100 invert-[60%]"
                            style={{ transform: orderAsc ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      </motion.div>

                      {/* Date Filter Bar */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                      >
                        <div className="bg-red-600/10 border-2 border-pink-950 rounded-xl p-4">
                          <section aria-label="Filter by date">
                            <div className="flex flex-wrap items-center gap-4">
                              {/* Years */}
                              <div className="flex items-center gap-2" role="radiogroup" aria-label="Year">
                                <button
                                  onClick={() => setSelectedYear(selectedYear === 2025 ? null : 2025)}
                                  className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                                    selectedYear === 2025
                                      ? "bg-red-600 text-zinc-100"
                                      : "text-neutral-400 hover:text-zinc-100"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedYear === 2025}
                                >
                                  2025
                                </button>
                                <button
                                  onClick={() => setSelectedYear(selectedYear === 2026 ? null : 2026)}
                                  className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                                    selectedYear === 2026
                                      ? "bg-red-600 text-zinc-100"
                                      : "text-neutral-400 hover:text-zinc-100"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedYear === 2026}
                                >
                                  2026
                                </button>
                              </div>

                              {/* Divider */}
                              <div className="h-8 w-px bg-neutral-700"></div>

                              {/* Months */}
                              <nav className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label="Month">
                                {months.map((month) => (
                                  <button
                                    key={month.name}
                                    onClick={() => month.enabled && toggleMonth(month.name)}
                                    disabled={!month.enabled}
                                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                      selectedMonths.includes(month.name)
                                        ? "bg-red-600 text-zinc-100"
                                        : month.enabled
                                        ? "text-neutral-400 hover:text-zinc-100"
                                        : "text-neutral-700 cursor-not-allowed"
                                    }`}
                                    role="checkbox"
                                    aria-checked={selectedMonths.includes(month.name)}
                                  >
                                    {month.name}
                                  </button>
                                ))}
                              </nav>
                            </div>
                          </section>
                        </div>
                      </motion.div>

                      {/* Models Grid */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Nano-Banana-32671.png"
                            name="Lena Kowalski"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/poland.svg"
                            countryName="Poland"
                            galleries="1"
                            pictures="48"
                            profileViews="0"
                            fans="0"
                            firstSeen="January 14, 2026"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/09-cover.png"
                            name="Amara Diallo"
                            countryFlagUrl=""
                            countryName=""
                            galleries="1"
                            pictures="6"
                            profileViews="3"
                            fans="0"
                            firstSeen="January 11, 2026"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Nano-Banana-31564.png"
                            name="Viktoriya Orlova"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/russia.svg"
                            countryName="Russia"
                            galleries="1"
                            pictures="7"
                            profileViews="199"
                            fans="0"
                            firstSeen="December 30, 2025"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Tahlia-Monteverde-Cover.png"
                            name="Tahlia Monteverde"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/argentina.svg"
                            countryName="Argentina"
                            galleries="1"
                            pictures="0"
                            profileViews="1"
                            fans="0"
                            firstSeen="December 24, 2025"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/001-portrait.png"
                            name="Amaya Serrano"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/mexico.svg"
                            countryName="Mexico"
                            galleries="4"
                            pictures="113"
                            profileViews="4"
                            fans="0"
                            firstSeen="December 21, 2025"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/Nano-Banana-31410.png"
                            name="Freya Lindström"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/sweden.svg"
                            countryName="Sweden"
                            galleries="1"
                            pictures="15"
                            profileViews="67"
                            fans="2"
                            firstSeen="December 8, 2025"
                          />
                          <ModelCard
                            profileImageUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/cover.png"
                            name="Viktoria Sokolov"
                            countryFlagUrl="https://c.animaapp.com/mlkz786xE7zbPi/assets/russia.svg"
                            countryName="Russia"
                            galleries="1"
                            pictures="46"
                            profileViews="2"
                            fans="0"
                            firstSeen="December 4, 2025"
                          />
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 py-8">
                          <button
                            disabled
                            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 border-2 border-pink-950/30 bg-red-600/5 text-neutral-700 cursor-not-allowed"
                          >
                            <img
                              src="https://c.animaapp.com/mlkz786xE7zbPi/assets/chevron-left.svg"
                              alt="Previous"
                              className="w-4 h-4 brightness-0 saturate-100 invert-[40%]"
                            />
                          </button>
                          <button className="flex items-center justify-center w-10 h-10 rounded-xl font-medium transition-all duration-300 bg-pink-950 text-zinc-100 border-2 border-pink-950 scale-105">
                            1
                          </button>
                          <button
                            disabled
                            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 border-2 border-pink-950/30 bg-red-600/5 text-neutral-700 cursor-not-allowed"
                          >
                            <img
                              src="https://c.animaapp.com/mlkz786xE7zbPi/assets/chevron-right.svg"
                              alt="Next"
                              className="w-4 h-4 brightness-0 saturate-100 invert-[40%]"
                            />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </body>
  );
};
