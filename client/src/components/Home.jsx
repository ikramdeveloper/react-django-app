import { Col, Container, Row } from "reactstrap";
import { useAppContext } from "../context/AppContext";
import ListUsers from "./ListUsers";
import NewUserModal from "./NewUserModal";

const Home = () => {
  const { users } = useAppContext();

  return (
    <Container>
      <Row className="pt-4">
        <Col className="text-end">
          <NewUserModal create={true} />
        </Col>
      </Row>
      <Row className="mt-4 pt-4 pb-2 px-2 bg-white rounded">
        <Col>
          <ListUsers users={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
