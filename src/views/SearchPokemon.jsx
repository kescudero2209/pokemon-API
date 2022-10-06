import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPokemon = () => {
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const datos = await resp.json();

      setPokemones(datos.results);
    };

    getAPI();
  }, [name]);

  const handleID = (event) => {
    const namePokemon = event.target.value;

    setName(namePokemon);
  };

  const navigatePokemon = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div className="principalSection">
      <h1>Selecciona un Pokemón</h1>
      <select id="selectOption" onChange={handleID}>
        <option value="">Pokemones</option>
        {pokemones.map((character, index) => (
          <option key={index} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
      <button onClick={navigatePokemon}>Ver detalles</button>
    </div>
  );
};

export default SearchPokemon;