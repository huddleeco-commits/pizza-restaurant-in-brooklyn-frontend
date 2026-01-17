import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Star, Heart } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, TiltCard } from '../effects';

const THEME = {
  colors: { 
    primary: '#8B0000', 
    accent: '#FFD700', 
    background: '#faf7f2', 
    text: '#2c1810', 
    surface: '#f8fafc' 
  },
  fonts: { 
    heading: "'Playfair Display', Georgia, serif", 
    body: "'Lato', system-ui, sans-serif" 
  },
  spacing: { sectionPadding: '80px' }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    orderType: 'dine-in'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Me',
      value: '(718) 555-0123',
      subtext: 'I answer personally!'
    },
    {
      icon: Mail,
      label: 'Email Me',
      value: 'chef@bellanapolibrooklyn.com',
      subtext: 'Quick responses guaranteed'
    },
    {
      icon: MapPin,
      label: 'Visit Me',
      value: '427 Court Street, Brooklyn, NY 11231',
      subtext: 'Right in the heart of Carroll Gardens'
    }
  ];

  const hours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
  ];

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.primary}, #a11a1a)`,
        padding: '100px 20px 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: window.innerWidth > 768 ? '48px' : '36px',
            fontFamily: THEME.fonts.heading,
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Let's Talk Pizza!
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            I love hearing from my customers. Questions about the menu? Want to cater your event? 
            Or just want to chat about authentic Italian pizza? Drop me a line!
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <AnimatedCounter end={10} suffix="+ Years" duration={2} />
            <AnimatedCounter end={5000} suffix="+ Happy Customers" duration={2.5} />
            <AnimatedCounter end={97} suffix="% Satisfaction" duration={2} />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ScrollReveal>
        <section style={{ padding: THEME.spacing.sectionPadding }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <TiltCard>
              <div style={{
                backgroundColor: THEME.colors.surface,
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: `2px solid ${THEME.colors.accent}`
              }}>
                <h2 style={{
                  fontSize: '32px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '10px'
                }}>
                  Send Me a Message
                </h2>
                <p style={{
                  color: THEME.colors.text,
                  marginBottom: '30px',
                  opacity: 0.8
                }}>
                  I personally read every message and respond within 2 hours during business hours.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Order Type Selection */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: THEME.colors.text
                    }}>
                      What can I help you with? *
                    </label>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: `2px solid #e2e8f0`,
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontFamily: THEME.fonts.body,
                        backgroundColor: 'white',
                        transition: 'border-color 0.3s ease'
                      }}
                    >
                      <option value="dine-in">Dine-in Reservation</option>
                      <option value="takeout">Takeout Order</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback/Review</option>
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 600 ? '1fr 1fr' : '1fr',
                    gap: '16px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: THEME.colors.text
                      }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="What should I call you?"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontFamily: THEME.fonts.body,
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: THEME.colors.text
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontFamily: THEME.fonts.body,
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: THEME.colors.text
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(718) 555-0123"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontFamily: THEME.fonts.body,
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: THEME.colors.text
                    }}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      placeholder="Tell me what you need! Whether it's a special order, dietary questions, or just saying hello - I'd love to hear from you."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontFamily: THEME.fonts.body,
                        resize: 'vertical',
                        minHeight: '100px',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    style={{
                      width: '100%',
                      padding: '16px',
                      backgroundColor: isSubmitted ? '#22c55e' : THEME.colors.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: '600',
                      cursor: isSubmitted ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'all 0.3s ease',
                      transform: isSubmitted ? 'scale(0.98)' : 'scale(1)'
                    }}
                  >
                    {isSubmitted ? (
                      <>
                        <Heart size={20} fill="currentColor" />
                        Message Sent! I'll Reply Soon
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </TiltCard>

            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '32px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '30px'
              }}>
                Get in Touch
              </h2>

              {/* Contact Cards */}
              <div style={{ marginBottom: '40px' }}>
                {contactInfo.map((item, index) => (
                  <TiltCard key={index}>
                    <div style={{
                      backgroundColor: THEME.colors.surface,
                      padding: '25px',
                      borderRadius: '12px',
                      marginBottom: '20px',
                      border: `1px solid #e2e8f0`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: THEME.colors.primary,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <item.icon size={24} color="white" />
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: THEME.colors.text,
                          marginBottom: '5px'
                        }}>
                          {item.label}
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: THEME.colors.primary,
                          fontWeight: '600',
                          marginBottom: '3px'
                        }}>
                          {item.value}
                        </p>
                        <p style={{
                          fontSize: '14px',
                          color: THEME.colors.text,
                          opacity: 0.7
                        }}>
                          {item.subtext}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>

              {/* Hours */}
              <div style={{
                backgroundColor: THEME.colors.surface,
                padding: '30px',
                borderRadius: '12px',
                border: `1px solid #e2e8f0`,
                marginBottom: '30px'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Clock size={24} />
                  Kitchen Hours
                </h3>
                {hours.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: index < hours.length - 1 ? '1px solid #e2e8f0' : 'none'
                  }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: THEME.colors.text
                    }}>
                      {item.day}
                    </span>
                    <span style={{
                      fontSize: '16px',
                      color: THEME.colors.primary,
                      fontWeight: '600'
                    }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Services Notice */}
              <div style={{
                backgroundColor: `${THEME.colors.accent}20`,
                border: `2px solid ${THEME.colors.accent}`,
                borderRadius: '12px',
                padding: '25px',
                textAlign: 'center'
              }}>
                <Star size={32} color={THEME.colors.accent} style={{ marginBottom: '15px' }} />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: THEME.colors.primary,
                  marginBottom: '10px'
                }}>
                  We Offer
                </h3>
                <p style={{
                  color: THEME.colors.text,
                  lineHeight: 1.6
                }}>
                  • Dine-in & Takeout<br />
                  • Local Delivery (within 3 miles)<br />
                  • Catering for events & parties<br />
                  • Custom pizza orders<br />
                  • Gluten-free & vegan options
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Map Section Placeholder */}
      <ScrollReveal>
        <section style={{
          padding: '60px 20px',
          backgroundColor: THEME.colors.surface
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '20px'
            }}>
              Find Me in Carroll Gardens
            </h2>
            <p style={{
              fontSize: '18px',
              color: THEME.colors.text,
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Just off the F/G train at Carroll Street. Look for the red awning and the smell of fresh basil!
            </p>
            <div style={{
              height: '400px',
              backgroundColor: '#e2e8f0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `2px solid ${THEME.colors.accent}`
            }}>
              <div style={{ textAlign: 'center', color: THEME.colors.text }}>
                <MapPin size={48} style={{ marginBottom: '15px', opacity: 0.5 }} />
                <p style={{ fontSize: '18px', opacity: 0.7 }}>
                  Interactive Map Loading...
                </p>
                <p style={{ fontSize: '14px', opacity: 0.5 }}>
                  427 Court Street, Carroll Gardens, Brooklyn
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default ContactPage;