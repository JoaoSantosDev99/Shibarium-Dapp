import NFTListItem from "./components/UI/NFTListItem";

const Home = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl flex flex-col items-center min-h-screen w-full bg-slate-700">
        <div className="flex max-w-6xl w-full justify-between items-center mt-10 border">
          <div className="flex flex-col gap-5">
            <div className="max-w-lg w-full h-80 bg-white"></div>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium aut impedit vel et pariatur enim aperiam, ab minus
              velit nam non nobis quam iure est molestias doloribus! Ipsum,
              dolor illum?
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-96 h-72 bg-white"></div>
            <div className="w-96 h-16 bg-white"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mt-20">
          Check out the latest domains created
        </h2>
        <ul className="flex p-2 flex-wrap gap-4 justify-center border max-w-7xl w-full">
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
          <NFTListItem />
        </ul>
      </div>
    </section>
  );
};

export default Home;
