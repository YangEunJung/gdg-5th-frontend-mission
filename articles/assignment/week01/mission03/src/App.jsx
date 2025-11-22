import { useState } from 'react';
import './App.css';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ManagerNavbar from "./components/ManagerNavbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemSort from "./pages/ItemSort";
import Price from "./pages/Price";
import Addition from "./pages/Addition";
import Registration from "./pages/Registration";
import Delete from "./pages/Delete";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  function renderingPage(){
    if (currentPage === 'home'){
      return (<Home/>);
    }
    else if (currentPage === 'category'){
      return (<Category/>);
    }
    else if (currentPage === 'price'){
      return (<Price/>);
    }
    else if (currentPage === 'itemSort'){
      return (<ItemSort/>);
    }
    else if (currentPage === 'addition'){
      return (<Addition/>);
    }
    else if (currentPage === 'registration'){
      return (<Registration/>);
    }
    else if (currentPage === 'delete'){
      return (<Delete/>);
    }
  }

  function navbarRendering(){
    if (currentPage === 'registration' || currentPage === 'addition' || currentPage === 'delete'){
      return <ManagerNavbar setPage={setCurrentPage}/>
    }
    else{
      return <Navbar setPage={setCurrentPage}/>
    }
  }
  
  return (
    <div className="relative min-h-screen pb-[100px]">
      {navbarRendering()}
      <main>
        {renderingPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App
