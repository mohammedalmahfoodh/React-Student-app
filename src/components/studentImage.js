import React from 'react';

const StudentImage=(props)=>{
 
    return(
     <div className="mt-4">
         <h5 className="text-info">Student App for displaying information and adding new students.</h5>
       <img id="studentImage" src= { require('../abstract-crowd-of-students.jpg') }        alt=""/>
     </div>

    )


}
export default StudentImage