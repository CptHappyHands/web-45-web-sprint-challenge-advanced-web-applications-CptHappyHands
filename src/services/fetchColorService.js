// import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";

// import React, { useState, useEffect, setState } from "react";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("/api/colors")

    .then((res) => {
      console.log("colors ", res.data);

      return res.data;
    })

    .catch((err) => {
      console.log(err);
    });
};

export default fetchColorService;
