import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './views/Home';
import SearchPokemon from './views/SearchPokemon';
import DetailsPokemon from './views/DetailsPokemon';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pokemon" element={ <SearchPokemon />}/>
      <Route path="/pokemon/:name" element={ <DetailsPokemon />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
