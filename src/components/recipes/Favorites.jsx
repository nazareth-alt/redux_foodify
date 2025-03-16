import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../store/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import "../../styles/favorites.css"

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <Container fluid="lg" className="favorites-container mt-4">
      <h2 className="text-center mb-4">Your Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p className="text-center">No favorites added yet.</p>
      ) : (
        <Row className="g-4 justify-content-center">
          {favorites.map((recipe) => (
            <Col xs={12} sm={6} md={4} lg={3} className="favorite-col" key={recipe.id}>
              <Card className="h-100 shadow-sm recipe-card">
                <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card.Img variant="top" src={recipe.image} alt={recipe.title} className="card-img" />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{recipe.title}</Card.Title>

                  <Link to={`/recipe/${recipe.id}`} className="mb-2">
                    <Button variant="primary" className="w-100">View Recipe</Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="w-100 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => dispatch(removeFromFavorites(recipe.id))}
                  >
                    <FaHeart /> Remove from Favorites
                  </Button>
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


