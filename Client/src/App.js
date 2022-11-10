import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from './components/navbar/NavBar.js';
import { Report } from './pages/report/Report';
import { Entry } from './pages/entry/Entry';
import { Out } from './pages/out/Out';
import History from './pages/history/History';
import Permissions from './pages/permissions/Permissions';
import { Signin } from './pages/signinup/Signin';
import { Signup } from './pages/signinup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/stock-report" element={<Report/>}/>
            <Route path="/stock-entry" element={<Entry/>}/>
            <Route path="/stock-out" element={<Out/>}/>
            <Route path="/stock-history" element={<History/>}/>
            <Route path="/permissions" element={<Permissions/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
