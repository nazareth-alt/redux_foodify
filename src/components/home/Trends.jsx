import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Trends = () => {
  const [recipes, setRecipes] = useState([]); // Initialize state to hold recipes
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(""); // Error state to store API errors

  const YOUR_APP_ID = "051b1017";
  const YOUR_APP_KEY = "1f5df7a0b617229008922db3009c4c86";
  const USER_ID = "nazaret277"; // My actual userId

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=popular&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
          {
            method: "GET",
            headers: {
              "Edamam-Account-User": USER_ID, // Add the User ID in the headers
            },
          }
        );
        const data = await response.json();
        console.log("Full API Response:", data); // Log full API response

        if (data.hits && data.hits.length > 0) {
          setRecipes(data.hits); // Set recipes if hits are found
        } else {
          setError("No trending recipes available."); // Set error message if no hits
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch trending recipes. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const retryFetch = () => {
    setLoading(true);
    setError(""); // Clear the error message
    fetchRecipes();
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading trending recipes...</p>
      </div>
    );
  }

  return (
    <Container>
      <h2 className="text-center my-4">Trending Recipes</h2>
      {error && (
        <>
          <p className="text-center text-danger">{error}</p>
          <div className="text-center">
            <Button variant="primary" onClick={retryFetch}>
              Retry Fetching Recipes
            </Button>
          </div>
        </>
      )}
      {recipes.length === 0 ? (
        <p className="text-center">No trending recipes available.</p>
      ) : (
        <Row>
          {recipes.slice(0, 4).map(({ recipe }) => (
            <Col sm={6} md={3} key={recipe.uri}>
              <Card className="mb-4">
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.label}</Card.Title>
                  <Link
                    to={`/recipe/${recipe.uri}`} // Navigate to the recipe detail page
                    className="btn btn-primary"
                  >
                    View Recipe
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

export default Trends;
