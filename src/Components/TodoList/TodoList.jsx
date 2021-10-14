import React, { useState, useEffect } from "react";
import "./styleTodo.css";
import ModalTarea from "../Modal/Modal";
import Cards from "../Cards/Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  const guardarTarea = (tareasObj) => {
    let list = taskList;
    list.push(tareasObj);
    localStorage.setItem("listaTareas", JSON.stringify(list));
    setTaskList(list);
    setModal(false);
  };

  const eliminarTarea = (index) => {
    let eliminar = taskList;
    eliminar.splice(index, 1);
    localStorage.setItem("listaTareas", JSON.stringify(eliminar));
    setTaskList(eliminar);
    window.location.reload();
  };

  useEffect(() => {
    let arr = localStorage.getItem("listaTareas");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Crear nueva Tarea
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Cards
            key={obj.id}
            list={obj}
            index={index}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
      <ModalTarea toggle={toggle} modal={modal} guardarTarea={guardarTarea} />
    </>
  );
};

export default TodoList;
