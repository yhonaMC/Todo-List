import React, { useState, useEffect } from "react";
import "./Cards.css";
import Editar from "../Editar/Editar.jsx";

const Cards = ({
  list,
  index,
  eliminarTarea,
  editarTareasArr,
  setRender,
  render,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const editarTarea = (obj) => {
    editarTareasArr(obj, index);
  };

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    eliminarTarea(index);
  };

  const handleCambio = (tarea, index) => {
    const db = JSON.parse(localStorage.getItem("listaTareas"));
    if (tarea.Homework) {
      db[index] = {
        Name: tarea.Name,
        Descripcion: tarea.Descripcion,
        Homework: false,
      };
      localStorage.setItem("listaTareas", JSON.stringify(db));
      setRender(!render);
    } else {
      db[index] = {
        Name: tarea.Name,
        Descripcion: tarea.Descripcion,
        Homework: true,
      };
      localStorage.setItem("listaTareas", JSON.stringify(db));
      setRender(!render);
    }
  };
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: colors[index % 5].secondaryColor }}
        >
          {list.Name}
        </span>
        <p className="mt-3">{list.Descripcion}</p>

        <div className="option">
          <button
            className="btn "
            onClick={() => handleCambio(list, index)}
            style={{ backgroundColor: colors[index % 5].primaryColor }}
          >
            {list.Homework ? "Pendiente" : "Realizada"}
          </button>
          <i
            className="far fa-edit ms-1 "
            style={{ color: colors[index % 5].primaryColor }}
            onClick={() => setModal(true)}
          ></i>

          <i
            className="far fa-trash-alt ms-1  "
            style={{ color: colors[index % 5].primaryColor }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <Editar
        modal={modal}
        toggle={toggle}
        editarTarea={editarTarea}
        list={list}
      />
    </div>
  );
};

export default Cards;
