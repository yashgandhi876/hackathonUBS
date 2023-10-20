import './App.css';
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import AddProject from './AddProject';
import Dashboard from "./Dashboard"

function App() {
  return (
      <div className="app">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;