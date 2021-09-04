import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import FormTop from "../FormTop";
import FormBottom from "../FormBottom";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormWrapper = styled.div`
  height: 38rem;
  width: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 22rem;
    height: 34rem;
  }
`;

const StyledForm = styled(Form)`
  width: 25rem;
  height: 22rem;
  background-color: rgb(247, 242, 247);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  color: rgb(80, 32, 80);
  font-weight: 500;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 20rem;
    height: 19rem;
  }
`;

function LoginForm(props) {
  const { values, handleChange, handleSubmit, errors } = useForm(
    props.submitForm,
    validate,
    props.database
  );

  return (
    <FormWrapper>
      <FormTop heading="Welcome back!" subHeading="Please login to continue" />

      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </StyledForm>

      <FormBottom
        line="Don't have an account?"
        action="Sign up"
        onClick={props.signUp}
      />
    </FormWrapper>
  );
}

export default LoginForm;
