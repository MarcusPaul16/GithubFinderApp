import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <main>
    
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
