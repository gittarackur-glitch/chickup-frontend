import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// A sub-component to handle individual order feedback state cleanly
function OrderCard({ order, onSendFeedback }) {
    const [showReply, setShowReply] = useState(false);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSend = async () => {
        if (!message.trim()) return;
        setSending(true);
        await onSendFeedback(order.id, order.email, message);
        setSending(false);
        setMessage("");
        setShowReply(false);
    };

    return (
        <div className="order-card" style={{ marginBottom: "2rem" }}>
            <div className="order-card-header">
                <h3>Order from {order.name}</h3>
            </div>
            <div className="order-card-body">
                <p><b>Email:</b> {order.email}</p>
                <p><b>Phone:</b> {order.phone}</p>
                <p><b>Address:</b> {order.address}</p>
                <p><b>Items:</b> {order.items}</p>
                <p><b>Total:</b> ₱{order.total}</p>
                <p><b>Status:</b> {order.status}</p>
                <p><b>Time:</b> {new Date(order.timestamp).toLocaleString()}</p>

                <div style={{ marginTop: "1rem" }}>
                    <button 
                        className="btn-order" 
                        onClick={() => setShowReply(!showReply)}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
                    >
                        {showReply ? "Cancel Reply" : "Reply to Customer"}
                    </button>
                    
                    {showReply && (
                        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <textarea 
                                rows="3" 
                                placeholder="Type your update message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
                            />
                            <button 
                                className="btn-order" 
                                onClick={handleSend}
                                disabled={sending || !message.trim()}
                                style={{ alignSelf: "flex-start", padding: "0.5rem 1rem", fontSize: "0.9rem" }}
                            >
                                {sending ? "Sending..." : "Send Feedback"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const { currentUser } = useAuth();
    
    // Check for admin email restriction
    const isAdmin = currentUser && currentUser.email === "s2023102316@firstasia.edu.ph";

    useEffect(() => {
        if (!isAdmin) return;
        
        const apiUrl = process.env.NODE_ENV === "development" ? (process.env.REACT_APP_API_URL || "http://127.0.0.1:5000") : "https://chickup-backend.onrender.com";
        fetch(`${apiUrl}/api/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.error(err));
    }, [isAdmin]);

    const handleSendFeedback = async (orderId, email, message) => {
        if (!email) {
            alert("No email attached to this order.");
            return;
        }

        try {
            const apiUrl = process.env.NODE_ENV === "development" ? (process.env.REACT_APP_API_URL || "http://127.0.0.1:5000") : "https://chickup-backend.onrender.com";
            const res = await fetch(`${apiUrl}/api/feedback`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    message: message,
                    order_id: orderId
                })
            });

            if (!res.ok) {
                throw new Error("Failed to send feedback");
            }

            alert("Feedback sent successfully!");
        } catch (err) {
            console.error(err);
            alert("Error sending feedback.");
        }
    };

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <Navbar />
            <section className="order-section" style={{ minHeight: "80vh", padding: "2rem 0" }}>
                <div className="container">
                    <h2 className="text-center text-white" style={{ marginBottom: "2rem" }}>All Orders (Admin)</h2>
                    {orders.length === 0 ? (
                        <p className="order-cart-empty text-center text-white">No orders yet.</p>
                    ) : (
                        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                            {orders.map(order => (
                                <OrderCard 
                                    key={order.id} 
                                    order={order} 
                                    onSendFeedback={handleSendFeedback} 
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
