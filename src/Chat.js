import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const ChatLink = styled(Link)`
  color: inherit;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  border-bottom: 1px solid #fafafa;
`;
const Detail = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Name = styled.h2``;
const Message = styled.p`
  color: gray;
`;
const Time = styled.div`
  color: lightgray;
`;

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <ChatLink to={`/chat/${name}`}>
      <Container>
        <Avatar alt={name} src={profilePic} />
        <Detail>
          <Name>{name}</Name>
          <Message>{message}</Message>
        </Detail>
        <Time>{timestamp}</Time>
      </Container>
    </ChatLink>
  );
};

export default Chat;
