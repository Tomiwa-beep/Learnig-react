import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Movie from "./Components/Movie";
import TruthButton from "./Components/TruthButton";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Movie />
      <TruthButton />
    </>
  );
}

export default App;
