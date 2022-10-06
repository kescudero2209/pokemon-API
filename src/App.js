import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Home from './views/Home';
import SearchPokemon from './views/SearchPokemon';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pokemon" element={ <SearchPokemon />}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
