import { useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";
import axios from "axios";
import { USERS_API_URL } from "../constants";
import { useAppContext } from "../context/AppContext";

const ConfirmRemovalModal = (props) => {
  const [isModal, setIsModal] = useState(false);
  const { getUsers } = useAppContext();

  const toggle = () => setIsModal((prev) => !prev);

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(`${USERS_API_URL}/${id}`);
      if ((resp.statusText = "OK")) {
        toggle();
        getUsers();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button color="danger" onClick={() => toggle()}>
        Remove
      </Button>
      <Modal isOpen={isModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Do you really want to delete the user?
        </ModalHeader>
        <ModalFooter>
          <Button type="button" onClick={() => toggle()}>
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={() => handleDelete(props.userId)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ConfirmRemovalModal;
