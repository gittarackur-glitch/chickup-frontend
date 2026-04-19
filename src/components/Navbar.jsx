import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Navbar({ activePage }) {
    const { count, setSidebarOpen } = useCart();
    const { currentUser } = useAuth();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }

    async function handleLogout() {
        await signOut(auth);
        navigate('/');
    }

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <div className="logo">
                    <Link to="/"><img src="/images/logo.png" alt="Chick Up Logo" /></Link>
                </div>

                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search wings, flavors..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.71 20.29l-3.68-3.68A8.5 8.5 0 1 0 17 18.01l3.68 3.68a1 1 0 0 0 1.41-1.41zM10.5 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
                        </svg>
                    </button>
                </form>

                <nav className="menu">
                    <ul>
                        <li><Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/categories" className={activePage === 'categories' ? 'active' : ''}>Categories</Link></li>
                        <li><Link to="/checkout" className={activePage === 'checkout' ? 'active' : ''}>Order</Link></li>
                        {currentUser ? (
                            <>
                                <li><Link to="/admin/orders" className={activePage === 'events' ? 'active' : ''}>Admin Orders</Link></li>
                                <li><a href="#" onClick={handleLogout}>Logout</a></li>
                            </>
                        ) : (
                            <li><Link to="/login" className={activePage === 'login' ? 'active' : ''}>Login</Link></li>
                        )}
                    </ul>
                </nav>
                <button className="cart-icon-btn" onClick={() => setSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                    </svg>
                    Cart
                    {count > 0 && <span className="cart-badge">{count}</span>}
                </button>
            </div>
        </header>
    );
}