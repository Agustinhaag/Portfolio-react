import Perfil from "./pages/Perfil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Github from "./pages/Github";


function App() {
  return (
    <BrowserRouter>
        <Routes> 
          
           <Route path="/user" element={<Perfil/>}/>
           <Route path="/github" element={<Github/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
