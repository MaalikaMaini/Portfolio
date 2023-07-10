import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5vw;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1000px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  height:77vh;
  max-width: 800px;
  margin-top: 16vh; 
  margin-bottom: 20px; 
 
 
  @media only screen and (max-width: 1000px) {
    flex: 1;
    width: 100%;
    margin-top: 1px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-weight: 200px;
  color:#da4ea2;
`;

const Form = styled.form`
  max-width: 500px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  color: black;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  color: black;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationMessage, setValidationMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    // Perform validation checks
    if (!name || !email || !message) {
      // If any field is empty, show an error message
      setValidationMessage("Please fill in all fields");
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationMessage("Please enter a valid email address");
      return;
    }

    // Proceed with form submission
    setLoading(true);

    emailjs
      .sendForm(
        "service_y9dr5g8",
        "template_ufaqxzh",
        ref.current,
        "h4lw7LNArGfLf7EK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
        <Title>Contact</Title>
        <Input placeholder="Name" name="name" onChange={handleChange} />
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <TextArea
          placeholder="Write your message"
          name="message"
          rows={10}
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
        {success && (
          <div>
            Your message has been sent. We'll get back to you soon :)
          </div>
        )}
        {validationMessage && (
          <div style={{ color: "red", marginTop: "10px" }}>
            {validationMessage}
          </div>
        )}
      </Form>
      </Left>
      <Right>
      <ComposableMap

projection="geoAzimuthalEqualArea"

projectionConfig={{

rotate: [-82.0, -25.0, 0],

center: [-3, -3],

scale: 900

}}
className={`mt-1 bg-black-100 rounded-[20px]`}
style={{width: "100%", height: "100%"}}

>

<Geographies

geography="/features.json"

fill="#da4ea2"

stroke="#FFFFFF"

strokeWidth={0.5}

>

{({geographies}) =>

geographies.map((geo) => (

<Geography key={geo.rsmKey} geography={geo}/>

))

}

</Geographies>

<Annotation

subject={[77.2090, 28.6139]}

dx={-30}

dy={-30}

connectorProps={{

stroke: "#FFFFFF",

strokeWidth: 2,

strokeLinecap: "round"

}}

>

<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">

{"Delhi"}

</text>

</Annotation>


</ComposableMap>
 
      </Right>
        </Container>
      
      </Section>
   
      
   
  );
};

export default Contact;
