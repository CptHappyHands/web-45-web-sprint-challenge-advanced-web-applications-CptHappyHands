import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";
import React, { useState, useEffect } from "react";

const fetchColorService = (props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/colors")
      .then((res) => {
        setColor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default fetchColorService;
