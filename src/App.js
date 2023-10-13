import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';


const App = () => {
 
  return (
    <div >
      <Header />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div>
          <Card />    
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
