import './App.css';
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./components/Error"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import BPlate from './components/BPlate';
import DeNeve from './components/DeNeve';
import Epicuria from './components/Epicuria';
import StyledEngineProvider from "@mui/material/StyledEngineProvider"


function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/deneve' element={<DeNeve />} />
            <Route path='/bplate' element={<BPlate />} />
            <Route path='/epicuria' element={<Epicuria />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
