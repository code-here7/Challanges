import React, { useEffect } from 'react'
import reports from './Reports';

export const Reports = () => {
  useEffect(()=>{
  console.log(reports);
  },[]);

  return (
    <>
    <div>
     <div><h1>Reports</h1></div>
     <table border={10}>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {
          reports.map((item)=>
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
          )
        }
      </tbody>
     </table>
    </div>
    </>
    
  )
}

export default Reports;
