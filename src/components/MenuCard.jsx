import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
    const { addItem } = useCart();
    return (
        <div className="box-3 float-container">
            <img src={item.img} alt={item.name} className="img-responsive img-curve" />
            <h2>{item.name}</h2>
            <p className="price">&#8369;{item.price} / 6 pcs</p>
            <button className="btn-add-cart" onClick={() => addItem(item)}>
                + Add to Cart
            </button>
        </div>
    );
}