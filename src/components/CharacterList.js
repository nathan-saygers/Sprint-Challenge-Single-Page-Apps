import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`

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
    <ListWrapper>
      <SearchForm 
      characterData={characterData} />
      {/* {characterData.map(character => (
        <CharacterCard 
          charName={character.name}
          charSpecies={character.species}
          charOrigin={character.origin.name}
          />
      ))} */}
    </ListWrapper>
  );
}
