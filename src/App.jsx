import "./App.css";
import { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import LogIn from "./pages/logIn/LogIn";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-[62px] flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/internal/login" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
