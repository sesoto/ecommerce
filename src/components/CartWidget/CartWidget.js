import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from "../../context/CartContext";

const CartWidget = () => {
    const { cartProducts, cantCart } = useContext(CartContext)

    return (
        cartProducts.length > 0 && (
            <div>
                <ShoppingCartIcon />
                { cantCart() }
            </div>
    ))
}

export default CartWidget