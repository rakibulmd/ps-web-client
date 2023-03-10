import "./App.css";
import { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./pages/Home/HeroSection";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-[65px]">
        <Routes>
          <Route path="/home" element={<HeroSection />} />
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
