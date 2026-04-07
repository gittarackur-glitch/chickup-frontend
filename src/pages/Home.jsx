import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { categories, featuredItems } from '../data/menuData';

export default function Home() {
    const { addItem } = useCart();
    return (
        <>
            <Navbar activePage="home" />

            <section className="categories">
                <div className="container">
                    <h2 className="text-center highlight" style={{ color: 'white', textShadow: '2px 2px 5px rgba(0,0,0,0.8)' }}>
                        Explore Our Wing Flavors
                    </h2>
                    <Link to="/category/spicy" className="card-link">
                        <article className="box-3 float-container">
                            <img src="/images/SPANDHOT/Gochujang-Chicken-2.jpg" alt="Hot Wings" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Hot &amp; Spicy</h3>
                        </article>
                    </Link>
                    <Link to="/category/classic" className="card-link">
                        <article className="box-3 float-container">
                            <img src="/images/CLC/garlic-herb-chicken-wings-2-of-5.jpg" alt="Garlic Wings" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Garlic Butter</h3>
                        </article>
                    </Link>
                    <Link to="/category/dryrub" className="card-link">
                        <article className="box-3 float-container">
                            <img src="/images/DRY/OIP.webp" alt="Honey Wings" className="img-responsive img-curve" />
                            <h3 className="float-text text-white">Honey Glaze</h3>
                        </article>
                    </Link>
                    <div className="clearfix"></div>
                </div>
            </section>

            <section className="food-menu">
                <div className="container">
                    <h2 className="text-center text-white">Featured Wings &amp; Meals</h2>
                    {featuredItems.map(item => (
                        <article className="food-menu-box" key={item.id}>
                            <div className="food-menu-img">
                                <img src={item.img} alt={item.name} className="img-responsive img-curve" />
                            </div>
                            <div className="food-menu-desc">
                                <h4>{item.name}</h4>
                                <p className="food-price">&#8369;{item.price}</p>
                                <p className="food-detail">{item.detail}</p>
                                <button className="btn-add-cart" onClick={() => addItem(item)}>+ Add to Cart</button>
                            </div>
                        </article>
                    ))}
                    <div className="clearfix"></div>
                </div>
            </section>

            <Footer />
        </>
    );
}