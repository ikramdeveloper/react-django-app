import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewUserForm from "./NewUserForm";

const NewUserModal = (props) => {
  const [isModal, setIsModal] = useState(false);

  const toggle = () => setIsModal((prev) => !prev);

  return (
    <>
      {props.create ? (
        <Button
          className="float-right"
          color="primary"
          onClick={toggle}
          style={{ minWidth: "200px" }}
        >
          Create
        </Button>
      ) : (
        <Button onClick={toggle}>Edit</Button>
      )}
      <Modal isOpen={isModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {props.create ? "Create User" : "Edit User"}
        </ModalHeader>
        <ModalBody>
          <NewUserForm user={props.user} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default NewUserModal;
