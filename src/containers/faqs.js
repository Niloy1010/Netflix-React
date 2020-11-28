import faqsData from "../fixtures/faqs.json";
import React from "react";
import { Accordion } from "../components";
import { OptForm } from "../components";

export const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently asked question</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.key}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it out</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Try it out? Enter or create email address</OptForm.Text>
      </OptForm>
    </Accordion>
  );
};
