import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Academic from './components/Academic'

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Skills />
      <Academic />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
