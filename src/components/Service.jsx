import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import webapps from "../assets/webapps.png";
import monitor from "../assets/monitor.png";
import backend from "../assets/monitor.png"

const Section = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    height: 140vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:0;
   
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const ServicesWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin-top:1vh;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  color: black;
  margin-top:100px;
  @media only screen and (max-width: 768px) {
    font-size:40px;
    text-align: center;
  }
`;
const services = [
  {
    title: "Frontend Services",
    image: webapps,
    iconBg: "#E6DEDD",
    points: [
      "Responsive and user-friendly website design using HTML and CSS.",
      "Implementing interactive and dynamic features with JavaScript.",
      "Creating modern and engaging user interfaces with ReactJS.",
      "Developing cross-platform mobile applications with React Native.",
    ],
  },
  {
    title: "Backend Services",
    image: backend,
    iconBg: "#da4ea2",
    points: [
      "Developing scalable server-side applications using Node.js.",
      "Designing and implementing RESTful APIs for smooth communication between frontend and backend.",
      "Implementing data validation and security measures.",
      "Conducting thorough testing and debugging to ensure a robust backend.",
    ],
  },
  {
    title: "Database Services",
    image: monitor,
    iconBg: "#da4ea2",
    points: [
      "Setting up and configuring MongoDB or MySQL databases.",
      "Implementing CRUD operations for data manipulation.",
    ],
  },
];

const ServiceCard = ({ index, title, image, points }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{width:"250px",margin: "10px"}}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: index * 0.5, duration: 0.75 }}
        style={{
          width: "100%",
          padding: "1px",
          borderRadius: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            background: `linear-gradient(to bottom right, #00ff00, #ff00ff)`,
            borderRadius: "20px",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
          <h3
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </h3>
          <button onClick={handleLearnMore} style={{ marginTop: "10px", padding: "10px 20px" }}>
            Learn More
          </button>
        </div>
      </motion.div>
      {modalOpen && (
        <Modal closeModal={closeModal} title={title} points={points} image={image} />
      )}
    </div>
  );
};
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 999; 
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: black;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ModalPoints = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;
const ModalButton = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 5px;
  width:40px;
  margin-top:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Modal = ({ closeModal, title, points, image }) => (
  <ModalOverlay>
    <ModalWrapper>
    <ModalContent>
      <div style={{display:"flex"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <img
        src={image}
        alt={title}
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <ModalTitle>{title}</ModalTitle>
      </div>      
      </div>
      <ModalPoints>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ModalPoints>
      <ModalButton onClick={closeModal}>Close</ModalButton>
    </ModalContent>
  </ModalWrapper></ModalOverlay>
  
);

const Services = () => {
  return (
    <Section>
      <Container> 
        <Title>Services</Title>
        <Right>
          <ServicesWrapper>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </ServicesWrapper>
        </Right>
      </Container>
    </Section>
  );
};

export default Services;
