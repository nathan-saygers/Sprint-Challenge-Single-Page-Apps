import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get("https://rick-api.herokuapp.com/api/character/")
    .then(response => {
      setCharacterData(response.data.results)
    })
    .catch(error => {
      console.log("No Data Fetched", error);
    })
  }, [])

  console.log(characterData);

  return (
    <div>
      <SearchForm 
      characterData={characterData} />
      {/* {characterData.map(character => (
        <CharacterCard 
          charName={character.name}
          charSpecies={character.species}
          charOrigin={character.origin.name}
          />
      ))} */}
    </div>
  );
}
