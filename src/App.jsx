import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-50 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="ralative z-0 ">
          <Contact/>
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
