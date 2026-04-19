import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/"); // redirect to home on success
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <section className="order-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="order-card" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="order-card-header text-center">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="order-card-body">
                        {error && <div className="order-message error">{error}</div>}
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-order" style={{ width: '100%', marginTop: '1rem' }}>
                                Create Account
                            </button>
                        </form>
                        <p className="text-center" style={{ marginTop: '1rem', color: 'var(--gray)' }}>
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
