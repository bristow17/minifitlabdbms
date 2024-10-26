import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Ensure this is imported

function HomePage() {
  const navigate = useNavigate();
  const mysqlLogo = "https://media.licdn.com/dms/image/v2/C4E0DAQG7Nji17wbDUw/learning-public-crop_288_512/learning-public-crop_288_512/0/1654285678578?e=2147483647&v=beta&t=9xwUMMBxVG3rKdt8uGOD5osUvTO_OyRf0oOKbsLbScg";
  const mongodbLogo = "https://media.licdn.com/dms/image/C4E12AQGYxPO3xABkgg/article-cover_image-shrink_600_2000/0/1620710857655?e=2147483647&v=beta&t=6lmiZQdEbWld3w2WKi8P8fuEssAZBePpkWAo4ITTrbo";

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the DBMS Virtual Lab</h1>
      <p className="intro-text">Select an exercise to begin:</p>
      <div className="card-container"> {/* Use card-container for layout */}
        <Col md={4}>
          <Card className="mb-4 shadow card-hover">
            <Card.Img variant="top" src={mysqlLogo} alt="MySQL Logo" className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">MySQL Exercise</Card.Title>
              <Card.Text className="card-text">Test your knowledge on MySQL.</Card.Text>
              <Button className="start-button" onClick={() => navigate('/exercise/1')}>Start MySQL Exercise</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow card-hover">
            <Card.Img variant="top" src={mongodbLogo} alt="MongoDB Logo" className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">MongoDB Exercise</Card.Title>
              <Card.Text className="card-text">Challenge yourself with MongoDB concepts.</Card.Text>
              <Button className="start-button" onClick={() => navigate('/exercise/2')}>Start MongoDB Exercise</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default HomePage;
