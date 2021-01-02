import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = React.useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(inputRef.current.value);
  };
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your Favourite Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={inputRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
