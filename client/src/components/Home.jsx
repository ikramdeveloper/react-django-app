import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListUsers from "./ListUsers";
import NewUserModal from "./NewUserModal";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { users } = useAppContext();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <ListUsers users={users} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewUserModal create={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
