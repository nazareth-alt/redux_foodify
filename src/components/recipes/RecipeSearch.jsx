import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  const SPOONACULAR_API_KEY = "70904b327c65457294273ec949fcb10f";

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${SPOONACULAR_API_KEY}&number=12`
        );
        const data = await response.json();

        if (response.ok && data.results?.length) {
          setRecipes(data.results);
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
        {recipes.map((recipe) => (
          <Col sm={6} md={4} lg={3} key={recipe.id}>
            <Card className="h-100 text-center">
              <Card.Img
                variant="top"
                src={recipe.image}
                alt={recipe.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-truncate">{recipe.title}</Card.Title>
                <Card.Text className="text-muted">ID: {recipe.id}</Card.Text>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
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


