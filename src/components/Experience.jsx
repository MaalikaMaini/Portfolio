import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`;

const Title = styled.h1`
  color: black;
  font-weight: 900px;
  font-size: 30px;

  @media (min-width: 640px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const Desc = styled.p`
  color:  #330066;
  margin-top: 0.75rem;
  font-size: 1rem;
  max-width: 48rem;
  line-height: 1.875;
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding:10px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }

  @media (min-width: 640px) and (min-width: 1024px) and (isDesktop: true) {
    width: 360px;
  }
`;
const Card = styled.div`
  width: 100%;
  max-width: 600px;
  height: 250px;
  
  background-color:#da4ea2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(3deg);
  }
`;

const experience = [
  {
    description:
      ' As a Web Developer Intern at Exposy Data Labs, I had the opportunity to work on web development projects and gain practical experience in front-end technologies.Gained hands-on experience in implementing responsive designs and ensuring cross-browser compatibility and with that Improved my proficiency in HTML, CSS, and JavaScript through practical application and mentorship from senior developers.',
  },
  {
    description:
      'As a Software Developer Intern at Sunframes Software, I had the opportunity to work on projects involving React Native and ReactJS, gaining practical experience in these technologies.Assisted in developing mobile applications using React Native, ensuring cross-platform compatibility.',
  },
];

const Experience = () => {
  return (
    <Section>
      <div>
        
        <Title>Experience</Title>
        <Desc>
        During my internship at Exposy Data Labs and Sunframes Software, I gained valuable hands-on experience working with front-end technologies such as HTML, CSS, JavaScript, React Native, and ReactJS. These experiences allowed me to enhance my technical skills, collaborate effectively in a team setting, and apply best practices in web and mobile application development.
        </Desc>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%',height:'500' }}>
          {experience.map((experience, index) => (
            <Container key={index}>
              <Card>
                <p style={{color:'#330066'}}>{experience.description}</p>
              </Card>
             
            </Container>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
