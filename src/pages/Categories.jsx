import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { categories, featuredItems } from '../data/menuData';

export default function Categories() {
    const { addItem } = useCart();

    return (
        <>
            <Navbar activePage="categories" />

            <section className="categories">
                <div className="container">
                    <h2 className="text-center highlight">
                        Explore Our Wing Flavors
                    </h2>
                    {categories.map(cat => (
                        <Link key={cat.id} to={cat.path} className="card-link">
                            <article className="box-3 float-container">
                                <h3 className="float-text text-white">{cat.label}</h3>
                            </article>
                        </Link>
                    ))}
                    <div className="clearfix"></div>
                </div>
            </section>

            <section className="food-menu">
                <div className="container">
                    <h2 className="text-center text-white">Featured Wings &amp; Meals</h2>
                    {featuredItems.map(item => (
                        <article className="food-menu-box" key={item.id}>
                            <div className="food-menu-img">
                                <img src={item.img} alt={item.name} className="img-responsive" />
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
