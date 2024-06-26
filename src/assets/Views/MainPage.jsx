import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CardPubli from "../components/CardPubli";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <h2 className="title">Fórum de discussão</h2>
          <div style={{ position: "relative" }}>
            <input className="input-main" type="text" placeholder="Buscar" />
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          <button className="button-main">
            <Link to="/registerPubli"> Comentar algo...</Link>
          </button>
          <CardPubli />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
