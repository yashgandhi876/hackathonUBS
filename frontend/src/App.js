import './App.css';
import Detail from './ProjectDetail/Detail';
import AddProject from './AddProject';

const project1 = {
  title:'title1',
  description:'sample project',
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
    <Detail project={project1}/>
  </div>
  );
}
export default App;
