import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav, Card, Button } from "react-bootstrap";
import { useRecipeContext } from "../../context/recipeContext";
import { startFetchSingleRecipe } from "../../actions/recipeActions.js";
import Loader from "../../Loader/Loader.jsx";

const RecipeDetail = () => {
  const { id } = useParams();
  const { dispatch, recipe, recipeLoading } = useRecipeContext();
  const [activeTab, setActiveTab] = useState("ingredients");

  useEffect(() => {
    console.log("Fetching recipe with ID:", id);
    startFetchSingleRecipe(dispatch, id);
  }, [id, dispatch]);

  useEffect(() => {
    console.log("Fetched recipe data:", recipe);
  }, [recipe]);

  if (!recipe || !Array.isArray(recipe) || recipe.length === 0) {
    console.warn("Recipe data is missing or invalid:", recipe);
    return <Loader />;
  }

  const singleRecipe = {
    id: recipe[0]?.idMeal, 
    title: recipe[0]?.strMeal,
    category: recipe[0]?.strCategory,
    area: recipe[0]?.strArea,
    image: recipe[0]?.strMealThumb,
    instructions: recipe[0]?.strInstructions,
    source: recipe[0]?.strSource,
    tags: recipe[0]?.strTags,
    youtube: recipe[0]?.strYoutube,
    totalTime: recipe[0]?.strCookTime || "Varies",
    ingredientLines: Object.keys(recipe[0])
      .filter((key) => key.includes("strIngredient") && recipe[0][key])
      .map((key) => recipe[0][key]),
    calories: recipe[0]?.calories || 250,
    totalNutrients: {
      FAT: { quantity: recipe[0]?.fatContent || 10 },
      PROCNT: { quantity: recipe[0]?.proteinContent || 15 },
    },
    url: recipe[0]?.strSource,
  };

  return (
    <Container className="recipe-detail mt-4">
      <h2 className="text-center">{singleRecipe.title || "Recipe Not Available"}</h2>

      <Row className="recipe-header">
        {/* Recipe Image */}
        <Col md={6}>
          <img src={singleRecipe.image} alt={singleRecipe.title} className="recipe-image" />
        </Col>

        {/* Recipe Info */}
        <Col md={6} className="recipe-info">
          
          <h3>{singleRecipe.title}</h3>
          <p><strong>Cooker:</strong> {singleRecipe.source}</p>
          <div className="ratings">
            {[...Array(5)].map((_, i) => <FaStar key={i} className="star-icon" />)}
            <span>(120 reviews)</span>
          </div>
          <p><FaRegCommentDots /> 45 Comments</p>
          <p><strong>Cooking Time:</strong> {singleRecipe.totalTime} mins</p>
          <p><strong>Tips:</strong> {singleRecipe.ingredientLines[0] || "No tips available"}</p>
        </Col>
      </Row>

      {/* Tabs for Ingredients & Nutrition */}
      <Tab.Container activeKey={activeTab}>
        <Nav variant="tabs" className="mt-4">
          <Nav.Item>
            <Nav.Link eventKey="ingredients" onClick={() => setActiveTab("ingredients")}>
              Ingredients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nutrition" onClick={() => setActiveTab("nutrition")}>
              Nutrition
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="ingredients">
            <ul>
              {singleRecipe.ingredientLines.length ? (
                singleRecipe.ingredientLines.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <p>No ingredients available</p>
              )}
            </ul>
          </Tab.Pane>
          <Tab.Pane eventKey="nutrition">
            <p><strong>Calories:</strong> {singleRecipe.calories.toFixed(2)}</p>
            <p><strong>Fat:</strong> {singleRecipe.totalNutrients.FAT.quantity.toFixed(2)}g</p>
            <p><strong>Protein:</strong> {singleRecipe.totalNutrients.PROCNT.quantity.toFixed(2)}g</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Cooking Method */}
      <div className="method-section">
        <h3>Method</h3>
        <p>
          Follow the steps provided by the source:{" "}
          <a href={singleRecipe.url} target="_blank" rel="noopener noreferrer">
            View Full Recipe
          </a>
        </p>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>User Reviews</h3>
        <Card className="comment">
          <Card.Body>
            <strong>Jane Doe</strong>
            <p>This recipe is amazing! Highly recommend.</p>
          </Card.Body>
        </Card>
        <Card className="comment">
          <Card.Body>
            <strong>John Smith</strong>
            <p>Turned out great! Added extra seasoning for more flavor.</p>
          </Card.Body>
        </Card>
        <Button variant="primary" className="mt-3">Add Comment</Button>
      </div>
    </Container>
  );
};

export default RecipeDetail;

