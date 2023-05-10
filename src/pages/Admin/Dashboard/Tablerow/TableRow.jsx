import React from 'react'

const TableRow = (props) => {
    const {item}=props
  return (
    
       <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
     
    </tr>
    
  )
}

export default TableRow
