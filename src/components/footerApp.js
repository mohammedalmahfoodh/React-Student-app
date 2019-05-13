import React from 'react';
const FooterApp = (props) => {
    return (
        <div>
            <nav className="nav bg-dark">
                <div>
                <a className="nav-link " href="https://www.linkedin.com/in/mohammed-al-mahfoodh-9a297096/">LinkedIn</a>
                <a className="nav-link" href="#">Mohammed</a>
                <a className="nav-link" href="#">Mobile 0700260884</a>
                </div>
               
                <h3 className="text-light ml-5">Welcome to student app</h3>
                <img id="studentImageSmall" src= { require('../img1.jpg') }        alt=""/>
            </nav>
        </div>

    )

}
export default FooterApp