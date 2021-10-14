import React from "react";
import "./Cards.css";

const Cards = ({ list, index, eliminarTarea }) => {
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

  return (
    <div class="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ "background-color": colors[index % 5].secondaryColor }}
        >
          {list.Name}
        </span>
        <p className="mt-3">{list.Descripcion}</p>
        <div className="option">
          <i
            className="far fa-edit "
            style={{ color: colors[index % 5].primaryColor }}
          ></i>
          <i
            className="far fa-trash-alt ms-1"
            style={{ color: colors[index % 5].primaryColor }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
