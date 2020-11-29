import React, { useState, useContext } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import "./home.css";

import * as ROUTES from "../constants/routes";
const Home = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword("guest@guest.com", "guest123")
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Button onClick={handleSignin}>
              Try it out as Guest
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text></OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
