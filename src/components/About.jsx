import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import htmllogo from "../assets/htmllogo.png"
import csslogo from "../assets/csslogo.png"
import reactlogo from "../assets/reactlogo.png"
import nodejslogo from "../assets/nodejslogo.png"
import javascriptlogo from "../assets/javascriptlogo.png"
import mongodblogo from "../assets/mongodblogo.png"
import mysqllogo from "../assets/mysqllogo.png"
const Section = styled.div`
  height: 100vh;
  display:flex;
  flex-direction:row;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin-top:20vh;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    padding-right: 0;
    margin-top:10vh;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    flex: 1;
    width: 100%;
  }
`;
const ServicesWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Display as a single column on smaller screens */
  }
`;



const Title = styled.h1`
  font-size: 74px;
  color: black;
  margin-top:10px;
  @media only screen and (max-width: 768px) {
    font-size:40px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 5px;
  width:100px;
  height:20px;
  margin-top:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const frontend = [
  {
    image: htmllogo,
  },
  {
    image: csslogo,
  },
  {
    image: reactlogo,
  },
  
];
const backend = [
  {
    backendimage: nodejslogo,
  },
  {
    backendimage: javascriptlogo,
  },
];
const database = [
  {
    databaseimage: mongodblogo,
  },
  {
    databaseimage: mysqllogo,
  },
 
  
];

const Frontend = ({ index, title, image }) => (
  <div style={{ width: "100%",display:'flex',justifyContent:'center' }}>
      <div>
        <img src={image} alt="web-development" style={{ width: "10vw", height: "10vh", objectFit: "contain" }} />
      </div>
  </div>
);
const Backend = ({ index, title, backendimage }) => (
  <div style={{ width: "100%",display:'flex',justifyContent:'center' }}>
      <div>
        <img src={backendimage} alt="Backend" style={{ width: "10vw", height: "10vh", objectFit: "contain" }} />
      </div>
  </div>
);
const Database = ({ index, title, databaseimage }) => (
  <div style={{ width: "100%",display:'flex',justifyContent:'center' }}>
      <div>
        <img src={databaseimage} alt="Database" style={{ width: "10vw", height: "10vh", objectFit: "contain" }} />
      </div>
  </div>
);
const handleDownload = () => {
  const pdfURL = '../src/assets/MaalikaMainiResume.pdf';
  const link = document.createElement('a');
  link.href = pdfURL;
  link.target = '_blank'; // Open the PDF in a new tab
  link.download = 'MaalikaMainiResume.pdf';

  // Programmatically trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const About = () => {
  return (
    <Section>
     <Container>
      <Left><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "24px", color: "#333", marginTop: "10px" }}>Introduction</h2>
          <Title>Overview</Title>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginTop: "20px", fontSize: "14px", color: "#888", maxWidth: "500px", lineHeight: "24px" }}
        >
          Welcome to my portfolio! I am a passionate and skilled Full Stack Developer with expertise in HTML, CSS, ReactJS, React Native, JavaScript, Node.js, MongoDB, and MySQL. Throughout my career, I have been dedicated to creating seamless and user-friendly web and mobile applications. With a strong foundation in front-end development and a deep understanding of server-side programming, I am capable of delivering end-to-end solutions that meet the needs of modern businesses.

My journey in the world of development began with HTML and CSS, where I honed my skills in creating visually appealing and responsive user interfaces. As I delved deeper into the realm of web development, I embraced JavaScript and became proficient in harnessing its power to build interactive and dynamic web applications.
        </motion.p>
        
    <Button onClick={handleDownload}> Resume </Button>
       
        </Left>
        <Right>
          <div><ServicesWrapper>
            {frontend.map((frontend, index) => (
              <Frontend key={frontend.title} index={index} {...frontend} />
            ))}
          </ServicesWrapper></div>
        <div><ServicesWrapper>
            {backend.map((backend, index) => (
              <Backend key={backend.title} index={index} {...backend} />
            ))}
          </ServicesWrapper></div>
          <div><ServicesWrapper>
            {database.map((database, index) => (
              <Database key={database.title} index={index} {...database} />
            ))}
          </ServicesWrapper></div>
          
        </Right>
        </Container>
        
      
    </Section>
  );
};

export default About;
