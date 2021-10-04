import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import Banner from '../Banner/Banner';
import './Menubar.css'
const Menubar = () => {
    // const [user, setUser] = useContext(userContext);

    return (
        <div className="MenuBar-container container">


            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />


                    <span></span>
                    <span></span>
                    <span></span>


                    <ul id="menu">
                        <Link to="/home" className="items">
                            <li>Home</li>
                        </Link>
                        <Link to="/services" className="items">
                            <li>Our Services</li>
                        </Link>
                        <Link to="/about" className="items">
                            <li>About us</li>
                        </Link>
                        <Link to="/contact" className="items">
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;