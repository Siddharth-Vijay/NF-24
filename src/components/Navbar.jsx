import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'; // Adjust the path to your logo image

const Navbar = () => {
    return (
        <nav
            style={{
                padding: "10px",
                backgroundColor: "#282c34",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/">
                    <img
                        src={logo}
                        alt="Home"
                        style={{ width: "50px", height: "50px", margin: "10px", cursor: "pointer" }}
                    />
                </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
            <Link
                    to="/"
                    style={{ margin: "10px", color: "#61dafb", textDecoration: "none" }}
                >
                    Home
                </Link>
                <Link
                    to="/teams"
                    style={{ margin: "10px", color: "#61dafb", textDecoration: "none" }}
                >
                    Teams
                </Link>
                <Link
                    to="/register"
                    style={{ margin: "10px", color: "#61dafb", textDecoration: "none" }}
                >
                    Register
                </Link>
                <Link
                    to="/quiz"
                    style={{ margin: "10px", color: "#61dafb", textDecoration: "none" }}
                >
                    Quiz
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
