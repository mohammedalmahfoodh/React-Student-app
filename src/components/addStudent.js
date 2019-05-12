import React, { Component } from 'react';
class AddStudent extends Component {
    state = {
        name: null,
        age: 0,
        city: null
    }
    getStudentInfo = (e) => {
       this.setState({
          [e.target.id]:e.target.value 
       })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
      console.log(this.state)
    }
    getStudentId() {
        let newId = this.props.students.length;
        return newId;
    }
    render() {

        return (
            <div id="addSContainer">
                <h6 className="text-info">In the form bellow you can add a new student</h6>
                <br />
                <form id="addStudent" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" onChange={this.getStudentInfo}
                            id="name" aria-describedby="frstNameHelp" placeholder="Enter First Name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" onChange={this.getStudentInfo}
                            id="city" aria-describedby="citylHelp" placeholder="Enter city" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" onChange={this.getStudentInfo}
                            id="age" aria-describedby="ageHelp" placeholder="Enter age" />

                    </div>
                    <button id="addSButton" 
                     className="btn btn-info ">Add Student</button>
                </form>

            </div>
        );

    }


}
export default AddStudent