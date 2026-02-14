import { motion } from "framer-motion";

export type ModelCardProps = {
  profileImageUrl: string;
  name: string;
  countryFlagUrl: string;
  countryName: string;
  galleries: string;
  pictures: string;
  profileViews: string;
  fans: string;
  firstSeen: string;
};

export const ModelCard = (props: ModelCardProps) => {
  return (
    <div className="bg-red-600/10 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border-pink-950 overflow-hidden rounded-xl border-2 border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] hover:border-red-600/50 transition-all duration-300 group">
      <a href="#" className="block relative aspect-[3_/_4] bg-zinc-900 box-border caret-transparent overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={props.profileImageUrl}
          alt={props.name}
          className="box-border caret-transparent h-full max-w-full object-cover w-full"
        />
      </a>
      <div className="box-border caret-transparent p-4 md:p-5">
        <div className="items-center box-border caret-transparent flex justify-between mb-2">
          <a href="#" className="flex-1 min-w-0">
            <h3 className="text-zinc-100 text-lg md:text-xl box-border caret-transparent tracking-[0.8px] md:tracking-[1px] leading-6 md:leading-7 text-ellipsis text-nowrap overflow-hidden hover:text-red-600 transition-colors duration-300">
              {props.name}
            </h3>
          </a>
          <img
            src={props.countryFlagUrl}
            alt={props.countryName}
            title={props.countryName}
            className="box-border caret-transparent max-w-full object-cover w-6 md:w-7 rounded-3xl ml-2 flex-shrink-0"
          />
        </div>
        <div className="box-border caret-transparent border-neutral-700 mb-3 border-t border-solid"></div>
        <div className="box-border caret-transparent text-sm md:text-base">
          <div className="box-border caret-transparent flex justify-between">
            <span className="text-neutral-400 box-border caret-transparent block">
              Galleries
            </span>
            <span className="text-zinc-100/70 font-medium box-border caret-transparent block">
              {props.galleries}
            </span>
          </div>
          <div className="box-border caret-transparent flex justify-between mt-2">
            <span className="text-neutral-400 box-border caret-transparent block">
              Pictures
            </span>
            <span className="text-zinc-100/70 font-medium box-border caret-transparent block">
              {props.pictures}
            </span>
          </div>
          <div className="box-border caret-transparent flex justify-between mt-2">
            <span className="text-neutral-400 box-border caret-transparent block">
              Profile Views
            </span>
            <span className="text-zinc-100/70 font-medium box-border caret-transparent block">
              {props.profileViews}
            </span>
          </div>
          <div className="box-border caret-transparent flex justify-between mt-2">
            <span className="text-neutral-400 box-border caret-transparent block">
              Fans
            </span>
            <span className="text-zinc-100/70 font-medium box-border caret-transparent block">
              {props.fans}
            </span>
          </div>
          <div className="box-border caret-transparent flex justify-between mt-2">
            <span className="text-neutral-400 box-border caret-transparent block">
              First Seen
            </span>
            <span className="text-zinc-100/70 font-medium box-border caret-transparent block">
              {props.firstSeen}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
