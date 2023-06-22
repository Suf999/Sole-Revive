import React from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UncontrolledExample />
      <Footer />
    </div>
  );
}

export default App;
