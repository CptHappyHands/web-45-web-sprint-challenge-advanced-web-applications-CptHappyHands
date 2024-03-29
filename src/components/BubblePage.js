import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from "../services/fetchColorService";
import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService()
      .then((res) => {
        setColors(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // setColors(colors.filter((item) => item.editColor !== editColor));
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then((res) => {
        console.log(res);
        let index = colors.findIndex((color) => color.id === editColor.id);
        colors[index] = editColor;
        setColors([...colors]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${colorToDelete.id}`)
      // console.log(colorToDelete)
      .then(() => {
        console.log(colorToDelete);
        setColors(colors.filter((item) => item.id !== colorToDelete.id));
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
