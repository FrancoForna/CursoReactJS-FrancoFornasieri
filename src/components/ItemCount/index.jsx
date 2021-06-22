import { useState} from 'react'

export const Carrito = () => {
    const [carrito, setCarrito] = useState ([0]);

    return (
        <>
        <section>
            <button onClick={() => {setCarrito ([...carrito, { id:1 , name:"remera"}])}}>Agregar al carrito</button>
            <p>Carrito</p>
            <p>{carrito.length}</p>
            <button onClick={() => {setCarrito([carrito.lenght -1])}}>Quitar al carrito</button>
            
        </section>
        </>
    )
}