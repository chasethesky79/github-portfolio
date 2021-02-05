import './Header.css';
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../GitHub-Mark-Light-64px.png'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #282c34;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export default function Header(){
    return (
        <HeaderWrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                My Github Portfolio
            </h1>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    logo: PropTypes.string
};