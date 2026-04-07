export const categories = [
    { id: 'spicy', label: 'Spicy & Hot', path: '/category/spicy' },
    { id: 'classic', label: 'Classic', path: '/category/classic' },
    { id: 'sweet', label: 'Sweet & Savory', path: '/category/sweet' },
    { id: 'world', label: 'Around the World', path: '/category/world' },
    { id: 'creamy', label: 'Creamy & Rich', path: '/category/creamy' },
    { id: 'dryrub', label: 'Dry Rub', path: '/category/dryrub' },
];

export const menuItems = {
    spicy: {
        title: 'Spicy and Hot Wings',
        description: 'Fiery and bold, our Hot & Spicy Wings pack a punch of flavor in every bite.',
        items: [
            { id: 's1', name: 'Peruvian-Style Spicy Wings', price: 150, img: '/images/SPANDHOT/DSC_0446.webp' },
            { id: 's2', name: 'Gochujang Chicken', price: 109, img: '/images/SPANDHOT/Gochujang-Chicken-2.jpg' },
            { id: 's3', name: 'Spicy Cajun Butter Chicken', price: 109, img: '/images/SPANDHOT/HERO-Cajun-Butter-Chicken-Breasts-1.jpg' },
            { id: 's4', name: 'Nashville Hot Chicken Wings', price: 109, img: '/images/SPANDHOT/OIP (1).webp' },
            { id: 's5', name: 'Spicy Honey Chipotle', price: 109, img: '/images/SPANDHOT/OIP (2).webp' },
            { id: 's6', name: 'Peri-peri Chicken', price: 109, img: '/images/SPANDHOT/OIP.webp' },
        ],
    },
    classic: {
        title: 'Classic Wings',
        description: 'Timeless classic wings, perfectly seasoned and cooked to golden perfection.',
        items: [
            { id: 'c1', name: 'BBQ Chicken Wings', price: 150, img: '/images/CLC/Baked-BBQ-Chicken-Wings.jpg' },
            { id: 'c2', name: 'Crispy Golden Fried Chicken', price: 109, img: '/images/CLC/crispy-golden-fried-chicken_1160231-5490.jpg' },
            { id: 'c3', name: 'Sweet And Spicy Wings', price: 109, img: '/images/CLC/Extra-Crispy-Sweet-and-Spicy-Wings-on-the-Grill-1-2.jpg' },
            { id: 'c4', name: 'Garlic Butter Chicken', price: 109, img: '/images/CLC/garlic-butter-chicken.jpg' },
            { id: 'c5', name: 'Garlic Herb Wings', price: 109, img: '/images/CLC/garlic-herb-chicken-wings-2-of-5.jpg' },
            { id: 'c6', name: 'Spicy Fried Chicken', price: 109, img: '/images/CLC/Spicy-Fried-Chicken_EXPS_FT24_276503_ST_0529_1.jpg' },
        ],
    },
    sweet: {
        title: 'Sweet and Savory Wings',
        description: 'Sweet and savory — perfectly balanced and simply irresistible.',
        items: [
            { id: 'sw1', name: 'Honey Mustard Chicken Breast', price: 150, img: '/images/SWANDSAV/Honey-Mustard-Chicken-8.jpg' },
            { id: 'sw2', name: 'Sticky Teriyaki Chicken Wings', price: 109, img: '/images/SWANDSAV/OIP (1).webp' },
            { id: 'sw3', name: 'Glazed Chicken Breasts', price: 109, img: '/images/SWANDSAV/OIP (2).webp' },
            { id: 'sw4', name: 'Buffalo Wings', price: 109, img: '/images/SWANDSAV/OIP.jpg' },
            { id: 'sw5', name: 'Honey Garlic Wings', price: 109, img: '/images/SWANDSAV/OIP.webp' },
            { id: 'sw6', name: 'Sweet Chili Chicken', price: 109, img: '/images/SWANDSAV/R.jpg' },
        ],
    },
    world: {
        title: 'Around the World Wings',
        description: 'Travel the world with every bite — bold, unique, and unforgettable.',
        items: [
            { id: 'w1', name: 'Chicken Shawarma Wrap', price: 150, img: '/images/ATW/Chicken-Shawarma-750x750.jpg' },
            { id: 'w2', name: 'Jamaican Jerk Chicken', price: 109, img: '/images/ATW/Jamaican-Jerk-Chicken.jpg' },
            { id: 'w3', name: 'Grilled Chicken Thighs', price: 109, img: '/images/ATW/OIP (1).webp' },
            { id: 'w4', name: 'Butter Chicken Wings', price: 109, img: '/images/ATW/OIP.webp' },
            { id: 'w5', name: 'Szechuan Chicken', price: 109, img: '/images/ATW/Szechuan-Chicken-Square-FS-18-500x500.webp' },
            { id: 'w6', name: 'Tandoori Chicken', price: 109, img: '/images/ATW/Tandoori-Chicken.jpg' },
        ],
    },
    creamy: {
        title: 'Creamy and Rich Wings',
        description: 'Lusciously creamy and deeply flavorful — indulgence in every bite.',
        items: [
            { id: 'cr1', name: 'Garlic Parmesan Chicken Wings', price: 150, img: '/images/CRMY/1d593bfaf1f50d9ea7d9d4cb863a949e.jpg' },
            { id: 'cr2', name: 'Chicken Fettuccine Alfredo', price: 109, img: '/images/CRMY/Chicken-Alfredo-Low-Res-21.webp' },
            { id: 'cr3', name: 'Ranch Wings', price: 109, img: '/images/CRMY/OIP (1).webp' },
            { id: 'cr4', name: 'Cheesy Jalapeño Chicken', price: 109, img: '/images/CRMY/OIP.webp' },
        ],
    },
    dryrub: {
        title: 'Dry Rub Chickens',
        description: 'Boldly seasoned, perfectly spiced, and irresistibly crisp.',
        items: [
            { id: 'd1', name: 'Air-Fried Chicken Wings', price: 150, img: '/images/DRY/3ce9d8601a402dc017bac3ebc5fd4ba1.jpg' },
            { id: 'd2', name: 'Cajun Dry Rub Chicken Wings', price: 109, img: '/images/DRY/cajun-dry-rub-chicken-wings-image-1.jpg' },
            { id: 'd3', name: 'Chinese Five Spice Chicken Wings', price: 109, img: '/images/DRY/OIP (1).webp' },
            { id: 'd4', name: 'Lemon-Garlic Herb Rubbed Chicken', price: 109, img: '/images/DRY/OIP.webp' },
            { id: 'd5', name: 'Grilled Chicken', price: 109, img: '/images/DRY/R.jpg' },
        ],
    },
};

export const featuredItems = [
    { id: 'f1', name: '6-pc Hot & Spicy Wings', price: 149, img: '/images/SPANDHOT/HERO-Cajun-Butter-Chicken-Breasts-1.jpg', detail: 'Crispy, fiery, and coated with our signature hot sauce blend.' },
    { id: 'f2', name: 'Garlic Butter Wings', price: 159, img: '/images/CLC/garlic-butter-chicken.jpg', detail: 'Rich garlic butter flavor with a crispy golden finish.' },
    { id: 'f3', name: 'Honey Glazed Wings', price: 169, img: '/images/CLC/OIP.webp', detail: 'Sweet, sticky, and perfectly balanced with savory notes.' },
];