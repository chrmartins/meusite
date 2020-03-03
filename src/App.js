import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Bio from './components/Bio'
import Avatar from './components/Avatar'



function App() {
  return (
    <>
      <Header />
      <Avatar />
      <Bio />
      <GlobalStyle />
    </>
  );
}

export default App;
