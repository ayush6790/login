import './App.css'; 
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import WelcomeUser from './Components/WelcomeUser';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cntdn" element={<Home />}/>
        <Route path="/login" element={< LoginPage />}/>            
        <Route path="/welcome" element={< WelcomeUser />}/>            
                    
        </Routes>
    </div>
  );
}

export default App;
