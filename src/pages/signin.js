import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha. No spamming :)
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
