import Navbar from "./Navbar";

// Import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/App.css";

// Import JS bootstrap jquery and popper.js
import "bootstrap";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <Jumbotron
          titulo="Hola Soy un Jumbotron"
          nameBtn="Yo Soy Tu Boton"
          contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
        />
        <div className="row text-center">
          <Card
            tituloCard="Soy tarjeta 1"
            nameBtn="Presiona Aqui"
            contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
          />
          <Card
            tituloCard="Soy tarjeta 2"
            nameBtn="No Aqui"
            contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
          />
          <Card
            tituloCard="Soy tarjeta 3"
            nameBtn="Mejor aca"
            contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
          />
          <Card
            tituloCard="Soy tarjeta 4"
            nameBtn="Presiona...Presiona"
            contenido="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
