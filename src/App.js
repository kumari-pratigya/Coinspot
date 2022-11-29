import './App.css';
import HomePage from '../src/Pages/HomePage'
import Register from '../src/Pages/Register'
import Login from '../src/Pages/Login'
import Nft from '../src/Pages/Nft/index'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route  exact path="/" element={ <HomePage/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nft" element={<Nft/>}/>
</Routes>
</Router>
    </div>
  );
}

export default App;
