import "./navstyle.scss";

export const NavComponent = () => {
  return (
    <nav className="navBar">
      <div className="navBar_box">
        <p className="navBar_p">
          <a href="#index">Inicio</a>
        </p>
        <p className="navBar_p">
          <a href="#index">Coleccion</a>
        </p>
        <p className="navBar_p">
          <a href="#index">Nosotros</a>
        </p>
        <p className="navBar_p">
          <a href="#index">Preguntas frecuentes</a>
        </p>
        <p className="navBar_p">
          <a href="#index">Suscripcion</a>
        </p>
      </div>
    </nav>
  );
};
