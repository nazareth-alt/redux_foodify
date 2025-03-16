import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_KEY = "70904b327c65457294273ec949fcb10f";
const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`;

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <Container className="recipes-page">
      <h2 className="text-center my-4">Explore Delicious Recipes</h2>

      {loading ? (
        <div className="text-center">
          <span className="spinner-border text-primary"></span>
          <p>Loading recipes...</p>
        </div>
      ) : (
        <Row>
          {recipes.map((recipe) => (
            <Col md={4} sm={6} xs={12} key={recipe.id} className="mb-4">
              <Card className="recipe-card shadow-sm">
                <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Link to={`/recipe/${recipe.id}`}>
                    <Button variant="primary" className="w-100">
                      View Recipe
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default RecipesPage;

