import './navstyle.scss';
import './CartWidget'
import { Icon } from './components/CartWidget'

export const NavComponent = ({children}) => {
    return (

        <nav className="navBar">
            <div className="navBar_box">
                <p className="navBar_p"><a href="#index">Inicio</a></p>
                <p className="navBar_p"><a href="#index">Coleccion</a></p>
                <p className="navBar_p"><a href="#index">Nosotros</a></p>
                <p className="navBar_p"><a href="#index">Preguntas frecuentes</a></p>
                <p className="navBar_p"><a href="#index">Suscripcion</a></p>
                <Icon />
            </div>
            {children}
        </nav>
    )
}