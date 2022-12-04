import './App.css';
import HomePage from '../src/Pages/HomePage'
import Register from '../src/Pages/Register'
import Login from '../src/Pages/Login'
import Nft from '../src/Pages/Nft/index'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer'
import { DarkModeProvider } from './Context/DarkMode';
function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Router>
      <DarkModeProvider >
      <NavBar/>
      <Routes>
      <Route  exact path="/" element={ <HomePage/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nft" element={<Nft/>}/>
      </Routes>
      <Footer/>
      </DarkModeProvider>
</Router>
    </div>
  );
}

export default App;
