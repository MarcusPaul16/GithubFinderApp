import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/notfound' element={<NotFound/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
