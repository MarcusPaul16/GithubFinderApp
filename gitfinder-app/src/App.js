import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/user/:login' element={<UserPage/>}/>
              <Route path='/notfound' element={<NotFound/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
