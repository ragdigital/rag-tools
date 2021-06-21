import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <span className="brand-text font-weight-light"><b>RAG</b>tools</span>
                    </Link>

                    <button className="navbar-toggler order-1" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            {/*
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            */}
                        </ul>

                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;