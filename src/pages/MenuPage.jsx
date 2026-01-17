import React, { useState, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, VideoBackground, TiltCard, AnimatedCounter } from '../effects';
import { Plus, Minus, ShoppingCart, Star, Clock, MapPin, Phone, ChevronDown, Heart, Filter } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#8B0000', 
    accent: '#FFD700', 
    background: '#faf7f2', 
    text: '#2c1810', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'Playfair Display', Georgia, serif", body: "'Lato', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

// Cart Context
const CartContext = React.createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id && 
            JSON.stringify(item.customizations) === JSON.stringify(existingItem.customizations)
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1, cartId: Date.now() }]
      };
      
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };
      
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });
  
  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeFromCart = (cartId) => dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  const updateQuantity = (cartId, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  
  const cartTotal = cartState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{
      items: cartState.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedFilters, setSelectedFilters] = useState([]);

  const menuData = {
    pizzas: [
      {
        id: 1,
        name: "Brooklyn Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
        price: 16,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        tags: ["vegetarian", "classic"]
      },
      {
        id: 2,
        name: "Nonna's Meat Supreme",
        description: "Pepperoni, Italian sausage, salami, pancetta, mozzarella, marinara",
        price: 22,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
        tags: ["meat", "popular"]
      },
      {
        id: 3,
        name: "Williamsburg White",
        description: "Ricotta, mozzarella, parmesan, roasted garlic, fresh herbs",
        price: 18,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400",
        tags: ["vegetarian", "white"]
      },
      {
        id: 4,
        name: "Prosciutto & Arugula",
        description: "Prosciutto di Parma, wild arugula, cherry tomatoes, fresh mozzarella",
        price: 20,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        tags: ["premium", "meat"]
      },
      {
        id: 5,
        name: "Spicy Diavola",
        description: "Spicy salami, calabrian chilies, roasted peppers, mozzarella, marinara",
        price: 19,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
        tags: ["spicy", "meat"]
      },
      {
        id: 6,
        name: "Garden Veggie Deluxe",
        description: "Roasted peppers, mushrooms, red onions, olives, sun-dried tomatoes",
        price: 17,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400",
        tags: ["vegetarian", "healthy"]
      }
    ],
    appetizers: [
      {
        id: 10,
        name: "Nonna's Bruschetta",
        description: "Grilled ciabatta, vine tomatoes, fresh basil, aged balsamic",
        price: 12,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
      },
      {
        id: 11,
        name: "Antipasto Siciliano",
        description: "Cured meats, aged cheeses, marinated vegetables, olives",
        price: 18,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
      },
      {
        id: 12,
        name: "Calamari Fritti",
        description: "Golden fried squid rings, marinara sauce, lemon wedges",
        price: 14,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
      }
    ],
    salads: [
      {
        id: 20,
        name: "Caesar Romana",
        description: "Crisp romaine, house-made croutons, parmesan, anchovy dressing",
        price: 13,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
      },
      {
        id: 21,
        name: "Caprese Salad",
        description: "Buffalo mozzarella, vine tomatoes, fresh basil, balsamic glaze",
        price: 15,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
      }
    ],
    desserts: [
      {
        id: 30,
        name: "Tiramisu Della Casa",
        description: "Classic ladyfingers, espresso, mascarpone, cocoa dust",
        price: 8,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
      },
      {
        id: 31,
        name: "Cannoli Siciliani",
        description: "Crispy shells filled with sweet ricotta and chocolate chips",
        price: 7,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
      }
    ]
  };

  const categories = [
    { id: 'pizzas', name: 'Pizzas', count: 6 },
    { id: 'appetizers', name: 'Appetizers', count: 3 },
    { id: 'salads', name: 'Salads', count: 2 },
    { id: 'desserts', name: 'Desserts', count: 2 }
  ];

  const filters = ['vegetarian', 'meat', 'spicy', 'popular', 'classic', 'premium'];

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  const filteredItems = selectedFilters.length === 0 
    ? menuData[activeCategory] 
    : menuData[activeCategory].filter(item => 
        item.tags && item.tags.some(tag => selectedFilters.includes(tag))
      );

  const styles = {
    page: {
      fontFamily: THEME.fonts.body,
      color: THEME.text,
      backgroundColor: THEME.background,
      minHeight: '100vh'
    },
    hero: {
      position: 'relative',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    heroContent: {
      color: '#ffffff',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      maxWidth: '800px',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      marginBottom: '30px',
      lineHeight: '1.4'
    },
    menuContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px'
    },
    stickyNav: {
      position: 'sticky',
      top: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(139, 0, 0, 0.1)',
      zIndex: 100,
      padding: '20px 0'
    },
    categoryTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    categoryTab: {
      padding: '12px 24px',
      border: 'none',
      backgroundColor: 'transparent',
      color: THEME.text,
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    categoryTabActive: {
      backgroundColor: THEME.primary,
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
    },
    filterSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '10px'
    },
    filterButton: {
      padding: '6px 16px',
      border: `1px solid ${THEME.primary}`,
      backgroundColor: 'transparent',
      color: THEME.primary,
      fontSize: '14px',
      cursor: 'pointer',
      borderRadius: '20px',
      transition: 'all 0.2s ease'
    },
    filterButtonActive: {
      backgroundColor: THEME.primary,
      color: 'white'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginTop: '40px'
    },
    menuCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    menuCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(139, 0, 0, 0.15)'
    },
    menuImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    menuContent: {
      padding: '24px'
    },
    menuName: {
      fontSize: '22px',
      fontFamily: THEME.fonts.heading,
      fontWeight: '600',
      marginBottom: '8px',
      color: THEME.text
    },
    menuDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '16px'
    },
    menuFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    menuPrice: {
      fontSize: '20px',
      fontWeight: '700',
      color: THEME.primary
    },
    addButton: {
      backgroundColor: THEME.primary,
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    favoriteButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    cartButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: THEME.primary,
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      padding: '15px 25px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 20px rgba(139, 0, 0, 0.3)',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    },
    cartOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    cartModal: {
      backgroundColor: 'white',
      borderRadius: '16px',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto',
      padding: '30px'
    },
    statsSection: {
      backgroundColor: THEME.primary,
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '700',
      fontFamily: THEME.fonts.heading,
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      opacity: 0.9
    },
    infoSection: {
      backgroundColor: 'white',
      padding: '60px 20px',
      textAlign: 'center'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    infoCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    },
    infoIcon: {
      width: '50px',
      height: '50px',
      backgroundColor: THEME.accent,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: THEME.text
    },
    infoTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: THEME.text
    },
    infoText: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5'
    }
  };

  return (
    <CartProvider>
      <div style={styles.page}>
        {/* Hero Section */}
        <VideoBackground
          videoSrc="https://videos.pexels.com/video-files/4253291/4253291-uhd_2560_1440_25fps.mp4"
          posterImage="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920"
          overlay="linear-gradient(rgba(10, 22, 40, 0.7), rgba(10, 22, 40, 0.85))"
          height="60vh"
        >
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Authentic Brooklyn Pizza</h1>
            <p style={styles.heroSubtitle}>Four generations of Italian tradition, served fresh daily</p>
          </div>
        </VideoBackground>

        {/* Stats Section */}
        <ScrollReveal>
          <div style={styles.statsSection}>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>
                  <AnimatedCounter end={12} suffix="+" duration={2} />
                </div>
                <div style={styles.statLabel}>Years Serving Brooklyn</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>
                  <AnimatedCounter end={5000} suffix="+" duration={2.5} />
                </div>
                <div style={styles.statLabel}>Happy Customers</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>
                  <AnimatedCounter end={15000} suffix="+" duration={2.2} />
                </div>
                <div style={styles.statLabel}>Pizzas Served</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>
                  <AnimatedCounter end={98} suffix="%" duration={2} />
                </div>
                <div style={styles.statLabel}>Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Menu Navigation */}
        <div style={styles.stickyNav}>
          <div style={styles.categoryTabs}>
            {categories.map(category => (
              <button
                key={category.id}
                style={{
                  ...styles.categoryTab,
                  ...(activeCategory === category.id ? styles.categoryTabActive : {})
                }}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <span style={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  borderRadius: '12px', 
                  padding: '2px 8px', 
                  fontSize: '12px' 
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Filters */}
          {activeCategory === 'pizzas' && (
            <div style={styles.filterSection}>
              {filters.map(filter => (
                <button
                  key={filter}
                  style={{
                    ...styles.filterButton,
                    ...(selectedFilters.includes(filter) ? styles.filterButtonActive : {})
                  }}
                  onClick={() => {
                    setSelectedFilters(prev => 
                      prev.includes(filter) 
                        ? prev.filter(f => f !== filter)
                        : [...prev, filter]
                    );
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div style={styles.menuContainer}>
          <ScrollReveal>
            <div style={styles.menuGrid}>
              {filteredItems.map(item => (
                <MenuItemCard 
                  key={item.id} 
                  item={item} 
                  favorites={favorites} 
                  toggleFavorite={toggleFavorite}
                  styles={styles}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Info Section */}
        <div style={styles.infoSection}>
          <div style={styles.infoGrid}>
            <TiltCard>
              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <Clock size={24} />
                </div>
                <div style={styles.infoTitle}>Hours</div>
                <div style={styles.infoText}>
                  Mon-Thu: 11am-10pm<br/>
                  Fri-Sat: 11am-11pm<br/>
                  Sun: 12pm-9pm
                </div>
              </div>
            </TiltCard>
            
            <TiltCard>
              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <MapPin size={24} />
                </div>
                <div style={styles.infoTitle}>Location</div>
                <div style={styles.infoText}>
                  245 Court Street<br/>
                  Brooklyn, NY 11201<br/>
                  Free parking available
                </div>
              </div>
            </TiltCard>
            
            <TiltCard>
              <div style={styles.infoCard}>
                <div style={styles.infoIcon}>
                  <Phone size={24} />
                </div>
                <div style={styles.infoTitle}>Order Now</div>
                <div style={styles.infoText}>
                  (718) 555-PIZZA<br/>
                  Delivery & Takeout<br/>
                  Catering Available
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        <CartFloatingButton styles={styles} />
      </div>
    </CartProvider>
  );
};

const MenuItemCard = ({ item, favorites, toggleFavorite, styles }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TiltCard>
      <div 
        style={{
          ...styles.menuCard,
          ...(isHovered ? styles.menuCardHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          style={{
            ...styles.favoriteButton,
            color: favorites.has(item.id) ? '#ff4444' : '#666'
          }}
          onClick={() => toggleFavorite(item.id)}
        >
          <Heart size={18} fill={favorites.has(item.id) ? '#ff4444' : 'none'} />
        </button>
        
        <img 
          src={item.image} 
          alt={item.name} 
          style={styles.menuImage}
        />
        
        <div style={styles.menuContent}>
          <h3 style={styles.menuName}>{item.name}</h3>
          <p style={styles.menuDescription}>{item.description}</p>
          
          {item.tags && (
            <div style={{ marginBottom: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {item.tags.map(tag => (
                <span 
                  key={tag}
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div style={styles.menuFooter}>
            <span style={styles.menuPrice}>${item.price}</span>
            <button 
              style={styles.addButton}
              onClick={() => addToCart(item)}
            >
              <Plus size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const CartFloatingButton = ({ styles }) => {
  const { itemCount, cartTotal, items } = useCart();
  const [showCart, setShowCart] = useState(false);

  if (itemCount === 0) return null;

  return (
    <>
      <button 
        style={styles.cartButton}
        onClick={() => setShowCart(true)}
      >
        <ShoppingCart size={20} />
        {itemCount} items - ${cartTotal.toFixed(2)}
      </button>

      {showCart && <CartModal onClose={() => setShowCart(false)} styles={styles} />}
    </>
  );
};

const CartModal = ({ onClose, styles }) => {
  const { items, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div style={styles.cartOverlay} onClick={onClose}>
      <div style={styles.cartModal} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontFamily: THEME.fonts.heading }}>Your Order</h2>
          <button 
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        {items.map(item => (
          <div key={item.cartId} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '15px 0',
            borderBottom: '1px solid #eee'
          }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>${item.price}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                style={{ border: 'none', background: '#f0f0f0', borderRadius: '4px', width: '30px', height: '30px' }}
                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
              >
                <Minus size={16} />
              </button>
              <span>{item.quantity}</span>
              <button 
                style={{ border: 'none', background: '#f0f0f0', borderRadius: '4px', width: '30px', height: '30px' }}
                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
        
        <div style={{ 
          marginTop: '20px', 
          paddingTop: '20px', 
          borderTop: '2px solid #eee',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>
            Total: ${cartTotal.toFixed(2)}
          </div>
          <Link 
            to="/checkout"
            style={{
              display: 'inline-block',
              backgroundColor: THEME.primary,
              color: 'white',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;