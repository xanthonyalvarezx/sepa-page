import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {








    render() {
        return (

            <div id="nav-links">
                <nav>
                    <ul id='navList'>
                        <Link to="/">
                            <li>Home</li>
                        </Link>

                        <Link to="/Videos">
                            <li>Videos</li>
                        </Link>

                        <Link to="/subscribe">
                            <li>Subscribe!</li>
                        </Link>

                    </ul>


                </nav>





            </div>)
    }
}
export default Nav