import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const Container = styled.div``;
const Chat = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const Date = styled.div`
  text-align: center;
  padding: 20px;
  color: gray;
`;
const Message = styled.div`
  margin-left: 10px;
  background-color: lightgray;
  padding: 15px;
  border-radius: 20px;
`;
const MyMessage = styled.div`
  margin-left: auto;
  background-color: #29b3cd;
  padding: 15px;
  border-radius: 20px;
  color: white;
`;
const Form = styled.form`
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
`;
const Button = styled.button`
  border: none;
  margin: 0px 20px;
  background-color: white;
  font-weight: bolder;
  color: gray;
`;

function ChatScreen() {
  const [input, SetInput] = useState("");
  const [messages, SetMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://previews.123rf.com/images/edwardderule/edwardderule1811/edwardderule181100005/113375035-young-golden-haired-pretty-model-tenderly-looking-ot-viewers-portrait-of-gorgeous-young-woman-with-e.jpg",
      message: "whats up love"
    },
    {
      name: "Ellen",
      image:
        "https://previews.123rf.com/images/edwardderule/edwardderule1811/edwardderule181100005/113375035-young-golden-haired-pretty-model-tenderly-looking-ot-viewers-portrait-of-gorgeous-young-woman-with-e.jpg",
      message: "Hows it going"
    },
    {
      message: "Hi Ellen!"
    }
  ]);

  const handleSend = e => {
    e.preventDefault();

    SetMessages([...messages, { message: input }]);
    SetInput("");
  };

  return (
    <>
      <Date>YOU MATCHED WITH ELLEN ON 10/08/20</Date>
      <Container>
        {messages.map(message =>
          message.name ? (
            <Chat>
              <Avatar alt={message.name} src={message.image} />
              <Message>{message.message}</Message>
            </Chat>
          ) : (
            <Chat>
              <MyMessage>{message.message}</MyMessage>
            </Chat>
          )
        )}
        <Form>
          <Input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={e => SetInput(e.target.value)}
          />
          <Button onClick={handleSend} type="submit">
            SEND
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ChatScreen;
