import React, { Component } from 'react';
import Student from './components/student';
import NavApp from './components/navApp';
import ShowTableStudents from './components/showTableStudents';
import StudentImage from './components/studentImage';
import AddStudent from './components/addStudent';
import FooterApp from './components/footerApp';
class App extends Component {
  
  state = {
    students: [{ name: "Mohammed", age: 38, city: "malmo", id: 1 },
    { name: "John", age: 29, city: "stockholm", id: 2 },
    { name: "Milan", age: 41, city: "lund", id: 3 },
    { name: "Danny", age: 26, city: "Helsingborg", id: 4 },
    { name: "Erik", age: 35, city: "norrköping", id: 5 },
    { name: "Anders ", age: 33, city: "lund", id: 6 }
    ],
    studentsNumber:1
  };
  addAStudent=(student)=>{
    student.id=this.state.students.length+1
    let copyStudents=[...this.state.students,student]//Spread Operator 
    this.setState({
        students:copyStudents
    });
   
  }
  deleteAStudent=(id)=>{
   const updatedStudents=this.state.students.filter(student =>{
    return student.id!==id
   })
   this.setState({
     students:updatedStudents
   })
    
   }
  
  render() {
    return (
      <div className="App">
        <NavApp />

        <div className="container">
          <div className="row">
            <div id="firstRowHight" className="col">
            <ShowTableStudents deleteAStudent={this.deleteAStudent} students={this.state.students}/>
              
            </div>
            <div className="col">
              <StudentImage/>
           </div>
          </div>

          <div className="row">
            <div className="col-6">
            <Student className="mt-5" students={this.state.students} />
            </div>

            <div className="col-6">
              <AddStudent addAStudent={this.addAStudent} />
           </div>
          </div>

          <div className="row" id="footerApp">
           
          </div>



        </div>
        <FooterApp/>
      </div>
    );



  }

}

export default App;
