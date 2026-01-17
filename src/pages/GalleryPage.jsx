import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Camera, Clock, MapPin, Star } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#2c1810', 
    accent: '#c4a35a', 
    background: '#faf7f2', 
    text: '#2c1810', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "'Playfair Display', Georgia, serif", body: "'Lato', system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const GalleryPage = () => {
  return (
    <div style={{ 
      backgroundColor: THEME.colors.background,
      minHeight: '100vh',
      paddingTop: THEME.spacing.sectionPadding,
      paddingBottom: THEME.spacing.sectionPadding
    }}>
      {/* Hero Gallery Section */}
      <div style={{ 
        position: 'relative',
        height: '60vh',
        overflow: 'hidden',
        marginBottom: '60px'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10
        }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '4rem',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Our Story in Pictures
          </h1>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Every slice tells a story, every moment creates a memory
          </p>
        </div>
      </div>

      {/* Masonry Gallery Layout */}
      <div style={{ padding: '0 40px', marginBottom: '80px' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          gridAutoRows: '200px'
        }}>
          {/* Large Featured Image */}
          <div style={{
            gridRowEnd: 'span 2',
            gridColumnEnd: 'span 2',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Signature Pizza" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>
              <h3 style={{ fontFamily: THEME.fonts.heading, fontSize: '1.8rem', margin: '0' }}>
                Our Signature Margherita
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                <Star size={16} fill="gold" color="gold" />
                <span style={{ marginLeft: '5px', fontFamily: THEME.fonts.body }}>Chef's Special</span>
              </div>
            </div>
          </div>

          {/* Kitchen Action */}
          <div style={{
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Kitchen" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: THEME.colors.accent,
              color: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontFamily: THEME.fonts.body
            }}>
              <Camera size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              Behind the Scenes
            </div>
          </div>

          {/* Pepperoni Close-up */}
          <div style={{
            gridRowEnd: 'span 2',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Pepperoni Pizza" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(transparent 60%, rgba(44, 24, 16, 0.8))',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px'
            }}>
              <div style={{ color: 'white' }}>
                <h4 style={{ fontFamily: THEME.fonts.heading, fontSize: '1.3rem', margin: '0 0 5px 0' }}>
                  Classic Pepperoni
                </h4>
                <p style={{ fontFamily: THEME.fonts.body, fontSize: '0.9rem', margin: '0', opacity: '0.9' }}>
                  Hand-stretched dough, premium pepperoni
                </p>
              </div>
            </div>
          </div>

          {/* Restaurant Interior */}
          <div style={{
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Restaurant Interior" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Fresh Ingredients */}
          <div style={{
            gridColumnEnd: 'span 2',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Fresh Ingredients" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>
              <h3 style={{ fontFamily: THEME.fonts.heading, fontSize: '2rem', margin: '0' }}>
                Fresh Daily Ingredients
              </h3>
            </div>
          </div>

          {/* Wood Fired Oven */}
          <div style={{
            gridRowEnd: 'span 2',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1593560708920-61dd47ded0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Wood Fired Oven" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              right: '15px',
              backgroundColor: 'rgba(44, 24, 16, 0.9)',
              color: 'white',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontFamily: THEME.fonts.heading, fontSize: '1.2rem', margin: '0 0 5px 0' }}>
                Wood-Fired Perfection
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={14} />
                <span style={{ marginLeft: '5px', fontFamily: THEME.fonts.body, fontSize: '0.9rem' }}>
                  900°F Traditional Oven
                </span>
              </div>
            </div>
          </div>

          {/* Happy Customers */}
          <div style={{
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(44, 24, 16, 0.15)'
          }}>
            <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Happy Customers" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'rgba(196, 163, 90, 0.9)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '15px',
              fontSize: '0.8rem',
              fontFamily: THEME.fonts.body
            }}>
              <Heart size={12} style={{ marginRight: '3px', verticalAlign: 'middle' }} />
              Happy Moments
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        backgroundColor: THEME.colors.primary,
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
        margin: '0 40px',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontFamily: THEME.fonts.heading,
          fontSize: '2.5rem',
          marginBottom: '20px'
        }}>
          Ready to Create Your Own Memory?
        </h2>
        <p style={{
          fontFamily: THEME.fonts.body,
          fontSize: '1.1rem',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          Join us for an authentic Brooklyn pizza experience
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/menu" style={{
            backgroundColor: THEME.colors.accent,
            color: 'white',
            padding: '15px 30px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontFamily: THEME.fonts.body,
            fontWeight: 'bold',
            transition: 'transform 0.3s ease'
          }}>
            View Our Menu
          </Link>
          <Link to="/contact" style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '15px 30px',
            border: '2px solid white',
            borderRadius: '30px',
            textDecoration: 'none',
            fontFamily: THEME.fonts.body,
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}>
            <MapPin size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;