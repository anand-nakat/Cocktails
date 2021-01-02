import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState({});
  const [ingredients, setIngredients] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        setCocktail(drinks[0]);
        let {
          strIngredient1: ingr1,
          strIngredient2: ingr2,
          strIngredient3: ingr3,
          strIngredient4: ingr4,
          strIngredient5: ingr5,
        } = drinks[0];
        setIngredients([ingr1, ingr2, ingr3, ingr4, ingr5]);
      } else {
        setCocktail({});
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  React.useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  if (cocktail.length < 1) {
    return <Loading />;
  }
  const {
    strDrink: name,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strDrinkThumb: img,
    strInstructions: instructions,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item, index) => {
              if (item) {
                return <span key={index}>{item}</span>;
              }
              return null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
