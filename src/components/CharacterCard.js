import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>{props.charName}</h2>
      <p>{props.charSpecies}</p>
      <p>{props.charOrigin}</p>
    </div>
  )
}
