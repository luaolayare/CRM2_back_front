import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>BIENVENIDO AL SISTEMA.....</h1>
        <p>Por favor seleccione una opcion!</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Crear nuevo ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> Revisar tickets
      </Link>

      <footer className="footer">
        <p className="footer1">Desarrolador por Luis Olaya</p>
      </footer>
    </>
  );
}

export default Home;
