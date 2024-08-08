import React, { FC, useState } from "react";
import { User } from "../types";
import "./styles.css";

interface TypeaheadProps {
  data: User[];
}

export const Typeahead: FC<TypeaheadProps> = ({ data }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<User[]>([]);
  const filteredData = (query: string) => {
    return [...data].filter((property) => {
      {
        return Object.values(property).some((suggestion) => {
          if (typeof suggestion === "string") {
            return suggestion.toLocaleLowerCase().includes(query);
          }
        });
      }
    });
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredSuggestions(filteredData(value));
  };
  const handleSelect = (suggestion: User) => {
    setQuery(suggestion.first || suggestion.name);
  };

  return (
    <div className="container">
      <input
        className="inputBox"
        type="search"
        placeholder="search...."
        onChange={handleSearch}
        value={query}
      />
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion) => (
            <li
              className="suggestionItem"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion.first || suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
