export const FooterLinks = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-2 md:items-end">
      <div className="box-border caret-transparent gap-x-8 flex gap-y-8">
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          Members
        </button>
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          Join for Free
        </button>
      </div>
      <div className="box-border caret-transparent gap-x-8 flex flex-wrap justify-normal gap-y-8 md:justify-end">
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          Galleries
        </button>
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          Models
        </button>
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          Aspiring Models
        </button>
        <button className="text-neutral-400 font-medium bg-transparent caret-transparent block text-center p-0 hover:text-zinc-100 transition-colors duration-300">
          My Parade
        </button>
      </div>
    </div>
  );
};
