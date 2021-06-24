export const ItemListContainer = ({name, price, img})=> {

    return (
        <>
        <h1>{name}</h1>
        <strong>{price}</strong>
        <img src={img}/>
        </>
    )
}