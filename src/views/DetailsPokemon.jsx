import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPokemon = () => {
  const [character, setCharacter] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const datos = await resp.json();
      setCharacter(datos);
    };

    getAPI();
  }, [name]);

  return (
    <div className="principalSection">
      <h1>{name}</h1>
      {character && (
        <>
          <section>
            <img src={character.sprites.front_default} alt={character.name} id="finalPokemon" />

            <ul>
              <li>hp: {character.stats[1].base_stat}</li>
              <li>attack: {character.stats[2].base_stat}</li>
              <li>defense: {character.stats[3].base_stat}</li>
              <li>special-attack: {character.stats[4].base_stat}</li>
              <li>type: {character.types[0].type.name}</li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default DetailsPokemon;