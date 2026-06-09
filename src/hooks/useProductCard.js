import { toggleProductInCart } from "@/app/store/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const useProductCard = (product) => {
    const dispatch = useDispatch();
    const handleCartToggle = () => dispatch(toggleProductInCart(product));
    const isInCart = useSelector((state) => state.cart.some((item) => item.id === product?.id));

    return {
        isInCart,
        handleCartToggle,
    }
}

export default useProductCard;