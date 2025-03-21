import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "../../styles/foodifyPage.css";
import { Link } from "react-router-dom";

const API_KEY = "70904b327c65457294273ec949fcb10f"; // actual API key
const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`;

const AboutPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="foodify-page">
      {/* Header */}
      <header className="foodify-header">
        <Container>
          <h1 className="text-center">Welcome to Foodify</h1>
          <p className="text-center">
            Explore diverse food recipes for every occasion.
          </p>
        </Container>
      </header>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col md={6} className="hero-text">
              <h2>Foodify: The Ultimate Recipe Destination</h2>
              <p>
                From quick snacks to gourmet meals, Foodify offers a variety of
                recipes that suit every taste and occasion.
              </p>
              <Link to="/recipes">
                <Button variant="primary">Explore Recipes</Button>
              </Link>
            </Col>
            <Col md={6} className="hero-image">
              <img
                src="https://images.pexels.com/photos/21856007/pexels-photo-21856007/free-photo-of-woman-hand-over-food-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Delicious Food"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Owner Section */}
      <section className="owner-section">
        <Container>
          <h2 className="text-center mb-4">Meet the Founder</h2>
          <Row className="align-items-center">
            <Col md={4} className="owner-image text-center">
              <img
                src="https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/118320705_2694325970808405_6100746746835370663_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaI6-GT5RTi74UEmWrlj3QD-YmSGBMN9kP5iZIYEw32a3Hq7TiPPlpl3mx1euEYRBrnpld0S9iexl1R2dFgsS4&_nc_ohc=BBr9vo6PddoQ7kNvgFIS4Ke&_nc_oc=AdiTaZWMcKi65WuGJVEaw5nP7_FCFyN0uIgzxCc6F8l2YmYbWOCnJxZmJTY-HYaOJ05yz4uLR1zZlhBC9vj4mwxn&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=iOmPy6kYVPKu0YVokCsyZw&oh=00_AYHtb9aOqVhQOzB_qNbUCy0hQCI6ihmuSWU3VWdNLcMn6A&oe=67FE1083"
                alt="Nazareth Hlana - Founder"
                className="img-fluid rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </Col>
            <Col md={8} className="owner-info">
              <h3>Nazareth Hlana - Founder of Foodify</h3>
              <p>
                Nazareth Hlana, a self-taught chef with a passion for creativity
                in the kitchen, founded Foodify in 2024. Growing up, she was
                inspired by her mother’s homemade meals, which sparked her love
                for cooking. Her journey began in her home kitchen,
                experimenting with flavors and techniques, eventually leading
                her to develop Foodify as a platform to share her exciting
                recipes with the world.
              </p>

              <h4>📅 Company Inception</h4>
              <p>
                Foodify was founded in 2024 to provide easy, creative, and
                delicious recipes to individuals globally. The company focuses
                on inspiring home cooks with practical yet exciting meal ideas.
              </p>

              <h4>🌍 Our Mission</h4>
              <p>
                To make cooking enjoyable, accessible, and inspiring,
                encouraging individuals to experiment with simple ingredients
                and make delicious meals.
              </p>

              <h4>🚀 Our Vision</h4>
              <p>
                To become the leading online platform for recipe discovery, food
                education, and home cooking inspiration, helping individuals
                embrace cooking as an enjoyable and rewarding activity.
              </p>

              <h4>🎯 Our Goals</h4>
              <ul>
                <li>
                  Expand Foodify’s reach to a global audience, sharing the joy
                  of cooking worldwide.
                </li>
                <li>
                  Provide easy-to-follow, tested recipes for all skill levels,
                  from beginner to expert.
                </li>
                <li>
                  Collaborate with local farmers and suppliers to promote fresh,
                  sustainable ingredients.
                </li>
                <li>
                  Launch an interactive mobile app to make accessing recipes and
                  cooking tutorials seamless for users.
                </li>
              </ul>

              <h4>🏢 Foodify Branches</h4>
              <p>
                Foodify operates in Johannesburg, Cape Town, and Durban, with
                plans to expand internationally and reach even more passionate
                home cooks around the world.
              </p>

              <h4>💬 Famous Quotes</h4>
              <blockquote className="fst-italic">
                "A recipe has no soul. You, as the cook, must bring soul to the
                recipe." – Thomas Keller
              </blockquote>
              <blockquote className="fst-italic">
                "Good food is the foundation of genuine happiness." – Auguste
                Escoffier
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Video Section */}
      <section className="video-section">
        <Container>
          <h2 className="text-center">Watch Our Recipes in Action</h2>
          <Row>
            <Col md={6}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/KG44hHHugqk"
                title="The Best Chicken Recipe You&#39;ll Ever Make!!! You will be addicted!!! 🔥😲| 2 RECIPES"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Col>
            <Col md={6}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/rm_9cPXrv4A"
                title="Food Recipe Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recipes Section */}
      <section className="recipes-section">
        <Container>
          <h2 className="text-center">Diverse Food Recipes</h2>
          <Row>
            {recipes && recipes.length > 0 ? (
              recipes.map((recipe) => (
                <Col md={4} className="mb-20" key={recipe.id}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                        {recipe.summary.replace(/<[^>]*>/g, "").slice(0, 100)}
                        ...
                      </Card.Text>
                      <Link to={`/recipe/${recipe.id}`}>
                        <Button variant="outline-primary">View Recipe</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="text-center">
                <Spinner animation="border" />
                <p>Loading recipes...</p>
              </div>
            )}
          </Row>
        </Container>
      </section>

      {/* Stakeholders Section */}
      <section className="stakeholders-section">
        <Container>
          <h2 className="text-center mb-4">Our Trusted Stakeholders</h2>
          <Row>
            <Col md={4} className="mb-20">
              <Card className="h-100 stakeholder-card">
                <Card.Img
                  variant="top"
                  src="https://photos.peopleimages.com/picture/202302/2773109-little-girl-farm-and-agriculture-in-green-harvest-for-sustainability-organic-and-production-in-nature.-portrait-of-child-holding-crops-in-sustainable-farming-in-the-countryside-for-natural-resource-fit_400_400.jpg"
                  className="stakeholder-img"
                />
                <Card.Body>
                  <Card.Title>Green Harvest Farms</Card.Title>
                  <Card.Text>
                    Specializing in organic and pesticide-free vegetables
                    straight from local farms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-20">
              <Card className="h-100 stakeholder-card">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG2U1qk8YpdPa3dLj5znrMbxWq3kAzbXBBA&s"
                  className="stakeholder-img"
                />
                <Card.Body>
                  <Card.Title>Exotic Spice Traders</Card.Title>
                  <Card.Text>
                    Importing the finest spices and herbs from around the world
                    to enhance every dish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-20">
              <Card className="h-100 stakeholder-card">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal9EL59iPSfZ05l4OVr2gTZ21pG9FAtLkVQ&s"
                  className="stakeholder-img"
                />
                <Card.Body>
                  <Card.Title>Golden Crust Bakery</Card.Title>
                  <Card.Text>
                    Known for artisan bread, pastries, and gluten-free options
                    baked fresh daily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
