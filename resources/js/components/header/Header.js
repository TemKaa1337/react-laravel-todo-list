import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/header/header.css';

function getAuthButtons(props) {
    if (props.isAuthenticated) {
        return [
            <li key = {0}  className = "auth">
                <a className = "" href="#">Log out</a>
            </li>
        ];
    } else {
        return [
            <li key = {0} className = "auth">
                <a className = "" href="#">Register</a>
            </li>,
            <li key = {1} className = "auth">
                <a className = "" href="#">Log in</a>
            </li>
        ];
    }
}

function Header(props) {

    return (
        <nav className = "header">
            <ul className = "">
                <li className = "">
                    <a className = "" href="#">Active</a>
                </li>
                <li className = "">
                    <a className = "" href="#">Link</a>
                </li>
                <li className = "">
                    <a className = "" href="#">Link</a>
                </li>
                <li className = "">
                    <a className = "" href="#">Disabled</a>
                </li>
                { getAuthButtons(props) }
            </ul>
        </nav>
    );
}

export default Header;
