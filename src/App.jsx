import Perfil from "./pages/Perfil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Github from "./pages/Github";
import { ModeContextProvider } from "./pages/context/ModeContext";

function App() {
  return (
    <div>
      <ModeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </BrowserRouter>
      </ModeContextProvider>
    </div>
  );
}

export default App;
