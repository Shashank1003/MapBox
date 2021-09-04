import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import FormTop from "../FormTop";
import FormBottom from "../FormBottom";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormWrapper = styled.div`
  height: 45rem;
  width: 35rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 22rem;
    height: 43rem;
  }
`;

const StyledForm = styled(Form)`
  width: 30rem;
  height: 35rem;
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
    height: 30rem;
  }
`;

function SignUpForm(props) {
  const { values, handleChange, handleSubmit, errors } = useForm(
    props.submitForm,
    validate
  );

  return (
    <FormWrapper>
      <FormTop heading="Welcome!" subHeading="Please register to continue" />

      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            value={values.username}
            onChange={handleChange}
            isInvalid={errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
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
          <Form.Text className="text-muted">
            should contain at least 6 characters
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            isInvalid={errors.password2}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password2}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            props.onClick(values);
          }}
        >
          Sign up
        </Button>
      </StyledForm>

      <FormBottom
        line="Already have an account?"
        action="Login"
        onClick={props.login}
      />
    </FormWrapper>
  );
}

export default SignUpForm;
