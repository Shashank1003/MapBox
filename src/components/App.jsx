import { useState } from "react";
import LoginForm from "./LogIn/LoginForm";
import SignUpForm from "./SignUp/SignUpForm";
import Map from "./Map";
import styled from "styled-components";
import useGeoLocation from "../useGeoLocation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(80, 32, 80);
`;

function App() {
  const [toggle, setToggle] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const location = useGeoLocation();

  // For loop is used to iterate over database to check if user is registered.
  // To prevent {database.length === 0}, a dummy data is provided.
  const [myDatabase, setMyDatabase] = useState([
    {
      username: "ABC123",
      email: "abc@xyz.com",
      password: "123456",
      password2: "123456",
    },
  ]);

  const loginSignUpToggle = () => {
    setToggle(!toggle);
  };

  const submitFormHandler = () => {
    setSubmitted(true);
  };

  const testFxn = (values) => {
    setMyDatabase((preVal) => {
      return [...preVal, values];
    });
    return console.log(myDatabase);
  };

  const logoutHandler = () => {
    setSubmitted(false);
  };

  return (
    <Container>
      {!submitted ? (
        <div>
          {toggle ? (
            <LoginForm
              signUp={loginSignUpToggle}
              submitForm={submitFormHandler}
              database={myDatabase}
            />
          ) : (
            <SignUpForm
              login={loginSignUpToggle}
              submitForm={submitFormHandler}
              onClick={testFxn}
            />
          )}
        </div>
      ) : (
        <div>
          {location.loaded ? (
            <Map
              lat={location.coordinates.lat}
              lng={location.coordinates.lng}
              onLogout={logoutHandler}
            />
          ) : (
            "Location data not available"
          )}
        </div>
      )}
    </Container>
  );
}

export default App;
