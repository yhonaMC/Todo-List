import React, { useState } from "react";
import "./styleTodo.css";
import ModalTarea from "../Modal/Modal";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  const guardarTarea = (tareasObj) => {
    let list = taskList;
    list.push(tareasObj);
    setTaskList(list);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Crear nueva Tarea
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj) => (
          <li>{obj.Name}</li>
        ))}
      </div>
      <ModalTarea toggle={toggle} modal={modal} guardarTarea={guardarTarea} />
    </>
  );
};

export default TodoList;
