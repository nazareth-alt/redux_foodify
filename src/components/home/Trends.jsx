import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation

const Trends = () => {
  const [recipes, setRecipes] = useState([]); // Holds the trending recipes
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(""); // Stores API errors

  const API_KEY = "70904b327c65457294273ec949fcb10f"; // Spoonacular API key

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=8&apiKey=${API_KEY}`
        );
        const data = await response.json();
        console.log("API Response:", data); // Log API response for debugging
  
        if (data.recipes && data.recipes.length > 0) {
          // Filter out recipes without images
          const filteredRecipes = data.recipes.filter((recipe) => recipe.image);
          setRecipes(filteredRecipes); // Store only recipes with images
        } else {
          setError("No trending recipes available."); // Handle no recipes found
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch trending recipes. Please try again later.");
      } finally {
        setLoading(false); // Stop loading spinner after fetch
      }
    };
  
    fetchRecipes();
  }, []); // Fetch data on component mount

  // Function to retry fetching recipes in case of an error
  const retryFetch = () => {
    setLoading(true);
    setError("");
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
          {recipes.map((recipe) => (
            <Col sm={6} md={3} key={recipe.id} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                {/* Handle missing images by providing a default */}
                <Card.Img
                  variant="top"
                  src={recipe.image || "https://via.placeholder.com/300"}
                  alt={recipe.title}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{recipe.title}</Card.Title>
                  {/* Pushes the button to the bottom */}
                  <div className="mt-auto">
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="btn btn-primary w-100"
                    >
                      View Recipe
                    </Link>
                  </div>
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
