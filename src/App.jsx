import Perfil from "./pages/Perfil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Github from "./pages/Github";
import { ModeContextProvider } from "./context/ModeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ModeContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Perfil />} />
            {/* <Route path="/github" element={<Github />} /> */}
            <Route path="/perfil/:detail" element={<Github />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ModeContextProvider>
    </div>
  );
}

export default App;
