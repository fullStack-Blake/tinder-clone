import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import database from "./firebase";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
const Card = styled.div`
  background-image: url(${props => props.picture});
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  & > h3 {
    position: absolute;
    bottom: 15px;
    color: white;
  }
`;
const Cards = styled(TinderCard)`
  position: absolute;
`;

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      {people.map(person => (
        <Cards key={person.name} preventSwipe={["up", "down"]}>
          <Card picture={person.url}>
            <h3>{person.name}</h3>
          </Card>
        </Cards>
      ))}
    </Container>
  );
};

export default TinderCards;
