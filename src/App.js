import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Middle from './Components/Middle';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Middle /><br />
      <Footer />
    </div>
  );
};

export default App;
