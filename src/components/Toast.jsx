import { useCart } from '../context/CartContext';

export default function Toast() {
    const { toastMsg } = useCart();
    return (
        <div className={`cart-toast${toastMsg ? ' show' : ''}`}>
            {toastMsg}
        </div>
    );
}