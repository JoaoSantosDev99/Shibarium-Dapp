import { useWeb3Modal } from "@web3modal/react";
import { Link, NavLink } from "react-router-dom";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { addressShortener } from "../../utils";

import home from "../../assets/icons/home.png";
import user from "../../assets/icons/user.png";
import swap from "../../assets/icons/swap.png";
import Logo from "../../assets/Logo.png";
import ConnectButton from "../UI/ConnectButton";

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
    <header className="w-full flex justify-center bg-[#551818]">
      <div className="max-w-screen-2xl w-full shadow-2xl p-1 sm:p-2 bg-[#FFF4CE]">
        {/* Desktop header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <h1 className="text-4xl">
              <img src={Logo} alt="logo" className="w-56" />
            </h1>

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
            <ConnectButton title={addressShortener(address)} />
          ) : (
            <ConnectButton title="Connect Wallet" onClick={connectWallet} />
          )}
        </div>

        {/* Mobile Header */}
        <nav className="flex items-center py-4 fixed md:hidden bg-[#551818] text-white z-10 bottom-0 right-0 left-0 justify-center gap-2 w-full">
          <ul className="flex justify-evenly w-full">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#444] flex justify-center items-center p-2 rounded"
                    : "flex justify-center items-center p-2 rounded"
                }
              >
                <img src={home} alt="home" className="w-10" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/swap"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#444] flex justify-center items-center p-2 rounded"
                    : "flex justify-center items-center p-2 rounded"
                }
              >
                <img
                  src={swap}
                  alt="swap"
                  className="w-10 flex justify-center items-center rotate-90"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#444] flex justify-center items-center p-2 rounded"
                    : "flex justify-center items-center p-2 rounded"
                }
              >
                <img
                  src={user}
                  alt="user"
                  className="w-10 flex justify-center items-center"
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
