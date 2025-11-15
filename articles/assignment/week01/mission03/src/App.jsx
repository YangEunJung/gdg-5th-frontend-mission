import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from "./components/Footer";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen pb-[100px]">
            <Navbar />
            <Content />
            <Footer />
        </div>
  );
}

export default App
