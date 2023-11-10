import "./App.css";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import Seccion from "./componentes/section/Seccion";
import Nav from "./componentes/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./componentes/boton/Boton";
import Casa from "./componentes/Casas";

function App() {
  const handlerClicEnBoton = () => {
    alert("Hiciste click en el boton");
  };

  const casas = [
    {nombre:"Santiago",
    valores:"dsadasd",
    animal: 'dasdasd',
    color: 'dsadsad',
    ubicacion: 'sdasa',
    imagen: 'dsadsa'},

    {nombre:"Santiago",
    valores:"dsadasd",
    animal: 'dasdasd',
    color: 'dsadsad',
    ubicacion: 'sdasa',
    imagen: 'dsadsa'},

    {nombre:"Santiago",
    valores:"dsadasd",
    animal: 'dasdasd',
    color: 'dsadsad',
    ubicacion: 'sdasa',
    imagen: 'dsadsa'},
  ];

  return (
    <>
      <Header />
      <div>
        {casas.map((casa, index) => (
        <Casa
        key={index}
        nombre={casa.nombre}
        valores={casa.valores}
        animal={casa.animal}
        color={casa.color}
        ubicacion={casa.ubicacion}
        imagen={casa.imagen}
        />)
        )};
        

      </div>
      <Boton texto="Ingresar" />
      <Boton texto="Salir" color="red" onClick={handlerClicEnBoton} />
      <Nav />
      <Seccion />
      <Footer />

    </>
  );
}

export default App;
