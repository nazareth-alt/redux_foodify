import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoritesState = useSelector((state) => state.favorites); // Check the entire slice
  const favorites = favoritesState ? favoritesState.favorites : []; // Ensure a fallback

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p className="text-center">No favorites added yet.</p>
      ) : (
        <Row>
          {favorites.map((recipe) => (
            <Col sm={6} md={4} lg={3} key={encodeURIComponent(recipe.uri)}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
                <Card.Body>
                  <Card.Title>{recipe.label}</Card.Title>
                  <Link to={`/recipe/${encodeURIComponent(recipe.uri)}`}>
                    <Button variant="primary" className="w-100">View Recipe</Button>
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

export default Favorites;
