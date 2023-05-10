import { TableRow } from '@mui/material'
import React from 'react'

const Table = (props) => {
    const{data}=props
  return (
   
       <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((item,index)=>{
        return <TableRow key={index} item={item}/>
    })
   }
   
  </tbody>
</table>

  
  )
}

export default Table
