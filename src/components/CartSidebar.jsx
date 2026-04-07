import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartSidebar() {
    const { items, removeItem, updateQty, total, sidebarOpen, setSidebarOpen } = useCart();
    const navigate = useNavigate();

    function handleCheckout() {
        setSidebarOpen(false);
        navigate('/checkout');
    }

    return (
        <>
            {sidebarOpen && <div className="cart-overlay" onClick={() => setSidebarOpen(false)} />}
            <div className={`cart-sidebar${sidebarOpen ? ' open' : ''}`}>
                <div className="cart-sidebar-header">
                    <h3>Your Cart</h3>
                    <button className="cart-close-btn" onClick={() => setSidebarOpen(false)}>&#x2715;</button>
                </div>

                <div className="cart-sidebar-body">
                    {items.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        items.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.img} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">&#8369;{item.price} &times; {item.qty} = &#8369;{item.price * item.qty}</p>
                                    <div className="cart-qty-controls">
                                        <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>&#8722;</button>
                                        <span className="qty-num">{item.qty}</span>
                                        <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                                        <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-sidebar-footer">
                    <div className="cart-total-row">
                        <span>Total</span>
                        <span className="cart-total-amount">&#8369;{total}</span>
                    </div>
                    <button
                        className="btn-checkout"
                        onClick={handleCheckout}
                        disabled={items.length === 0}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    );
}