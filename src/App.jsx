import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import BeforeNAfter from "./components/BeforeNAfter";
import About from "./components/About";
import OurServices from "./components/OurServices";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Qoute from "./components/Qoute";
import Contact from "./components/Contact";
import RenoSupport from "./components/RenoSupport";
import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-tertiary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center p-1">
          {/* <Navbar /> */}
          <Navbar2 />
          {/* <BeforeNAfter /> */}
        </div>
        {/* <Qoute /> */}
        {/* <About /> */}
        {/* <OurServices /> */}
        {/* <Gallery /> */}
        {/* <Videos /> */}
        {/* <RenoSupport /> */}
        <div className="relative z-0">
          {/* <Contact /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
