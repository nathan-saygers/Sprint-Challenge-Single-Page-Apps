import React, { useState, useEffect } from "react";
import CharacterCards from "./CharacterCards";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  console.log("Character Data", props.characterData);

  useEffect(() => {
    const results = props.characterData.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
    setIsSearching(true);
  };

  console.log("Search Results", searchResults);

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
        {isSearching ? <CharacterCards characterData={searchResults}/> : <CharacterCards characterData={props.characterData}/> }
      </div>
    </section>
  );
}
