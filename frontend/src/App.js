import './App.css';
import AddProject from './AddProject';
import Dashboard from './Dashboard';
import Header from "./Header";
import { Card } from '@material-ui/core';

function App() {
  return (
  <div className="app">
    <Header/>
    <Dashboard/>
  </div>
  );
}

export default App;
