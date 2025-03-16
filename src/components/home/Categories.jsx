import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/categories.css"; // Import the CSS file

const categories = [
  { name: 'Breakfast', image: 'https://images.pexels.com/photos/2635307/pexels-photo-2635307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/breakfast' },
  { name: 'Lunch', image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/lunch' },
  { name: 'Dinner', image: 'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/dinner' },
  { name: 'Desserts', image: 'https://media.istockphoto.com/id/1248260505/photo/overnight-oats-assortment-in-glass-jars.jpg?s=1024x1024&w=is&k=20&c=ZaTd172N7Ou77XMTGBOECRXzecxBK8ovFDv8qZs9ILI=', link: '/category/desserts' },
  { name: 'Vegetarian', image: 'https://media.istockphoto.com/id/1279347727/photo/gourmet-vegan-burger-served-with-grilled-asparagus-and-mango-chutney.jpg?s=1024x1024&w=is&k=20&c=YnkdznXiIAmRKuoiKTgIqiI_97Zm8sollT2hyXzGuFk=', link: '/category/vegetarian' },
  { name: 'Vegan', image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/vegan' },
  { name: 'Seafood', image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/seafood' },
  { name: 'Snack', image: 'https://images.pexels.com/photos/725993/pexels-photo-725993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', link: '/category/snack' },
];

const Categories = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="category-card">
              <Card.Img variant="top" src={category.image} alt={category.name} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Link to={category.link}>
                  <Button variant="primary" className="explore-button">Explore</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
