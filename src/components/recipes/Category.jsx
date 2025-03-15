import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/favoriteSlice"; // Import add, remove action
import "../../styles/Category.css"; // Adjust the path if needed


const Category = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites); // Get favorite recipes
  const { type } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoryMapping = {
    breakfast: "breakfast",
    lunch: "lunch",
    dinner: "dinner",
    desserts: "dessert",
    vegetarian: "vegetarian",
    vegan: "vegan",
    snacks: "snack",
    drinks: "drink",
  };

  useEffect(() => {
    const fetchCategoryRecipes = async () => {
      setLoading(true);
      setError(null);
      const query = categoryMapping[type] || type;

      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=051b1017&app_key=1f5df7a0b617229008922db3009c4c86`
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText} (${response.status})`);
        }

        const data = await response.json();
        setRecipes(data.hits.length > 0 ? data.hits : []);
      } catch (error) {
        console.error("Error fetching category recipes:", error);
        setError("Failed to load recipes. Please check your API key and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryRecipes();
  }, [type]);

  const toggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);
    if (isFavorite) {
      dispatch(remove(recipe.uri));
    } else {
      dispatch(add(recipe));
    }
  };

  return (
    <Container>
      <h2 className="text-center mt-4">{type.charAt(0).toUpperCase() + type.slice(1)} Recipes</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      )}

      {error && <Alert variant="danger" className="text-center">{error}</Alert>}

      {!loading && !error && recipes.length === 0 && (
        <p className="text-center">No recipes found for this category!</p>
      )}

      <Row>
        {recipes.map(({ recipe }) => {
          const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);

          return (
            <Col sm={6} md={4} lg={3} key={recipe.uri}>
              <Card className="h-100 shadow-sm">
                <div className="favorite" onClick={() => toggleFavorite(recipe)} style={{ cursor: "pointer" }}>
                  <FaHeart className={`heart-icon ${isFavorite ? "text-danger" : "text-secondary"}`} />
                  <span>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
                </div>
                <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
                <Card.Body>
                  <Card.Title>{recipe.label}</Card.Title>
                  <Link to={`/recipe/${encodeURIComponent(recipe.uri)}`}>
                    <Button variant="primary" className="w-100">View Recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;


