import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import NavbarUser from "../components/navbar/NavbarUser";

import Contact from "../components/complain/Contact";

import Chat from "../components/complain/Chat";

import { UserContext } from "../context/UserContext";

import { io } from "socket.io-client";

let socket;
export default function Complain() {
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  const title = "Complain admin";
  document.title = "DumbMerch | " + title;

  const [state] = useContext(UserContext);

  useEffect(() => {
    socket = io("http://localhost:4000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.id,
      },
    });

    socket.on("new message", () => {
      socket.emit("load messages", contact?.id);
    });

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });
    loadContact();
    loadMessages();

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadContact = () => {
    socket.emit("load admin contact");
    socket.on("admin contact", async (data) => {
      const dataContact = {
        ...data,
        message:
          messages.length > 0
            ? messages[messages.length - 1].message
            : "Click here to start message",
      };
      setContacts([dataContact]);
    });
  };

  const onClickContact = (data) => {
    setContact(data);
    socket.emit("load messages", data.id);
  };

  const loadMessages = (value) => {
    socket.on("messages", async (data) => {
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));

        setMessages(dataMessages);
      }
      const chatMessagesElm = document.getElementById("chat-messages");
      chatMessagesElm.scrollTop = chatMessagesElm?.scrollHeight;
    });
  };
  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };

      socket.emit("send message", data);
      e.target.value = "";
    }
  };

  return (
    <>
      <NavbarUser />
      <Container style={{ height: "89.5vh" }} >
        <Row>
          <Col
            md={3}
            style={{ height: "89.5vh" }}
            className="px-3 bg-dark text-white overflow-auto rounded-s rounded-end my-5"
          >
            <Contact
              dataContact={contacts}
              clickContact={onClickContact}
              contact={contact}
            />
          </Col>
          <Col md={9} style={{ maxHeight: "89.5vh" }} className="px-0 bg-secondary mt-5 rounded-s rounded-start">
            <Chat
              contact={contact}
              messages={messages}
              user={state.user}
              sendMessage={onSendMessage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );}
