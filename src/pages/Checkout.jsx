import { useCart } from "../context/CartContext";
import { useState } from "react";
import Navbar from "../components/Navbar";  // ✅ Import Navbar

export default function Checkout() {
    const { items, total, clearCart } = useCart();
    const [message, setMessage] = useState(null);

    async function handleOrder(e) {
        e.preventDefault();
        const order = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            items: items.map(i => `${i.name} x${i.qty}`).join(", "),
            total,
        };

        try {
            console.log("Sending order:", order);

            // Replace localhost with your Render backend
            const res = await fetch("https://chickup-backend.onrender.com/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order),
            });

            console.log("Response status:", res.status);

            if (!res.ok) {
                const text = await res.text();
                console.error("Error response:", text);
                throw new Error(`Request failed: ${res.status}`);
            }

            const data = await res.json();
            console.log("Response JSON:", data);

            setMessage({ type: "success", text: data.message });
            clearCart();
        } catch (err) {
            console.error("Fetch error:", err);
            setMessage({ type: "error", text: "Failed to place order." });
        }
    }

    return (
        <>
            <Navbar />   {/* ✅ Navbar only here */}

            <section className="order-section">
                <h2 className="text-center text-white">Checkout</h2>
                <p className="order-subtitle">Complete your details to place your order</p>

                <div className="order-card">
                    <div className="order-card-header">
                        <h3>Your Information</h3>
                    </div>
                    <div className="order-card-body">
                        {message && (
                            <div className={`order-message ${message.type}`}>
                                {message.text}
                            </div>
                        )}

                        <form onSubmit={handleOrder}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" placeholder="Phone Number" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input id="address" name="address" placeholder="Delivery Address" required />
                            </div>

                            <hr className="order-divider" />

                            <div className="order-cart-summary">
                                <h4>Your Cart</h4>
                                {items.length === 0 ? (
                                    <p className="order-cart-empty">Your cart is empty.</p>
                                ) : (
                                    <>
                                        {items.map(i => (
                                            <div key={i.id} className="order-summary-item">
                                                <span>{i.name} x{i.qty}</span>
                                                <span>₱{i.price * i.qty}</span>
                                            </div>
                                        ))}
                                        <div className="order-summary-total">
                                            <span>Total</span>
                                            <span>₱{total}</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            <button type="submit" className="btn-order" disabled={items.length === 0}>
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
