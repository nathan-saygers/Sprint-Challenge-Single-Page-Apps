import React from "react";
import styled from "styled-components";

const CenteringDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <CenteringDiv>
        <a href="/">Welcome</a>
        <a href="/characters">Characters</a>
      </CenteringDiv>
    </header>
  );
}
