export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent border-neutral-700 pt-4 border-t border-solid">
      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 md:items-center md:flex-row">
        <p className="text-neutral-600 font-medium box-border caret-transparent">
          © 2025 Puff Parade. All rights reserved.
        </p>
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap gap-y-6">
          <button className="text-neutral-400 text-sm font-medium bg-transparent caret-transparent block leading-5 text-center p-0 hover:text-zinc-100 transition-colors duration-300">
            Terms of Service
          </button>
          <button className="text-neutral-400 text-sm font-medium bg-transparent caret-transparent block leading-5 text-center p-0 hover:text-zinc-100 transition-colors duration-300">
            Privacy Policy
          </button>
          <button className="text-neutral-400 text-sm font-medium bg-transparent caret-transparent block leading-5 text-center p-0 hover:text-zinc-100 transition-colors duration-300">
            Contact Us
          </button>
          <button className="text-neutral-400 text-sm font-medium bg-transparent caret-transparent block leading-5 text-center p-0 hover:text-zinc-100 transition-colors duration-300">
            Help Center
          </button>
        </div>
      </div>
    </div>
  );
};
