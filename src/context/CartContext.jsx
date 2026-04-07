import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [toastMsg, setToastMsg] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const addItem = useCallback((item) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...item, qty: 1 }];
        });
        setToastMsg(`${item.name} added to cart!`);
        setTimeout(() => setToastMsg(''), 2500);
    }, []);

    const removeItem = useCallback((id) => {
        setItems(prev => prev.filter(i => i.id !== id));
    }, []);

    const updateQty = useCallback((id, delta) => {
        setItems(prev =>
            prev
                .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
                .filter(i => i.qty > 0)
        );
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const count = items.reduce((sum, i) => sum + i.qty, 0);

    return (
        <CartContext.Provider value={{
            items, addItem, removeItem, updateQty, clearCart,
            total, count, toastMsg,
            sidebarOpen, setSidebarOpen,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}