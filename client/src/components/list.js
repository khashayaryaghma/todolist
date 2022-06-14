import { useState, useEffect } from "react";


import { getAllList } from "../api/listApi";

export default function list() {

    const [list, setList]= useState([]);

    useEffect(() => {

    getAllList().then(({ data }) => setList(data.courses));
}, []);

  return (
    <>
    
    </>
  )
}
