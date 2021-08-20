import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";
// import React, { useState, useEffect } from "react";

const fetchColorService = () => {
  axiosWithAuth()
    .get("/bubbles")
    .then((res) => {
      this.setState({
        colors: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    }, []);

  //   const [colors, setColors] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/colors")
  //       .then((res) => {
  //         console.log(res.data);
  //         setColors(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [colors]);
};

export default fetchColorService;
