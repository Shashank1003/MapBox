import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  text-align: left;
  align-self: flex-start;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const LoginSignUp = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: rgb(80, 32, 80);
  margin-bottom: 0rem;

  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
`;

const Greeting = styled.p`
  font-weight: 400;
  color: gray;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

function FormTop(props) {
  return (
    <TextBox>
      <LoginSignUp>{props.heading}</LoginSignUp>

      <Greeting>{props.subHeading}</Greeting>
    </TextBox>
  );
}

export default FormTop;
