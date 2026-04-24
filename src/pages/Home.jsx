import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { categories, featuredItems } from '../data/menuData';

/* ── tiny counter hook ── */
function useCounter(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = target / (duration / 16);
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

/* ── scroll-reveal hook ── */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function RevealSection({ children, className = '', style }) {
    const ref = useReveal();
    return (
        <section ref={ref} className={`reveal-section ${className}`} style={style}>
            {children}
        </section>
    );
}

/* ── Testimonial data ── */
const testimonials = [
    {
        name: 'Jhon Jeremie Baita',
        text: 'Grabe sarap ng wings! Sarap neto kasama ng dinuguan!',
        rating: 5,
    },
    {
        name: 'Dylan Malipol',
        text: '10/10 ang wings. Kaso sayang hindi na ako DL.',
        rating: 5,
    },
    {
        name: 'Juvelyn Pecaña',
        text: 'Grabi galing nan! Grabi ang wings! Pero mas masarap pa sana kung may partner na masarap din.',
        rating: 5,
    },
];

export default function Home() {
    const { addItem } = useCart();
    const stat1 = useCounter(6, 1500);
    const stat2 = useCounter(30, 1800);
    const stat3 = useCounter(1000, 2200);

    return (
        <>
            <Navbar activePage="home" />

            {/* ── HERO ── */}
            <section className="home-hero">
                <div className="home-hero-bg">
                    <img
                        src="/images/CLC/garlic-herb-chicken-wings-2-of-5.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
                <div className="home-hero-overlay" />
                <div className="home-hero-particles" aria-hidden="true">
                    <span /><span /><span /><span /><span />
                </div>
                <div className="container home-hero-content">
                    <span className="home-hero-badge">🔥 Now Serving Fresh Daily</span>
                    <h1 className="home-hero-title">
                        Wings So Good,<br />
                        <span className="home-hero-accent">You'll Forget Your Ex.</span>
                    </h1>
                    <p className="home-hero-subtitle">
                        Bold flavors, crispy perfection, and sauces that slap — crafted with
                        love in every batch.
                    </p>
                    <div className="home-hero-actions">
                        <Link to="/categories" className="home-hero-btn primary">
                            Explore Menu
                        </Link>
                        <Link to="/about" className="home-hero-btn secondary">
                            Our Story
                        </Link>
                    </div>
                </div>
                <div className="home-hero-scroll-hint" aria-hidden="true">
                    <span />
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section className="home-stats">
                <div className="container home-stats-grid">
                    <div className="home-stat" ref={stat1.ref}>
                        <span className="home-stat-number">{stat1.count}+</span>
                        <span className="home-stat-label">Wing Categories</span>
                    </div>
                    <div className="home-stat" ref={stat2.ref}>
                        <span className="home-stat-number">{stat2.count}+</span>
                        <span className="home-stat-label">Unique Flavors</span>
                    </div>
                    <div className="home-stat" ref={stat3.ref}>
                        <span className="home-stat-number">{stat3.count}+</span>
                        <span className="home-stat-label">Happy Customers</span>
                    </div>
                </div>
            </section>

            {/* ── CATEGORY SHOWCASE ── */}
            <RevealSection className="home-categories-section">
                <div className="container">
                    <div className="home-section-header">
                        <span className="home-section-tag">Our Menu</span>
                        <h2 className="home-section-title">Explore Wing Flavors</h2>
                        <p className="home-section-subtitle">
                            From fiery heat to sweet &amp; savory — discover your new favorite.
                        </p>
                    </div>
                    <div className="home-categories-grid">
                        {categories.map((cat, i) => (
                            <Link
                                to={cat.path}
                                className="home-category-card"
                                key={cat.id}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="home-category-img-wrap">
                                    <img src={cat.img} alt={cat.label} />
                                </div>
                                <div className="home-category-info">
                                    <h3>{cat.label}</h3>
                                    <span className="home-category-cta">
                                        View Menu →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </RevealSection>

            {/* ── FEATURED MENU ── */}
            <RevealSection className="home-featured-section">
                <div className="container">
                    <div className="home-section-header">
                        <span className="home-section-tag">Chef's Pick</span>
                        <h2 className="home-section-title">Featured Wings &amp; Meals</h2>
                        <p className="home-section-subtitle">
                            Hand-picked favorites — the wings our customers can't stop ordering.
                        </p>
                    </div>
                    <div className="home-featured-grid">
                        {featuredItems.map((item) => (
                            <article className="home-featured-card" key={item.id}>
                                <div className="home-featured-img">
                                    <img src={item.img} alt={item.name} />
                                    <div className="home-featured-price-tag">
                                        &#8369;{item.price}
                                    </div>
                                </div>
                                <div className="home-featured-body">
                                    <h4>{item.name}</h4>
                                    <p>{item.detail}</p>
                                    <button
                                        className="btn-add-cart"
                                        onClick={() => addItem(item)}
                                    >
                                        + Add to Cart
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </RevealSection>

            {/* ── TESTIMONIALS ── */}
            <RevealSection className="home-testimonials-section">
                <div className="container">
                    <div className="home-section-header">
                        <span className="home-section-tag">Customer Feedback</span>
                        <h2 className="home-section-title">What Our Customers Say</h2>
                    </div>
                    <div className="home-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <article className="home-testimonial-card" key={i}>
                                <div className="home-testimonial-stars">
                                    {'★'.repeat(t.rating)}
                                </div>
                                <p className="home-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                                <div className="home-testimonial-author">
                                    <div className="home-testimonial-avatar">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span>{t.name}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </RevealSection>

            {/* ── CTA BANNER ── */}
            <RevealSection className="home-cta-section">
                <div className="container text-center">
                    <h2 className="home-cta-title">Ready to Order?</h2>
                    <p className="home-cta-text">
                        Fresh wings, bold flavors, delivered hot to your door.
                    </p>
                    <Link to="/categories" className="about-cta-btn">
                        Browse Full Menu
                    </Link>
                </div>
            </RevealSection>

            <Footer />
        </>
    );
}