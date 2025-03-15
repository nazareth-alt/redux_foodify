import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserAccount = () => {
  const [user, setUser] = useState(null);  // Simulate user data
  const [favorites, setFavorites] = useState([]); // Simulate saved favorite recipes

  // Simulating fetch of user and favorites data
  useEffect(() => {
    const fetchUserData = async () => {
      // Replace with actual API call to fetch user data
      setUser({ name: 'John Doe', email: 'john@example.com' });

      // Simulate fetching saved recipes
      setFavorites([
        { name: 'Chicken Curry', id: 1, url: 'https://example.com/recipe1' },
        { name: 'Veggie Stir Fry', id: 2, url: 'https://example.com/recipe2' }
      ]);
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      <h2 className="text-center mt-4">Your Account</h2>
      {user ? (
        <>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <h4>Your Favorite Recipes</h4>
              {favorites.length === 0 ? (
                <p>No favorites yet!</p>
              ) : (
                <ul>
                  {favorites.map((recipe) => (
                    <li key={recipe.id}>
                      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                        {recipe.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default UserAccount;
