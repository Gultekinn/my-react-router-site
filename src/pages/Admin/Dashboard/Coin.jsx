import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.scss";
import axios from "axios";
import { Table } from "@mui/material";
const Coin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res)=>{
        
        setData(res.data)
    });
  },[data]);
  return (
    <Table data={data}/>
    
  )
};

export default Coin;
