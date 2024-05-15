import './App.css';
import TextArea from './components/TextArea';
import AboutPage from './components/About';
import {BrowserRouter as Router, Routes , Route,Link} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (

   
      <Router>
         <div className="App"> 
         <Navbar/>
      <Routes>
       
        <Route path ="/about" element={<AboutPage/>}></Route>
        <Route path ="/" element={ <TextArea/>}></Route>
        
       
       
      </Routes>
      </div>
      </Router>
    
  );
}

export default App;

