import type { FC } from "react";
import type { DataType } from "../data/data";

export type ExploreProps = {
  dataExpore: DataType;
};

const Explore: FC<ExploreProps> = ({ dataExpore }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        className="w-full object-cover max-h-100 h-full"
        src={`/thumbnails/${dataExpore.thumbnails}`}
        // src={`/images/spy-carousel.png`}
        // src={`/thumbnails/captsu-card.jpg`}
        alt={dataExpore.movieName}
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/20 to-transparent"></div>

      <div className="absolute left-11 bottom-10 max-w-[30%] text-[#FFFFFF] bg-transparent bg-auto">
        <span className="text-3xl font-semibold mb-3! block!">
          {dataExpore.movieName}
        </span>
        <p className="text-[16px] font-normal">
          {dataExpore.description.slice(0, 250) + " ..."}
        </p>
      </div>
    </div>
  );
};

export default Explore;
