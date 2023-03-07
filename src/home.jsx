import { useState } from "react";
import NFTListItem from "./components/UI/NFTListItem";
import data from "./DATA/mock";
// import dogGroup from
import redirect from "./assets/redirect.png";
import home from "./assets/home.png";

const Home = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(
      e.target.value
        .replace(".", "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()
        .trim()
    );

    setFilterActive(inputText !== "");
    console.log(inputText);
    console.log(data.length);

    console.log("is filter active?", inputText !== "", inputText);

    // inputText === "" ? setFilterActive(false) : setFilterActive(true);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl px-2 flex flex-col items-center min-h-screen w-full bg-[#070500]">
        <div className="flex flex-wrap max-w-6xl gap-10 w-full justify-center items-center mt-80 border">
          {/* image and text */}
          <div className="flex  items-center flex-col gap-5">
            <img src={home} alt="group-of-dogs" className="max-w-[800px]" />
            <p className="max-w-lg w-[340px] sm:w-full px- text-white font-ChakraPetch font-semibold text-xl text-center">
              Every .inu domain represents your wallet so you can receive
              crypto, NFTs and just about anything else in the Shibarium
              Metaverse
            </p>
          </div>
          {/* Twitter Feed */}
          {/* <div className="flex flex-col gap-2 border justify-center items-center">
            <div className="w-[344px] sm:w-96 h-72 bg-white"></div>
            <div className="w-96 flex justify-center gap-1 font-semibold text-md font-Orbitron h-16">
              <button className="bg-[#FEB331] transition-all ease-in-out duration-300 hover:bg-[#cf942f] w-28 sm:w-32 px-1 rounded-bl-2xl">
                Telegram
              </button>
              <button className="bg-[#FEB331] transition-all ease-in-out duration-300 hover:bg-[#cf942f] w-28 sm:w-32 px-1 ">
                Medium
              </button>
              <button className="bg-[#FEB331] transition-all ease-in-out duration-300 hover:bg-[#cf942f] w-28 sm:w-32 px-1 rounded-br-2xl">
                Twitter
              </button>
            </div>
          </div> */}
        </div>

        <h2 className="text-white text-3xl mt-28 font-bold font-Orbitron">
          Looking for a specific domain?
        </h2>

        <input
          value={inputText}
          onChange={handleInputText}
          placeholder="Your favorite Dog Name"
          type="text"
          className="rounded-xl p-5 outline-none placeholder:text-[#a5a5a5] placeholder:font-Orbitron sm:w-96 mt-4 inpu font-ChakraPetch border-2 border-yellow-300"
        />

        <ul className="bg-yellow-200 py-4 max-w-md w-full rounded-xl mt-2 text-xl text-black font-ChakraPetch text-center">
          {data
            .filter((item) =>
              item.domain
                .replace(".inu", "")
                .includes(inputText || inputText === "")
            )
            .map((item) => item).length !== 0 ? (
            data
              .filter((item) => item.domain.indexOf(inputText) !== -1)
              .map((item) => (
                <li className="py-2 border ">
                  <a
                    className="flex justify-center items-center gap-2"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.domain}

                    <img src={redirect} alt="redirect" className="w-5 h-5" />
                  </a>
                </li>
              ))
          ) : inputText === "" ? (
            <div>Every dog needs a name</div>
          ) : (
            <h2>Sorry, no matching results.</h2>
          )}
        </ul>

        <h2 className="text-3xl font-bold text-center text-white mb-10 mt-20">
          Check out the latest domains created
        </h2>
        <ul className="flex sm:px-2 flex-wrap py-20 gap-2 sm:gap-4 justify-center border max-w-7xl w-full">
          {data.map((item) => (
            <NFTListItem
              address={item.owner}
              domain={item.domain}
              id={item.ID}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
