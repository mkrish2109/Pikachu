import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./page/Pokedex";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonDetails from "./page/PokemonDetails";
import LayOut from "./layout/LayOut";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
