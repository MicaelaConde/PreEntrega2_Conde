import React from "react";
import CartContext  from "../../context/CartProvider";

export const CartWidget = () => {
    const {totalProducts} = CartContext();
    return (
        <div>
          
            <p>ddhh</p>
        </div>
    );
}

export default CartWidget;
