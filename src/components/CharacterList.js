import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacterData(response.data.results)
    })
    .catch(error => {
      console.log("No Data Fetched", error);
    })
  }, [])

  console.log(characterData);

  return (
    <section className="character-list">
      {characterData.map(character => (
        <CharacterCard 
          charName={character.name}
          charSpecies={character.species}
          charOrigin={character.origin.name}
          />
      ))}
    </section>
  );
}
