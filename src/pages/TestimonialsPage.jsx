import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, MapPin, Calendar, Clock } from 'lucide-react';

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

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      location: "Park Slope Resident",
      rating: 5,
      date: "2 weeks ago",
      text: "This place transported me straight back to my nonna's kitchen in Sicily. The margherita pizza has that perfect char, and the sauce... Madonna! It's like they bottled pure sunshine and tomatoes.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      dish: "Margherita Pizza",
      mood: "nostalgic"
    },
    {
      id: 2,
      name: "James Chen",
      location: "Food Blogger",
      rating: 5,
      date: "1 month ago",
      text: "I've reviewed over 200 pizza spots in NYC, and this gem in Brooklyn just became my #1. The dough has a complexity that speaks to true craftsmanship - 72-hour fermentation shows.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      dish: "Quattro Stagioni",
      mood: "professional"
    },
    {
      id: 3,
      name: "Sofia & Alessandro",
      location: "Date Night Regulars",
      rating: 5,
      date: "3 days ago",
      text: "Our monthly date spot! The candlelit tables, the aroma of fresh basil, and that wood-fired oven crackling in the background - pure romance. Plus, the tiramisu is sinful.",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=80&h=80&fit=crop&crop=face",
      dish: "Prosciutto e Arugula",
      mood: "romantic"
    },
    {
      id: 4,
      name: "Tommy O'Brien",
      location: "Local Construction Worker",
      rating: 5,
      date: "5 days ago",
      text: "Best slice joint in the borough, hands down. These guys know their audience - generous portions, honest prices, and that perfect grease-to-cheese ratio that hits the spot.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      dish: "Classic Pepperoni",
      mood: "authentic"
    },
    {
      id: 5,
      name: "Isabella Santos",
      location: "Instagram Food Influencer",
      rating: 5,
      date: "1 week ago",
      text: "The burrata pizza is absolutely Instagram gold, but more importantly, it tastes like heaven. Creamy, dreamy, and that presentation - chef's kiss! My followers are obsessed.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      dish: "Burrata & Cherry Tomato",
      mood: "trendy"
    },
    {
      id: 6,
      name: "Frank DiMarco",
      location: "Born & Raised in Brooklyn",
      rating: 5,
      date: "2 months ago",
      text: "I'm 67 years old, lived in this neighborhood my whole life. This is how pizza SHOULD taste - like the old days when every ingredient mattered and shortcuts didn't exist.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      dish: "Classic Cheese",
      mood: "traditional"
    }
  ];

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative',
        height: '60vh',
        background: 'linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.5)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=800&fit=crop") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: THEME.spacing.sectionPadding
      }}>
        <div style={{ textAlign: 'center', color: 'white', maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '20px',
            fontWeight: '400',
            letterSpacing: '1px'
          }}>
            Stories from Our Table
          </h1>
          <p style={{ 
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Every slice tells a story, every bite creates a memory
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ 
        backgroundColor: THEME.colors.primary,
        color: 'white',
        padding: '40px 20px',
        marginBottom: THEME.spacing.sectionPadding
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: THEME.colors.accent, marginBottom: '5px' }}>4.9</div>
            <div style={{ fontFamily: THEME.fonts.body, opacity: 0.9 }}>Average Rating</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: THEME.colors.accent, marginBottom: '5px' }}>847</div>
            <div style={{ fontFamily: THEME.fonts.body, opacity: 0.9 }}>Happy Customers</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: THEME.colors.accent, marginBottom: '5px' }}>12k+</div>
            <div style={{ fontFamily: THEME.fonts.body, opacity: 0.9 }}>Pizzas Served</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: THEME.colors.accent, marginBottom: '5px' }}>5yrs</div>
            <div style={{ fontFamily: THEME.fonts.body, opacity: 0.9 }}>In Brooklyn</div>
          </div>
        </div>
      </div>

      {/* Testimonials Masonry Layout */}
      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        marginBottom: THEME.spacing.sectionPadding
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} style={{ 
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(44, 24, 16, 0.1)',
              border: `2px solid ${THEME.colors.surface}`,
              position: 'relative',
              transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)',
              transition: 'transform 0.3s ease'
            }}>
              {/* Quote Icon */}
              <Quote style={{ 
                position: 'absolute',
                top: '15px',
                right: '15px',
                color: THEME.colors.accent,
                opacity: 0.3,
                width: '24px',
                height: '24px'
              }} />

              {/* Header */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '15px'
              }}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{ 
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: `3px solid ${THEME.colors.accent}`
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.2rem',
                    margin: '0',
                    color: THEME.colors.primary
                  }}>
                    {testimonial.name}
                  </h3>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '5px'
                  }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} style={{ 
                          width: '16px',
                          height: '16px',
                          fill: THEME.colors.accent,
                          color: THEME.colors.accent
                        }} />
                      ))}
                    </div>
                    <span style={{ 
                      fontSize: '0.9rem',
                      color: '#666',
                      fontFamily: THEME.fonts.body
                    }}>
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p style={{ 
                fontFamily: THEME.fonts.body,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: THEME.colors.text,
                marginBottom: '20px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>

              {/* Footer */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: `1px solid ${THEME.colors.surface}`,
                fontSize: '0.9rem',
                color: '#666'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <MapPin style={{ width: '14px', height: '14px' }} />
                  {testimonial.location}
                </div>
                <div style={{ 
                  backgroundColor: THEME.colors.surface,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: THEME.colors.accent,
                  fontWeight: '600'
                }}>
                  {testimonial.dish}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Review Spotlight */}
      <div style={{ 
        backgroundColor: THEME.colors.primary,
        color: 'white',
        padding: `${THEME.spacing.sectionPadding} 20px`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        
        <div style={{ 
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <Heart style={{ 
            width: '40px',
            height: '40px',
            color: THEME.colors.accent,
            marginBottom: '20px'
          }} />
          
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            marginBottom: '30px',
            fontWeight: '400'
          }}>
            Local Food Critic's Choice
          </h2>
          
          <blockquote style={{ 
            fontSize: '1.3rem',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '30px',
            fontFamily: THEME.fonts.body
          }}>
            "In a city overflowing with pizza joints, this Brooklyn gem stands apart. 
            It's not just about the food—though that wood-fired perfection speaks for itself—
            it's about the soul. This is neighborhood dining at its absolute finest."
          </blockquote>
          
          <div style={{ 
            fontSize: '1.1rem',
            color: THEME.colors.accent,
            fontWeight: '600'
          }}>
            — Brooklyn Food & Wine Magazine
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        padding: `${THEME.spacing.sectionPadding} 20px`,
        textAlign: 'center',
        backgroundColor: THEME.colors.surface
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            marginBottom: '20px',
            color: THEME.colors.primary
          }}>
            Ready to Create Your Own Story?
          </h2>
          
          <p style={{ 
            fontFamily: THEME.fonts.body,
            fontSize: '1.1rem',
            marginBottom: '40px',
            color: '#666',
            lineHeight: 1.6
          }}>
            Join hundreds of satisfied customers who've made us their neighborhood favorite. 
            Book your table today and taste what everyone's talking about.
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/reservations" style={{ 
              backgroundColor: THEME.colors.accent,
              color: 'white',
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'background-color 0.3s ease'
            }}>
              <Calendar style={{ width: '20px', height: '20px' }} />
              Make Reservation
            </Link>
            
            <Link to="/menu" style={{ 
              backgroundColor: 'transparent',
              color: THEME.colors.primary,
              padding: '15px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              border: `2px solid ${THEME.colors.primary}`,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease'
            }}>
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;