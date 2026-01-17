import React, { useState, useContext, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, AnimatedCounter, VideoBackground, TiltCard, GlowEffect } from '../effects';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  Pizza, 
  Heart, 
  Users,
  Award,
  Flame,
  ChevronRight,
  User,
  CreditCard,
  Check,
  X
} from 'lucide-react';

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
      const existingIndex = state.items.findIndex(item => 
        item.id === action.payload.id && 
        JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
      );
      
      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1, cartId: Date.now() }]
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload.cartId)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
    
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  
  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = subtotal > 25 ? 0 : 2.99;
  const total = subtotal + tax + deliveryFee;
  
  return (
    <CartContext.Provider value={{ 
      ...state, 
      dispatch, 
      subtotal, 
      tax, 
      deliveryFee, 
      total,
      itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

// Menu Data
const menuItems = [
  {
    id: 1,
    name: "Margherita Classic",
    price: 16,
    category: "signature",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400",
    description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil"
  },
  {
    id: 2,
    name: "Brooklyn Supreme",
    price: 22,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    description: "Pepperoni, Italian sausage, mushrooms, bell peppers, red onions"
  },
  {
    id: 3,
    name: "Meat Lovers Deluxe",
    price: 24,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
    description: "Pepperoni, sausage, bacon, ham, ground beef, mozzarella"
  },
  {
    id: 4,
    name: "White Truffle",
    price: 26,
    category: "gourmet",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    description: "Truffle oil, ricotta, mozzarella, arugula, prosciutto"
  },
  {
    id: 5,
    name: "Veggie Garden",
    price: 19,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400",
    description: "Roasted vegetables, goat cheese, pesto, sun-dried tomatoes"
  },
  {
    id: 6,
    name: "Spicy Calabrian",
    price: 21,
    category: "specialty",
    image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400",
    description: "Calabrian peppers, spicy salami, honey, mozzarella, basil"
  }
];

const appetizers = [
  { id: 10, name: "Garlic Knots", price: 8, description: "Fresh baked with herbs" },
  { id: 11, name: "Burrata Caprese", price: 14, description: "Fresh burrata, tomatoes, basil" },
  { id: 12, name: "Antipasto Platter", price: 16, description: "Cured meats, cheese, olives" }
];

const HomePage = () => {
  const { dispatch, itemCount } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Pizzas' },
    { id: 'signature', name: 'Signature' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'gourmet', name: 'Gourmet' },
    { id: 'vegetarian', name: 'Vegetarian' }
  ];

  return (
    <CartProvider>
      <div style={{ fontFamily: THEME.fonts.body, color: THEME.text }}>
        {/* Video Hero Section */}
        <VideoBackground
          videoSrc="https://videos.pexels.com/video-files/4253291/4253291-uhd_2560_1440_25fps.mp4"
          posterImage="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920"
          overlay="linear-gradient(rgba(139, 0, 0, 0.8), rgba(44, 24, 16, 0.85))"
          height="100vh"
        >
          <div style={{ 
            textAlign: 'center', 
            color: 'white', 
            maxWidth: '900px', 
            padding: '0 20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{ 
              fontSize: window.innerWidth < 768 ? '36px' : '64px', 
              fontFamily: THEME.fonts.heading,
              marginBottom: '24px',
              fontWeight: 'bold'
            }}>
              Authentic Brooklyn Pizza
            </h1>
            <p style={{ 
              fontSize: window.innerWidth < 768 ? '18px' : '24px', 
              opacity: 0.95, 
              marginBottom: '40px',
              lineHeight: 1.5
            }}>
              Three generations of traditional Italian recipes, served fresh from our wood-fired ovens since 1985
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/menu" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: `linear-gradient(135deg, ${THEME.colors.primary}, #A52A2A)`,
                  color: 'white',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(139, 0, 0, 0.3)',
                  transition: 'transform 0.2s'
                }}>
                  Order Now
                </button>
              </Link>
              <button style={{
                background: 'rgba(255, 215, 0, 0.2)',
                color: 'white',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: '600',
                border: '2px solid #FFD700',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}>
                View Menu
              </button>
            </div>
          </div>
        </VideoBackground>

        {/* Floating Cart Button */}
        {itemCount > 0 && (
          <button
            onClick={() => setShowCart(true)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: THEME.colors.primary,
              color: 'white',
              padding: '16px',
              borderRadius: '50%',
              border: 'none',
              boxShadow: '0 4px 20px rgba(139, 0, 0, 0.4)',
              cursor: 'pointer',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShoppingCart size={24} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: THEME.colors.accent,
              color: THEME.text,
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {itemCount}
            </span>
          </button>
        )}

        {/* Pizza Gallery */}
        <ScrollReveal>
          <section style={{ 
            padding: `${THEME.spacing.sectionPadding} 20px`,
            background: THEME.background
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{
                  fontSize: window.innerWidth < 768 ? '32px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '20px'
                }}>
                  Handcrafted Perfection
                </h2>
                <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                  Every pizza is made to order with the finest ingredients and baked in our traditional wood-fired oven
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
              }}>
                {menuItems.slice(0, 4).map(item => (
                  <TiltCard key={item.id}>
                    <div style={{
                      background: 'white',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      transition: 'transform 0.3s, box-shadow 0.3s'
                    }}>
                      <div style={{ position: 'relative' }}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          style={{ 
                            width: '100%', 
                            height: '240px', 
                            objectFit: 'cover'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          background: THEME.colors.primary,
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}>
                          ${item.price}
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        <h3 style={{
                          fontSize: '24px',
                          fontFamily: THEME.fonts.heading,
                          color: THEME.colors.primary,
                          marginBottom: '12px'
                        }}>
                          {item.name}
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          lineHeight: 1.6,
                          marginBottom: '20px'
                        }}>
                          {item.description}
                        </p>
                        <GlowEffect color={THEME.colors.primary}>
                          <button 
                            onClick={() => addToCart(item)}
                            style={{
                              width: '100%',
                              background: `linear-gradient(135deg, ${THEME.colors.primary}, #A52A2A)`,
                              color: 'white',
                              padding: '14px',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              transition: 'transform 0.2s'
                            }}
                          >
                            <Plus size={20} />
                            Add to Cart
                          </button>
                        </GlowEffect>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Menu Highlights Section */}
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '32px' : '48px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '20px'
              }}>
                Featured Menu
              </h2>
            </div>

            {/* Category Filter */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px'
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '12px 24px',
                    background: selectedCategory === category.id ? THEME.colors.primary : 'transparent',
                    color: selectedCategory === category.id ? 'white' : THEME.colors.primary,
                    border: `2px solid ${THEME.colors.primary}`,
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {filteredItems.map(item => (
                <div key={item.id} style={{
                  background: THEME.surface,
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '12px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: THEME.colors.primary,
                      marginBottom: '8px'
                    }}>
                      {item.name}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      marginBottom: '12px',
                      lineHeight: 1.4
                    }}>
                      {item.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: THEME.colors.primary
                      }}>
                        ${item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        style={{
                          background: THEME.colors.primary,
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '8px 16px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Plus size={16} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Story */}
        <ScrollReveal>
          <section style={{
            padding: `${THEME.spacing.sectionPadding} 20px`,
            background: THEME.background
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                gap: '60px',
                alignItems: 'center'
              }}>
                <div>
                  <h2 style={{
                    fontSize: window.innerWidth < 768 ? '32px' : '48px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    marginBottom: '24px'
                  }}>
                    Three Generations of Tradition
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: '#4b5563',
                    marginBottom: '24px'
                  }}>
                    Founded in 1985 by Nonna Rosa, our family recipe has been passed down through three generations. 
                    What started as a small neighborhood pizzeria has grown into Brooklyn's most beloved Italian eatery.
                  </p>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: '#4b5563',
                    marginBottom: '32px'
                  }}>
                    We still hand-toss our dough daily and import our San Marzano tomatoes directly from Italy. 
                    Every bite tells the story of authentic Italian tradition.
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '40px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <AnimatedCounter end={38} suffix=" Years" duration={2} />
                      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>Experience</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <AnimatedCounter end={12000} suffix="+" duration={2.5} />
                      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>Happy Customers</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <AnimatedCounter end={98} suffix="%" duration={2} />
                      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '500px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Daily Specials */}
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: THEME.colors.primary,
          color: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              marginBottom: '60px'
            }}>
              Daily Specials
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: '32px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '32px',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <Flame size={48} style={{ color: THEME.colors.accent, marginBottom: '20px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '16px'
                }}>
                  Pizza Monday
                </h3>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>
                  Buy any large pizza, get a second one 50% off
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '32px',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <Users size={48} style={{ color: THEME.colors.accent, marginBottom: '20px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '16px'
                }}>
                  Family Night
                </h3>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>
                  Wednesday family meals starting at $39.99 for 4 people
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '32px',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)'
              }}>
                <Award size={48} style={{ color: THEME.colors.accent, marginBottom: '20px' }} />
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '16px'
                }}>
                  Weekend Special
                </h3>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>
                  Free appetizer with any specialty pizza order
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <ScrollReveal>
          <section style={{
            padding: `${THEME.spacing.sectionPadding} 20px`,
            background: 'white'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{
                  fontSize: window.innerWidth < 768 ? '32px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '20px'
                }}>
                  What Our Customers Say
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
                gap: '32px'
              }}>
                {[
                  { name: 'Maria S.', rating: 5, text: 'Best pizza in Brooklyn! The crust is perfectly crispy and the ingredients are so fresh.' },
                  { name: 'Tony R.', rating: 5, text: 'Been coming here for 15 years. Nonna Rosa\'s recipes are unmatched. Feels like home!' },
                  { name: 'Jennifer L.', rating: 5, text: 'Amazing service and incredible flavors. The Brooklyn Supreme is our family favorite!' }
                ].map((review, index) => (
                  <div key={index} style={{
                    background: THEME.surface,
                    padding: '32px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '4px',
                      marginBottom: '16px'
                    }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} />
                      ))}
                    </div>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: '#4b5563',
                      marginBottom: '20px'
                    }}>
                      "{review.text}"
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: THEME.colors.primary,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {review.name.charAt(0)}
                      </div>
                      <span style={{ fontWeight: '600', color: THEME.colors.primary }}>
                        {review.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Hours & Location */}
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: THEME.background
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
              gap: '60px'
            }}>
              <div>
                <h2 style={{
                  fontSize: window.innerWidth < 768 ? '28px' : '36px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Clock size={32} />
                  Hours & Location
                </h2>
                
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    marginBottom: '16px'
                  }}>
                    Opening Hours
                  </h3>
                  <div style={{ space: '12px' }}>
                    {[
                      { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
                      { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
                      { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
                    ].map((schedule, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '8px 0',
                        borderBottom: '1px solid #e5e7eb'
                      }}>
                        <span style={{ fontWeight: '500' }}>{schedule.day}</span>
                        <span style={{ color: '#6b7280' }}>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: THEME.colors.primary,
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <MapPin size={20} />
                    Visit Us
                  </h3>
                  <p style={{ fontSize: '16px', color: '#4b5563', marginBottom: '12px' }}>
                    1847 Atlantic Avenue<br />
                    Brooklyn, NY 11216
                  </p>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Phone size={16} />
                    (718) 555-PIZZA
                  </p>
                </div>
              </div>

              <div style={{
                background: '#f3f4f6',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: THEME.colors.primary
                }}>
                  Order Options
                </h3>
                
                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    🚚 Free Delivery
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>
                    Orders over $25 • 30-45 min delivery time
                  </p>
                </div>

                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    🥡 Takeout Ready
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>
                    Order ahead • Pick up in 15-20 minutes
                  </p>
                </div>

                <div style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                    🍽️ Dine-In Available
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>
                    Family seating • Authentic Italian atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          background: `linear-gradient(135deg, ${THEME.colors.primary}, #A52A2A)`,
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: window.innerWidth < 768 ? '32px' : '48px',
              fontFamily: THEME.fonts.heading,
              marginBottom: '20px'
            }}>
              Ready for Authentic Italian?
            </h2>
            <p style={{
              fontSize: '20px',
              marginBottom: '32px',
              opacity: 0.9
            }}>
              Order now for delivery or pickup. Experience three generations of Italian tradition.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/menu" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'white',
                  color: THEME.colors.primary,
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Pizza size={20} />
                  Order Online
                </button>
              </Link>
              <a href="tel:(718)555-PIZZA" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: '600',
                  border: '2px solid white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Phone size={20} />
                  Call to Order
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </CartProvider>
  );
};

export default HomePage;