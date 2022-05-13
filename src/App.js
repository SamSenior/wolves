import React from "react";
import {
  Footer,
  Partners,
  Roadmap,
  Services,
  About,
  Header,
} from "./containers";
import { Join, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <About />
    <Services />
    <div className="gradient__bg">
    <Roadmap />
    </div>
    <Join />
    <Partners />
    <div className="gradient__bg_2">
      <Brand />
    </div>
    <Footer />
  </div>
);

export default App;
