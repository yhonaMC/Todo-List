import React, { useState, useEffect } from "react";
import "./styleTodo.css";
import ModalTarea from "../Modal/Modal";
import Cards from "../Cards/Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [busqueda, setbusqueda] = useState("");
  const [render, setRender] = useState(true);

  const toggle = () => setModal(!modal);

  const guardarTarea = (tareasObj) => {
    let list = taskList;
    list.push(tareasObj);
    localStorage.setItem("listaTareas", JSON.stringify(list));
    setTaskList(list);
    setModal(false);
  };

  const editarTareasArr = (obj, index) => {
    let list = taskList;
    list[index] = obj;
    localStorage.setItem("listaTareas", JSON.stringify(list));
    setTaskList(list);
    setRender(!render);
  };

  const eliminarTarea = (index) => {
    let eliminar = taskList;
    eliminar.splice(index, 1);
    localStorage.setItem("listaTareas", JSON.stringify(eliminar));
    setTaskList(eliminar);
    setRender(!render);
  };

  useEffect(() => {
    let arr = localStorage.getItem("listaTareas");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(
        obj.filter((res) => res.Descripcion.toLowerCase().includes(busqueda))
      );
    }
  }, [busqueda, render]);

  const handleFiltro = (e) => {
    setbusqueda(e.target.value);
  };

  return (
    <>
      <div className="header text-center">
        <h3 className="primaryTitle">Todo List</h3>

        <button
          className="btn btn-primary crear mt-2"
          onClick={() => setModal(true)}
        >
          Crear nueva Tarea
        </button>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Buscar"
            className="search"
            onChange={handleFiltro}
          />
        </div>
      </div>

      <div className="task-container">
        {taskList.map((obj, index) => (
          <Cards
            key={index}
            list={obj}
            index={index}
            editarTareasArr={editarTareasArr}
            eliminarTarea={eliminarTarea}
            render={render}
            setRender={setRender}
          />
        ))}
      </div>
      <ModalTarea toggle={toggle} modal={modal} guardarTarea={guardarTarea} />
    </>
  );
};

export default TodoList;
