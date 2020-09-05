import React from "react";
import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const Container = styled.div`
  position: fixed;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Icon = styled(IconButton)`
  color: ${props => props.color} !important;
  background-color: white;
  box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
`;

const SwipeButtons = () => {
  return (
    <Container>
      <Icon color="#f5b748">
        <ReplayIcon fontSize="large" />
      </Icon>
      <Icon color="#ec5e6f">
        <CloseIcon fontSize="large" />
      </Icon>
      <Icon color="#62b4f9">
        <StarRateIcon fontSize="large" />
      </Icon>
      <Icon color="#76e2b3">
        <FavoriteIcon fontSize="large" />
      </Icon>
      <Icon color="#915dd1">
        <FlashOnIcon fontSize="large" />
      </Icon>
    </Container>
  );
};

export default SwipeButtons;
