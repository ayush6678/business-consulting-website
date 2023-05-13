import {Link} from "react-router-dom";

function Nav(){

    return(
        <div>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/information'>Information</Link>
            </li>
        </div>
    )
}

export default Nav;