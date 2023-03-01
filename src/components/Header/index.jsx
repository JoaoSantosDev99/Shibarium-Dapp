import { useWeb3Modal } from "@web3modal/react";
import { Link } from "react-router-dom";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { addressShortener } from "../../utils";
const Header = () => {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { address, isConnected } = useAccount();

  const connectWallet = () => {
    if (chain?.id !== 5) {
      switchNetwork?.(5);
    }
    try {
      open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="w-full flex justify-center">
      <div className="max-w-screen-2xl w-full p-4 bg-[#551818]">
        {/* Desktop header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <h1 className="text-4xl">Shibarium</h1>

            <ul className="hidden md:flex gap-2 font-ChakraPetch">
              <Link to="/">
                <li className="py-2 px-5 bg-[#722222] text-xl border-2 border-[#976f29] text-[#FEB331] rounded">
                  Home
                </li>
              </Link>

              <Link to="/swap">
                <li className="py-2 px-5 bg-[#722222] text-xl border-2 border-[#64491b] text-[#FEB331] rounded">
                  Swap
                </li>
              </Link>

              <Link to="/user">
                <li className="py-2 px-5 bg-[#722222] text-xl border-2 border-[#64491b] text-[#FEB331] rounded">
                  Profile
                </li>
              </Link>
            </ul>
          </div>

          {isConnected ? (
            <button>{addressShortener(address)}</button>
          ) : (
            <button
              className="bg-[#FEB331] p-2 rounded-tr-md rounded-bl-md font-ChakraPetch"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
