import { clearCart } from "@/app/store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "@/components/common/product-card/ProductCard";


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const clearButtonHandler = () => dispatch(clearCart());

    console.log(cart);

    return (
        <div>
            {cart?.map((item) => {
                return (
                    <ProductCard product={item} />
                )
            })}
            <button onClick={clearButtonHandler}>
                clear cart
            </button>
        </div>
    );
}

export default Cart;
