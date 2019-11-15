import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characterData.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
     <form>
      <label htmlFor="name">Search Character Names: </label>
      <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
     </form>
     <div>
        <ul>
          {searchResults.map(character => (
            <li key={character}>
              {props.characterData.map(character => (
                <CharacterCard 
                  charName={character.name}
                  charSpecies={character.species}
                  charOrigin={character.origin.name}
                  />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
