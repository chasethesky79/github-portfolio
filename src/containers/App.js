import React from 'react';
import './App.css';
import Header from '../components/Header/Header'
import logo from '../logo.svg'
import Profile from './Profile'
import styled from 'styled-components'
import { GlobalStyle } from '../styled-components/styled-components';

const AppWrapper = styled.div`
text-align: center;
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <AppWrapper>
      <Header logo={logo}/>
      <Profile/>
    </AppWrapper>
    </>
  );
}

export default App;
