import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import ShoeContextProvider from './ShoeContext/ShoeContext';
import PageHandler from './components/PageHandler';
import './App.css';

function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
     <ShoeContextProvider>
     <Navbar></Navbar>
     <PageHandler></PageHandler>
     <Footer></Footer>
     </ShoeContextProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
