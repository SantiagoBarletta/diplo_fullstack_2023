import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import Seccion from "./componentes/section/Seccion";
import ListaPeliculas from "./componentes/peliculas/ListaPeliculas";
import Menu from "./componentes/menu/Menu";
import GestionPociones from "./componentes/pociones/GestionPociones";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
      <><Menu />
        <Header />
        
        <main>
        <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/pociones" element={<GestionPociones />} />
          <Route path="/peliculas" element={<ListaPeliculas />} />
        </Routes>
        </main>
        <Footer />
        
      </>
    </Router>
  );
}

export default App;
