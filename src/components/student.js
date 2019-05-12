import React from 'react';

const student = (props) => {

    //  const students=props.students;
    const { students } = props;

    /*  const studentTemplate = students.map(student => {
        if(student.age>30){
       return (
              <div key={student.id}>
                  <h5>Name:{student.name}</h5>
                  <h5>Age:{student.age}</h5>
                  <h5>City:{student.city}</h5>
                 
              </div>
         
          )
        }
          
      })*/
    const studentsTemplate = students.map(student => {
        return student.age > 30 ?
            (<tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
            </tr>
            ) : null;
    });
    return (

        <div>
            <h5 className="text-info">Students with age greater than 30</h5>
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
export default student