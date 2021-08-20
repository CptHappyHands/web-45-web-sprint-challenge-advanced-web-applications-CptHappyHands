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

  // const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/colors")
  //     .then((res) => {
  //       console.log(res.data);
  //       setColors(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then((res) => {
      console.log(res.data);
      setColors(res.data);
    })
    .catch((err) => {
      console.log(err);
    }, []);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/colors/`)
  //     .then((res) => {
  //       localStorage.setItem("token", res.data.payload);
  //       setColors(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  console.log(colors);
  const saveEdit = (editColor) => {};

  const deleteColor = (colorToDelete) => {};

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
