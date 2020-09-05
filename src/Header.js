import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f9f9f9;
  align-items: center;
`;
const Logo = styled.img.attrs({
  src: "https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png",
  alt: "tinder logo"
})`
  height: 40px;
  object-fit: contain;
`;

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <Container>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <Logo />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </Container>
  );
};

export default Header;
