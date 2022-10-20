import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main>
            Content
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
