import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {postCreateUser} from "../services/UserService";
import { ToastContainer, toast } from 'react-toastify';
const ModalAddNew = (props) => {
    const {show, handleClose, handleUpdateTable} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleSaveUser = async() => {
        let res = await postCreateUser(name, job);
        if(res && res.id) {
            handleClose();
            setName("");
            setJob("");
            toast.success("A User is created succeed!");
            handleUpdateTable({first_name: name, id: res.id});
            //success
        } else {
            toast.error("An error");
            //error
        }
    }
    return (
        <>
        <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add-new">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="md-3">
                        <label className="form-label">Job</label>
                        <input
                            type="text"
                            className="form-control"
                            value={job}
                            onChange={(event) => setJob(event.target.value)}
                            />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default ModalAddNew;