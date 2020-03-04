import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Skills />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
