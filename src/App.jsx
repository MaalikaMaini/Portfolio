import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Service";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Navbar = styled.nav`
background: ${(props) => (props.open ? "#da4ea2" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: ${(props) => (props.open ? "auto" : "60px")};
    overflow: hidden;
    width: ${(props) => (props.open ? "200px" : "60px")};
    transition: width 0.3s ease-in-out;
  }
`;

const NavItem = styled.a`
  color: black;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "block" : "none")};
    padding: 10px 20px;
    width: 100%;
  }
`;

const SidebarToggle = styled.div`
  color:#da4ea2 ;
  font-size: 20px;
  cursor: pointer;
  display: none;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const App = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false);
    }
  };

  return (
    <Container>
      <Navbar open={navbarOpen}>
        <SidebarToggle onClick={toggleNavbar}>
          {navbarOpen ? <>&#x2715;</> : <>&#x2630;</>}
        </SidebarToggle>
        <NavItem onClick={() => scrollToComponent("home")} open={navbarOpen}>
          Home
        </NavItem>
        <div style={{marginRight:"10px"}}><NavItem onClick={() => scrollToComponent("about")} open={navbarOpen}>
          Introduction
        </NavItem>
        <NavItem onClick={() => scrollToComponent("services")} open={navbarOpen}>
          Services
        </NavItem>
        <NavItem onClick={() => scrollToComponent("experience")} open={navbarOpen}>
          Experience
        </NavItem>
        <NavItem onClick={() => scrollToComponent("contact")} open={navbarOpen}>
          Contact
        </NavItem>
        </div>
        
        
      </Navbar>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="about">
        <Services/>
      </section>
      <section id="experience">
       <Experience/>
      </section>
      <section id="contact">
       <Contact/>
      </section>
      <section id="contact">
       
      </section>
    </Container>
  );
};

export default App;
