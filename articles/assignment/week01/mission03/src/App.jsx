import { useState, useEffect } from 'react';
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
const serverURL = import.meta.env.REACT_APP_SERVER_URL;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
      async function get() {
        try{  
          //const url = serverURL;
          const res = await fetch(`${API_URL}/products`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
          });

            if (res.ok){
              const content = await res.json();
              console.log("데이터 도착 확인:", content.data);
              setUsers(content.data);
            }
            else{
              throw Error("데이터를 가져오지 못했습니다.");
            }
        }
        catch(err){
          console.error(err);
        }
      }

      get();
  }, []);

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
