import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Bio from './components/Bio'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Skills />
      <GlobalStyle />
    </>
  );
}

export default App;
