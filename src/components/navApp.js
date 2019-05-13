import React from 'react';
const NavApp = (props) => {
    return (
        <div>
            <nav className="nav bg-dark">
                <a className="nav-link " href="https://www.linkedin.com/in/mohammed-al-mahfoodh-9a297096/">Mohammed <span><i className="fab fa-linkedin fa-2x"></i></span></a>
                <a className="nav-link" href="https://github.com/mohammedalmahfoodh?tab=repositories">Mohammed's GitHub <span><i className="fab fa-github fa-2x"></i></span></a>
                <a className="nav-link mt-2" href="#">Mobile:0700260884</a>
                <a className="nav-link mt-2" href="#">Email:mohammedalmahfoodh@yahoo.com</a>
                <h4 className="text-light mt-2 ">Welcome to student react app</h4>
            </nav>
        </div>

    )

}
export default NavApp