import { useLocation } from "react-router-dom";
import { menuItems, categories } from "../data/menuData";

export default function SearchResults() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const q = params.get("q")?.toLowerCase() || "";

    // Flatten all items from menuItems
    const allItems = Object.values(menuItems).flatMap(cat => cat.items);

    // Search both categories and items
    const matchedCategories = categories.filter(cat =>
        cat.label.toLowerCase().includes(q)
    );
    const matchedItems = allItems.filter(item =>
        item.name.toLowerCase().includes(q)
    );

    return (
        <section className="container">
            <h2 className="text-center text-white">Search Results for "{q}"</h2>

            {matchedCategories.length > 0 && (
                <>
                    <h3 className="text-white">Matching Categories</h3>
                    <div className="categories-list">
                        {matchedCategories.map(cat => (
                            <div key={cat.id} className="box-3">
                                <a href={cat.path} className="card-link">
                                    <h4 className="category-text">{cat.label}</h4>
                                </a>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {matchedItems.length > 0 && (
                <>
                    <h3 className="text-white">Matching Items</h3>
                    {matchedItems.map(item => (
                        <article key={item.id} className="food-menu-box">
                            <div className="food-menu-img">
                                <img src={item.img} alt={item.name} className="img-responsive img-curve" />
                            </div>
                            <div className="food-menu-desc">
                                <h4>{item.name}</h4>
                                <p className="food-price">&#8369;{item.price}</p>
                            </div>
                        </article>
                    ))}
                </>
            )}

            {matchedCategories.length === 0 && matchedItems.length === 0 && (
                <p className="text-white">No results found.</p>
            )}
        </section>
    );
}
