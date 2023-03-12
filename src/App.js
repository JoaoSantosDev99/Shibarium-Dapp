import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./home";
import Swap from "./swap";
import User from "./user";
import top from "./assets/top.png";

function App() {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1200) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        {/* Back to top */}
        {backTop && (
          <button
            onClick={scrollToTop}
            title="back to top"
            className="fixed border-2 bg-[#FFF3C6] border-[#8B6E48] right-2 bottom-24 md:right-10 md:bottom-10 p-2 rounded-xl"
          >
            <img src={top} alt="paw" className="w-10 md:w-12" />
          </button>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/user" element={<User />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
