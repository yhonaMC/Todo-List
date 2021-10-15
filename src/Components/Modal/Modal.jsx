import React, { useState } from "react";
import "./modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalTarea = ({ modal, toggle, guardarTarea }) => {
  const [taskname, setTaskname] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    if (name === "nombre") {
      setTaskname(value);
    } else {
      setDescripcion(value);
    }
  };

  const handleguardar = () => {
    let taskObj = {};
    taskObj["Name"] = taskname;
    taskObj["Descripcion"] = descripcion;
    taskObj["Homework"] = true;
    guardarTarea(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Crear Nueva Tarea</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <input
                name="nombre"
                type="text"
                className="form-control"
                placeholder="Nombre de la tarea"
                value={taskname}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="textarea"
                rows="5"
                className="form-control size mt-2"
                placeholder="Descripcion"
                value={descripcion}
                onChange={handleOnchange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleguardar} className="color">
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalTarea;
