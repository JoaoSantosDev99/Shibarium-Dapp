import NFTUserItem from "./components/UI/NFTUserItem";
import down from "./assets/down.png";
import profile from "./assets/profile.png";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";
import { addressShortener } from "./utils";
import { ethers } from "ethers";
import abi from "./contracts/tokens_abi.json";

const User = () => {
  const { address, isConnected } = useAccount();
  const [primary, setprimary] = useState("cryptodaddy.inu");
  const [tokenBalance, setTokenBalance] = useState();
  const { data: signer } = useSigner();

  const staticProvider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/eth"
  );

  const tokenAddress = "0xEa4a2327E75252517535fd013b7C6706609819DB";
  const tokenAbi = abi;

  const readTokenContract = new ethers.Contract(
    tokenAddress,
    tokenAbi,
    staticProvider
  );

  useEffect(() => {
    const getBalance = async () => {
      const balance = await readTokenContract.balanceOf(address);
      const formatedBalance = ethers.utils.formatUnits(balance, 18);
      setTokenBalance(
        Number(Number(formatedBalance).toFixed(0)).toLocaleString()
      );
    };

    getBalance();
  }, []);

  const changePrimary = (e) => {
    setprimary(e.target.textContent);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl flex p-1 sm:px-4 flex-col items-center justify-center min-h-screen w-full">
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-40 xl:gap-52 max-w-7xl w-full mt-20 sm:mt-44">
          {/* Profile */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Avatar */}
            <div className="w-36 p-2 h-36 rounded-xl bg-[#fef0bc] border-2 border-[#8B6E48]">
              <img src={profile} alt="" />
            </div>

            {/* Data */}
            <ul className="flex justify-center text-[#78572d] border-2 border-[#8B6E48] bg-[#fef0bc] w-[350px] h-36 flex-col text-center sm:text-start text-lg sm:text-xl font-bold p-3 rounded-xl">
              <li>Name: Crypto Daddy (demo)</li>
              <li>
                Address:{" "}
                {isConnected ? addressShortener(address) : "0x322..sdf2 (demo)"}
              </li>
              <li>Primary: {primary}</li>
              <li>
                SNS Balance: {isConnected ? tokenBalance : "100.000 (demo)"}
              </li>
            </ul>
          </div>

          {/* Change Primary Domain */}
          <div className="flex flex-col gap-2">
            {/* Dropdown */}
            <div className="bg-[#A48253] w-82 py-4 rounded-xl flex flex-col gap-1 justify-center items-center">
              <h3 className="text-lg text-[#fff2e1] font-bold text-center">
                Select Primary Domain
              </h3>

              {/* Dropdown */}
              <div className="flex justify-center w-full">
                <div className="w-[90%]">
                  <div class="relative" data-te-dropdown-ref>
                    <button
                      className="gap-2 w-full px-4 bg-[#FFECA7] font-bold text-[#78572d] border-2 border-[#c8a475] flex justify-center items-center p-2 rounded-xl"
                      data-te-dropdown-toggle-ref
                    >
                      {primary}
                      <img src={down} alt="down" className="w-5" />
                    </button>
                    <ul
                      class="absolute w-full z-[1000] text-[#78572d] font-bold p-4 hidden list-none overflow-hidden rounded-lg border-none bg-[#FFECA7] shadow-lg [&[data-te-dropdown-show]]:block"
                      aria-labelledby="dropdownMenu"
                      data-te-dropdown-menu-ref
                    >
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        cryptodaddy.inu
                      </li>
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        snshypper.inu
                      </li>
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        100xmisser.inu
                      </li>
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        elonenjoyer420.inu
                      </li>
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        fomoguy65.inu
                      </li>
                      <li
                        onClick={changePrimary}
                        className="py-1 mb-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#fde48c] text-center px-2 rounded-lg"
                      >
                        paperhands69.inu
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Redirec Buttons */}
            <div className="flex gap-2">
              <a href="https://app.dogtag.id/" target="_blank" rel="noreferrer">
                <button className="bg-[#FFECA7] font-bold text-[#78572d] border-2 border-[#c8a475] flex justify-center items-center p-2 rounded-xl">
                  New Domain
                </button>
              </a>
              <a
                href="https://app.uniswap.org/0xEa4a2327E75252517535fd013b7C6706609819DB#/tokens/ethereum/0xea4a2327e75252517535fd013b7c6706609819db"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#FFECA7] font-bold text-[#78572d] border-2 border-[#c8a475] flex justify-center items-center p-2 rounded-xl">
                  Buy SNS
                </button>
              </a>
              <a
                href="https://opensea.io/assets?search[query]=0x56212890b11F448A0c689747A2e74C051cA4f028"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#FFECA7] font-bold text-[#78572d] border-2 border-[#c8a475] flex justify-center items-center p-2 rounded-xl">
                  Open Sea
                </button>
              </a>
            </div>
          </div>
        </div>

        <h2 className="flex text-[#78572d] text-4xl font-bold mb-10 mt-20 text-center">
          Your Domains
        </h2>
        <ul className="flex sm:p-2 mb-10 flex-wrap gap-4 justify-center max-w-7xl w-full">
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
