import './App.css';
import Detail from './ProjectDetail/Detail';
import AddProject from './AddProject';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Header"
import Dashboard from "./Dashboard"
import Analytics from './Analytics';
import About from "./About"

function App() {
  return (
      <div className="app">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Analytics />} />
          <Route exact path="/projects" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/add-project" element={<AddProject />} />
          <Route exact path="/show-project" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;