import NFTUserItem from "./components/UI/NFTUserItem";

const User = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl flex p-1 sm:px-4 flex-col items-center justify-center min-h-screen w-full bg-slate-700">
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-40 xl:gap-52 max-w-7xl border w-full mt-20">
          {/* Profile */}
          <div className="flex flex-wrap justify-center items-center border gap-4">
            {/* Avatar */}
            <div className="rounded w-36 h-36 bg-white border-2 border-[#FEB331]"></div>
            {/* Data */}
            <ul className="flex justify-center w-[350px] h-36 flex-col text-center sm:text-start text-lg sm:text-xl font-bold p-3 bg-white rounded">
              <li>Name: Dipseller Jay</li>
              <li>Address: 0x322..sdf2</li>
              <li>Primary Domain: Dipseller.inu</li>
              <li>SNS Balance: 100,000,000</li>
            </ul>
          </div>

          {/* Change Primary Domain */}
          <div className="flex flex-col gap-2">
            {/* Dropdown */}
            <div className="bg-white w-82 py-4 rounded flex flex-col gap-1 justify-center items-center">
              <h3 className="text-lg font-bold text-center">
                Select Primary Domain
              </h3>
              <button className="bg-orange-300 w-[90%] py-1 px-2 rounded">
                Dipseller.inu
              </button>
            </div>
            {/* Redirec Buttons */}
            <div className="h-10 flex gap-2 justify-center">
              <button className="bg-orange-300 w-28 py-1 px-2 rounded">
                New Domain
              </button>
              <button className="bg-orange-300 w-28 py-1 px-2 rounded">
                Buy SNS
              </button>
              <button className="bg-orange-300 w-28 py-1 px-2 rounded">
                Open Sea
              </button>
            </div>
          </div>
        </div>

        <h2 className="flex text-4xl font-bold mb-10 mt-20 text-center">
          Your Domains
        </h2>
        <ul className="flex sm:p-2 flex-wrap gap-4 justify-center border max-w-7xl w-full">
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
          <NFTUserItem />
        </ul>
      </div>
    </section>
  );
};

export default User;
