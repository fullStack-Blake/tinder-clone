import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat/:name" exact>
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
