import React from 'react';
import HomeCarousel from "../components/HomeCarousel"
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
        <HomeCarousel />
        <Container>
        <h1>Welcome to MediConnect</h1>
        <p>This is a Healthcare Management System.</p>
        </Container>
      
    </div>
  );
};

export default Home;



