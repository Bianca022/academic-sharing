import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CardPubli from "../components/CardBiblioteca";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Biblioteca() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <h2 className="title">Biblioteca de Recursos Acadêmicos</h2>
          <CardPubli />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Biblioteca;
