import './App.css';
import Dashboard from './Dashboard';
import Header  from './Header';
import Detail from './ProjectDetail/Detail';

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
  tags: ['tag1','tag2','tag3','tag4','tag5','tag6','tag7']
}

function App() {
  return (
  <div className="app">
    <Detail project={project1}/>
  </div>
  );
}

export default App;
