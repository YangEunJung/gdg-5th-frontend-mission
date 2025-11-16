import { useState } from 'react';
import './App.css';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ItemSort from "./pages/ItemSort";
import Price from "./pages/Price";

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
  }
  
  return (
    <div className="relative min-h-screen pb-[100px]">
      <Navbar setPage={setCurrentPage}/>
      <main>
        {renderingPage()}
      </main>
      <Footer/>
    </div>
  );
}

export default App
