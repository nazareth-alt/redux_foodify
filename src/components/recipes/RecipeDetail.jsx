import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import {
  FaStar,
  FaRegCommentDots,
  FaUserCircle,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import "../../styles/recipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const API_KEY = "70904b327c65457294273ec949fcb10f"; // Spoonacular API Key

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();

    // Set sample comments with like/dislike counters
    setComments([
      {
        name: "Alice",
        comment: "Loved this! The flavors were amazing.",
        rating: 5,
        likes: 0,
        dislikes: 0,
      },
      {
        name: "John",
        comment: "Great recipe! Added extra garlic for a kick.",
        rating: 4,
        likes: 0,
        dislikes: 0,
      },
      {
        name: "Sophia",
        comment: "Perfect for family dinner. Will make again!",
        rating: 5,
        likes: 0,
        dislikes: 0,
      },
      {
        name: "Mark",
        comment: "Turned out fantastic! Used fresh herbs.",
        rating: 4,
        likes: 0,
        dislikes: 0,
      },
      {
        name: "Emma",
        comment: "Easy to follow and delicious. Highly recommend!",
        rating: 5,
        likes: 0,
        dislikes: 0,
      },
    ]);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  // Function to handle likes
  const handleLike = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  // Function to handle dislikes
  const handleDislike = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, dislikes: comment.dislikes + 1 } : comment
      )
    );
  };

  return (
    <Container className="recipe-detail mt-4">
      <h2 className="text-center">{recipe.title || "Recipe Not Available"}</h2>

      {/* Recipe Header */}
      <Row className="recipe-header">
        {/* Recipe Image on the Left */}
        <Col xs={12} md={6} className="recipe-image-container">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        </Col>

        {/* Recipe Details on the Right */}
        <Col xs={12} md={6} className="recipe-info">
          <h3>{recipe.title}</h3>
          <p>
            <strong>Category:</strong> {recipe.dishTypes?.[0] || "General"}
          </p>
          <p>
            <strong>Cuisine:</strong> {recipe.cuisines?.[0] || "Unknown"}
          </p>

          {/* Ratings */}
          <div className="ratings">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span> (4.5/5)</span>
            {/* Comment icon with number of comments */}
            <span className="comment-count">
              <FaRegCommentDots className="comment-icon" /> {comments.length}{" "}
              Comments
            </span>
          </div>

          <p>
            <strong>Cooker’s Tip:</strong>{" "}
            {recipe.summary
              ? recipe.summary.replace(/<[^>]+>/g, "")
              : "Use fresh ingredients for better flavor!"}
          </p>
          <p>
            <strong>Cooking Time:</strong> {recipe.readyInMinutes} mins
          </p>
          <p>
            <FaRegCommentDots className="comment-icon" /> {comments.length}{" "}
            Comments
          </p>
        </Col>
      </Row>

      {/* Ingredients & Nutrition Tabs */}
      <Tab.Container defaultActiveKey="ingredients">
        <Nav variant="tabs" className="mt-4">
          <Nav.Item>
            <Nav.Link eventKey="ingredients">Ingredients</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nutrition">Nutrition</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="ingredients">
            <ul>
              {recipe.extendedIngredients?.map((ing, index) => (
                <li key={index}>{ing.original}</li>
              ))}
            </ul>
          </Tab.Pane>

          <Tab.Pane eventKey="nutrition">
            <p>
              <strong>Calories:</strong>{" "}
              {recipe.nutrition?.nutrients?.find((n) => n.name === "Calories")
                ?.amount || "N/A"}{" "}
              kcal
            </p>
            <p>
              <strong>Protein:</strong>{" "}
              {recipe.nutrition?.nutrients?.find((n) => n.name === "Protein")
                ?.amount || "N/A"}{" "}
              g
            </p>
            <p>
              <strong>Carbohydrates:</strong>{" "}
              {recipe.nutrition?.nutrients?.find(
                (n) => n.name === "Carbohydrates"
              )?.amount || "N/A"}{" "}
              g
            </p>
            <p>
              <strong>Fats:</strong>{" "}
              {recipe.nutrition?.nutrients?.find((n) => n.name === "Fat")
                ?.amount || "N/A"}{" "}
              g
            </p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Instructions Section */}
      <div className="method-section mt-4">
        <h4>Instructions</h4>
        <ol>
          {recipe.analyzedInstructions?.[0]?.steps.length > 0 ? (
            recipe.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))
          ) : (
            <p>No instructions available.</p>
          )}
        </ol>
      </div>

      {/* Comments Section */}
      <div className="comments-section mt-4">
        <h4>Comments</h4>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <FaUserCircle className="user-icon" />
            <div>
              <strong>{comment.name}</strong>
              <p>{comment.comment}</p>
              <div className="ratings">
                {[...Array(comment.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              {/* Like & Dislike Buttons */}
              <div className="comment-actions">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleLike(index)}
                >
                  <FaThumbsUp /> {comment.likes}
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => handleDislike(index)}
                >
                  <FaThumbsDown /> {comment.dislikes}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RecipeDetail;
