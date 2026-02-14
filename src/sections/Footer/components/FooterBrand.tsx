export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-between">
      <div className="box-border caret-transparent">
        <a href="/" className="inline-block text-neutral-400 bg-transparent caret-transparent text-center mb-2 p-0">
          <img
            src="https://c.animaapp.com/mlkz786xE7zbPi/assets/pp-logo.webp"
            alt="Puff Parade"
            className="box-border caret-transparent h-10 md:h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
        <p className="text-neutral-400 text-base md:text-lg font-medium box-border caret-transparent tracking-[0.7px] md:tracking-[0.9px] leading-6 md:leading-7">
          Celebrating the elegance of feminine smoking
        </p>
      </div>
    </div>
  );
};
