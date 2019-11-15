import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: lightblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  padding: 5px;
  margin: 1rem;
`
const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function CharacterCard(props) {
  console.log("CharacterData in CharacterCard", props.characterData);

  return (
    <ListWrapper>
      { props.characterData.map(character => (
      <Card>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.origin.name}</p>
      </Card>
      ))}
    </ListWrapper>
  )
}
