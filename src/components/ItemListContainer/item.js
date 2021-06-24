
import {ItemListContainer} from "../ItemListContainer"

export const ItemList = ({products}) => {
        return (
            <div>
            {products.map( product => {
                return < ItemListContainer product={product}  />     
            })
            }        
            </div>
    )
} 