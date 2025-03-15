import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  const YOUR_APP_ID = '051b1017';
  const YOUR_APP_KEY = '1f5df7a0b617229008922db3009c4c86';

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(""); // Reset error before fetching
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${searchQuery}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
        );
        const data = await response.json();

        if (response.ok) {
          setRecipes(data.hits);
        } else {
          throw new Error("No results found.");
        }
      } catch (error) {
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchRecipes();
    }
  }, [searchQuery]);

  return (
    <Container>
      <h1 className="text-center my-4">
        Search Results for "{searchQuery}"
      </h1>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      )}

      {/* Error Message */}
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}

      {/* No Recipes Found */}
      {!loading && !error && recipes.length === 0 && (
        <p className="text-center">No results found for "{searchQuery}". Try searching for something else!</p>
      )}

      {/* Display Recipes */}
      <Row className="g-4">
        {recipes.map(({ recipe }) => (
          <Col sm={6} md={4} lg={3} key={recipe.uri}>
            <Card className="h-100 text-center">
              <Card.Img
                variant="top"
                src={recipe.image}
                alt={recipe.label}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-truncate">{recipe.label}</Card.Title>
                <Card.Text className="text-muted">
                  {recipe.ingredients.length} ingredients
                </Card.Text>
                <Link to={`/recipe/${recipe.uri}`} className="btn btn-primary">
                  View Recipe
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeSearch;

