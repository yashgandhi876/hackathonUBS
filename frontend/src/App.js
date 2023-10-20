import './App.css';
import Detail from './ProjectDetail/Detail';
import AddProject from './AddProject';
import About from './About';

const project1 = {
  title:'DPB-UI',
  description:'Stock trading application for clients of Credit SUisse where they can view their transactions and cash activities too',
  linkText: 'link to gitlab',
  image: "https://img.freepik.com/premium-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54053.jpg?w=1800",
  imageText: "project Image",
  contributors: [
    "developer1",
    "developer2",
    "developer3",
    "developer3",
    "developer3",
    "developer3",
    "developer3",
    "developer3"
  ],
  tags: ['java','react','angular','kotlin','python','mongodb','docker']
}


function App() {
  return (
      <div className="app">
       <About/>
      </div>
  );
}
export default App;