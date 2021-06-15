import './navstyle.scss';


export const NavComponent = () => {
    return (
        <nav className="navBar">
            <div className="navBar_box">
                <p className="navBar_p">Inicio</p>
                <p className="navBar_p">Coleccion</p>
                <p className="navBar_p">Nosotros</p>
                <p className="navBar_p">Preguntas frecuentes</p>
                <p className="navBar_p">Suscripcion</p>
            </div>
        </nav>
    )
}