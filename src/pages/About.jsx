import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

/* ── Timeline data ── */
const timeline = [
    {
        year: '2026',
        title: 'Chick Up Is Born',
        desc: 'We officially launched Chick Up — bringing our signature wings to the world with online ordering and fast delivery.',
    },
];

export default function About() {
    return (
        <>
            <Navbar activePage="about" />

            {/* ── Hero Banner ── */}
            <section className="about-hero">
                <div className="about-hero-bg-img">
                    <img
                        src="/images/CLC/garlic-herb-chicken-wings-2-of-5.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </div>
                <div className="about-hero-overlay" />
                <div className="container about-hero-content">
                    <span className="about-badge">Est. 2025</span>
                    <h1 className="about-hero-title">Our Story</h1>
                    <p className="about-hero-subtitle">
                        From a small kitchen dream to your favorite wing spot —
                        crafted with passion, served with love.
                    </p>
                </div>
            </section>

            {/* ── Mission & Intro ── */}
            <RevealSection className="about-section">
                <div className="container">
                    <div className="about-intro-grid">
                        <div className="about-intro-text">
                            <h2 className="highlight">Who We Are</h2>
                            <p>
                                <strong>Chick Up</strong> was born from a simple belief: chicken wings
                                should be extraordinary. We're a team of flavor enthusiasts
                                obsessed with perfecting every glaze, every rub, and every crispy bite.
                            </p>
                            <p>
                                What started as weekend cook-offs among friends has grown into a
                                full-fledged wing experience — where bold recipes meet quality
                                ingredients, and every order is made fresh just for you.
                            </p>
                        </div>
                        <div className="about-intro-image">
                            <img
                                src="/images/SPANDHOT/Gochujang-Chicken-2.jpg"
                                alt="Delicious chicken wings being prepared"
                            />
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* ── Timeline ── */}
            <RevealSection className="about-timeline-section">
                <div className="container">
                    <h2 className="text-center highlight">Our Journey</h2>
                    <div className="about-timeline">
                        {timeline.map((item, i) => (
                            <div className="about-timeline-item" key={i}>
                                <div className="about-timeline-marker">
                                    <span className="about-timeline-year">{item.year}</span>
                                </div>
                                <div className="about-timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealSection>

            {/* ── Values / Why Us ── */}
            <RevealSection className="about-values-section">
                <div className="container">
                    <h2 className="text-center highlight">Why Chick Up?</h2>
                    <div className="about-values-grid">
                        <article className="about-value-card">
                            <div className="about-value-icon">🔥</div>
                            <h3>Bold Flavors</h3>
                            <p>
                                From fiery gochujang to tangy honey glaze, our wing flavors
                                pack a punch you won&apos;t forget.
                            </p>
                        </article>
                        <article className="about-value-card">
                            <div className="about-value-icon">🍗</div>
                            <h3>Always Fresh</h3>
                            <p>
                                No freezers, no shortcuts. Every batch is prepared to order
                                with the freshest ingredients.
                            </p>
                        </article>
                        <article className="about-value-card">
                            <div className="about-value-icon">💛</div>
                            <h3>Made With Love</h3>
                            <p>
                                Each wing is hand-tossed and carefully seasoned — because we
                                believe food tastes better with care.
                            </p>
                        </article>
                        <article className="about-value-card">
                            <div className="about-value-icon">🚀</div>
                            <h3>Fast Delivery</h3>
                            <p>
                                Hot wings delivered straight to your door. No cold wings,
                                no long waits — just perfection.
                            </p>
                        </article>
                    </div>
                </div>
            </RevealSection>

            {/* ── Gallery Strip ── */}
            <RevealSection className="about-gallery-section">
                <div className="container">
                    <h2 className="text-center highlight">Flavor Gallery</h2>
                    <div className="about-gallery-grid">
                        <div className="about-gallery-item">
                            <img src="/images/SPANDHOT/Gochujang-Chicken-2.jpg" alt="Gochujang Chicken" />
                        </div>
                        <div className="about-gallery-item">
                            <img src="/images/CLC/garlic-butter-chicken.jpg" alt="Garlic Butter" />
                        </div>
                        <div className="about-gallery-item">
                            <img src="/images/SWANDSAV/Honey-Mustard-Chicken-8.jpg" alt="Honey Mustard" />
                        </div>
                        <div className="about-gallery-item">
                            <img src="/images/ATW/Chicken-Shawarma-750x750.jpg" alt="Shawarma" />
                        </div>
                        <div className="about-gallery-item">
                            <img src="/images/CRMY/1d593bfaf1f50d9ea7d9d4cb863a949e.jpg" alt="Garlic Parmesan" />
                        </div>
                        <div className="about-gallery-item">
                            <img src="/images/DRY/cajun-dry-rub-chicken-wings-image-1.jpg" alt="Cajun Dry Rub" />
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* ── Team / Founder ── */}
            <RevealSection className="about-section">
                <div className="container">
                    <h2 className="text-center highlight">Meet the Team</h2>
                    <div className="about-team-grid">
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <span>VM</span>
                            </div>
                            <h3>Vincent Manalo</h3>
                            <span className="about-team-role">Founder &amp; Head Chef</span>
                            <p>
                                The mastermind behind every signature flavor. Vincent's
                                passion for wings started at age 7 — and never stopped.
                            </p>
                        </div>

                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <span>JL</span>
                            </div>
                            <h3>John Lemset Burgos</h3>
                            <span className="about-team-role">Co-Founder &amp; Marketing Manager</span>
                            <p>
                                The dedicated son of Taciana Burgos. Designed and developed the website.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealSection>

            {/* ── CTA ── */}
            <RevealSection className="about-cta-section">
                <div className="container text-center">
                    <h2>Ready to Taste the Difference?</h2>
                    <p className="about-cta-text">
                        Chick so good, you'll forget your ex.
                    </p>
                    <Link to="/categories" className="about-cta-btn">
                        Explore Our Menu
                    </Link>
                </div>
            </RevealSection>

            <Footer />
        </>
    );
}
