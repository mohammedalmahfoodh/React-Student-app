import React from 'react';

const ShowTableStudents=(props)=>{
    const students=props.students;
    const studentsTemplate=students.map(student=>{
      return(
          <tr key={student.id}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.city}</td>
      <td ><a onClick={()=>props.deleteAStudent(student.id)} href="#" >Delete</a>  </td>
      
    </tr>
      )
    })
 return(
     <div>
         <h5 className="text-info">All students</h5>
     <table className="table">
  <thead className="thead-dark">
  
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
    </tr>
    
  </thead>
  <tbody>
  {studentsTemplate}
  </tbody>
  </table>

     </div>
 )


}
export default ShowTableStudents