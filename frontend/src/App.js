import './App.css';
import Dashboard from './Dashboard';
import Header  from './Header';
import AddProject from './AddProject';

function App() {
  return (
  <div className="app">
    <Header/>
    <Dashboard/>
    <AddProject/>
  </div>
  );
}

export default App;
