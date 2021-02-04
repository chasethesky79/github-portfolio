import './Header.css';
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../GitHub-Mark-Light-64px.png'

export default function Header(){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            <h1>
                My Github Portfolio
            </h1>
            </p>
        </header> 
    )
}

Header.propTypes = {
    logo: PropTypes.string
};