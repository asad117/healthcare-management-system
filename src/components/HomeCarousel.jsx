import React from "react";
import { Carousel, Button } from "react-bootstrap";
import CustomButton from "./Custom-Componenets/CustomButton";
import CommonPopUp from "./Custom-Componenets/CommonPopUp";
import { useState } from "react";
const HomeCarousel = () => {
  const [show, setShow] = useState(false);
  return (
    // <Carousel fade className="home-carousel">
    //   {/* <Carousel.Item interval={5000}>
    //     <img
    //       className="d-block w-100"
    //       src="../../../public/images/slide-1.png"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Welcome to MediConnect</h3>
    //       <p>Your health, our priority.</p>
    //       <Button variant="primary">Make An Appointment</Button>
    //     </Carousel.Caption>
    //   </Carousel.Item> */}
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="../../../public/images/slide-2.png"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Expert Care</h3>
    //       <p>Professional medical services you can trust.</p>
    //       <Button variant="primary">Make An Appointment</Button>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div className="header-image">
      <img
        src="../../../public/images/slide-1.png"
        alt="First slide"
        className="w-100"
      />
      <div className="header-image-appointment-container">
        {/* <Button variant="primary">Make An Appointment</Button>
         */}
        <CommonPopUp
          show={show}
          heading={"Successfull!"}
          content="Successfully done"
          handleClose={() => {
            setShow(false);
          }}
          onClick={() => {
            setShow(false);
          }}
          // submitBtn={"Save changes"}
        />
        <CustomButton
          primary={true}
          type="registered"
          name="Appointment"
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
