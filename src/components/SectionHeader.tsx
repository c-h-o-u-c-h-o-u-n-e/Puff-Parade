export type SectionHeaderProps = {
  title: string;
  buttonText: string;
  iconVariant: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between mb-8 md:mb-12 flex-col md:flex-row gap-4">
      <div className="items-center box-border caret-transparent flex basis-[0%] grow w-full">
        <div className="box-border caret-transparent w-6 md:w-8 border-neutral-700 mr-3 md:mr-4 border-t border-solid"></div>
        <h2 className="text-zinc-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold box-border caret-transparent tracking-[1.2px] md:tracking-[1.8px] leading-8 md:leading-10 whitespace-nowrap">
          {props.title}
        </h2>
        <div className="box-border caret-transparent basis-[0%] grow border-neutral-700 ml-3 md:ml-4 border-t border-solid"></div>
      </div>
      <button className="text-neutral-400 text-sm sm:text-base font-medium items-center bg-transparent caret-transparent flex text-center p-0 group whitespace-nowrap">
        <span className="box-border caret-transparent block group-hover:text-zinc-100 transition-colors duration-300">
          {props.buttonText}
        </span>
        <div
          className={`box-border caret-transparent w-3 md:w-4 border-neutral-700 border-t border-solid ${props.iconVariant}`}
        ></div>
        <img
          src="https://c.animaapp.com/mlkz786xE7zbPi/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 md:h-5 w-4 md:w-5 ml-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        />
      </button>
    </div>
  );
};
