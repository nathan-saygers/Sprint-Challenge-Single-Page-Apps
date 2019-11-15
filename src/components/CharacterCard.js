import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: lightblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  padding: 5px;
  margin: 1rem;
`

export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.charName}</h2>
      <p>{props.charSpecies}</p>
      <p>{props.charOrigin}</p>
    </Card>
  )
}
