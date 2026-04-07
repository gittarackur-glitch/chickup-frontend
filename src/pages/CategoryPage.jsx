import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuData';

export default function CategoryPage() {
    const { id } = useParams();
    const { addItem } = useCart();
    const category = menuItems[id];

    if (!category) return <p>Category not found.</p>;

    return (
        <>
            <Navbar activePage="categories" />

            <section className="category-details container">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <div className="menu-items">
                    {category.items.map(item => (
                        <article className="food-menu-box" key={item.id}>
                            <div className="food-menu-img">
                                <img src={item.img} alt={item.name} className="img-responsive img-curve" />
                            </div>
                            <div className="food-menu-desc">
                                <h4>{item.name}</h4>
                                <p className="food-price">&#8369;{item.price}</p>
                                <button className="btn-add-cart" onClick={() => addItem(item)}>+ Add to Cart</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
