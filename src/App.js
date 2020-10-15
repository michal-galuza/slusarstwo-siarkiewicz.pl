import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./components/Nav/Nav";

import Routes from "./Routes";
import Footer from "./components/Footer/Footer";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  useEffect(() => {
    AOS.init({ duration: "1000", once: true });
  }, []);
  return (
    <Router className="App">
      <ScrollToTop />
      <Nav />

      <Routes />

      <Footer />
    </Router>
  );
}

export default App;
