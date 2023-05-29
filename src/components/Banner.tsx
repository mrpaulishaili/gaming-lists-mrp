const Banner = ({ gameBanner }: BannerProps) => {
  return (
    <div className="relative h-80">
      <div className="absolute h-full w-full bg-black bg-opacity-25 top-0 left-0 z-20"></div>
      <div className="h-full w-full relative ">
        <img
          src={gameBanner.background_image}
          alt={`${gameBanner.name} image`}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="absolute bottom-0 p-5 flex flex-col gap-3">
        <h3 className="text-2xl">{gameBanner.name}</h3>
        <button className="w-max bg-gradient-to-t from-slate-900 to-transparent px-3 py-2 rounded-lg text-white">
          Get now
        </button>
      </div>
    </div>
  );
};

export default Banner;
