import './App.css';
import Dashboard from './Dashboard';
import Header  from './Header';

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
