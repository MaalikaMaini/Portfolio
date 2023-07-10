import React, { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1440px) {
    width: 100%;
    max-width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 960px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 992px) {
    max-width: 720px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1440px) {
    margin-top:10vh;
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 992px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    justify-content: center;
    margin-top:10vh;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  animation: colorChange 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size:24px;
  }

  @keyframes colorChange {
    0% {
      color: pink;
    }
     50% {
      color: #3d1c56;
    }
    75% {
      color: #da4ea2 ;
    }
    100% {
      color: white;
    }
  }
`;

const Resume = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  max-width: 800px;

 
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    margin-bottom:20vh;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
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
const Home = () => {
  const materialRef = useRef(null);

  useEffect(() => {
    const material = materialRef.current;
    let animationFrameId;

    const animate = () => {
      if (material) {
        const time = Date.now() * 0.001;
        const color = Math.sin(time) > 0 ? "#FFC0CB" : "#da4ea2";
        material.color.set(color);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
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
  return (
    <Section>
      <Container>
        <Left>
          <Title>It's just Simply Create.Make.Deliever</Title>
          <Resume>
            <Line src="./src/assets/line.png" />
            <Subtitle>Download the </Subtitle>
            <Button onClick={handleDownload}> Resume </Button>
          </Resume>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  ref={materialRef}
                  attach="material"
                  distort={0.5}
                  speed={2}
                  color="#FFC0CB"
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./src/assets/image.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Home;
