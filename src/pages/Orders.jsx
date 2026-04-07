import { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className="order-section">
            <h2 className="text-center text-white">All Orders</h2>
            {orders.length === 0 ? (
                <p className="order-cart-empty">No orders yet.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="order-card">
                        <div className="order-card-header">
                            <h3>Order from {order.name}</h3>
                        </div>
                        <div className="order-card-body">
                            <p><b>Phone:</b> {order.phone}</p>
                            <p><b>Address:</b> {order.address}</p>
                            <p><b>Items:</b> {order.items}</p>
                            <p><b>Total:</b> ₱{order.total}</p>
                            <p><b>Status:</b> {order.status}</p>
                            <p><b>Time:</b> {new Date(order.timestamp).toLocaleString()}</p>
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}
