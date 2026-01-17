import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard } from '../effects';
import { Heart, Users, Award, Clock, Pizza, Flame, Star, ChevronRight } from 'lucide-react';

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

const AboutPage = () => {
  const styles = {
    page: {
      backgroundColor: THEME.colors.background,
      minHeight: '100vh',
      fontFamily: THEME.fonts.body,
      color: THEME.colors.text,
    },
    hero: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(139, 0, 0, 0.75)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      color: '#ffffff',
      maxWidth: '800px',
      padding: '0 20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(32px, 5vw, 56px)',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.95,
      lineHeight: 1.6,
      marginBottom: '30px',
    },
    section: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(28px, 4vw, 42px)',
      color: THEME.colors.primary,
      textAlign: 'center',
      marginBottom: '50px',
    },
    storySection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
      '@media (maxWidth: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '40px',
      },
    },
    storyText: {
      fontSize: '18px',
      lineHeight: 1.8,
      marginBottom: '25px',
    },
    storyImage: {
      width: '100%',
      height: '400px',
      borderRadius: '15px',
      objectFit: 'cover',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    },
    pullQuote: {
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      padding: '80px 40px',
      textAlign: 'center',
      position: 'relative',
    },
    pullQuoteText: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(24px, 4vw, 36px)',
      lineHeight: 1.4,
      fontStyle: 'italic',
      maxWidth: '800px',
      margin: '0 auto',
    },
    valuesGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      marginTop: '50px',
    },
    valueItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '30px 0',
      borderBottom: `2px solid ${THEME.colors.accent}`,
    },
    valueIcon: {
      backgroundColor: THEME.colors.accent,
      borderRadius: '50%',
      padding: '15px',
      minWidth: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: THEME.colors.primary,
    },
    valueContent: {
      flex: 1,
    },
    valueTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      color: THEME.colors.primary,
      marginBottom: '10px',
    },
    valueText: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: THEME.colors.text,
    },
    statsSection: {
      backgroundColor: THEME.colors.surface,
      padding: '80px 20px',
      textAlign: 'center',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '50px auto 0',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(32px, 5vw, 48px)',
      color: THEME.colors.primary,
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '16px',
      color: THEME.colors.text,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    processSection: {
      backgroundColor: THEME.colors.background,
    },
    processSteps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginTop: '50px',
    },
    processStep: {
      backgroundColor: '#ffffff',
      padding: '40px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    },
    stepNumber: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 auto 20px',
    },
    stepTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '20px',
      color: THEME.colors.primary,
      marginBottom: '15px',
    },
    stepText: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: THEME.colors.text,
    },
    ctaSection: {
      backgroundColor: THEME.colors.primary,
      color: '#ffffff',
      padding: '80px 20px',
      textAlign: 'center',
    },
    ctaTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: 'clamp(28px, 4vw, 42px)',
      marginBottom: '20px',
    },
    ctaText: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '30px',
      maxWidth: '600px',
      margin: '0 auto 30px',
    },
    ctaButton: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.primary,
      padding: '15px 40px',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, boxShadow 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
  };

  const values = [
    {
      icon: <Heart size={20} />,
      title: "Family Tradition",
      text: "Every recipe comes from my nonna's kitchen in Sicily, passed down through three generations of pizza makers who understood that food is love."
    },
    {
      icon: <Flame size={20} />,
      title: "Fire-Kissed Perfection",
      text: "I hand-stretch every dough and fire each pizza in my brick oven at 900°F, creating that perfect char and smoky flavor that makes Brooklyn pizza legendary."
    },
    {
      icon: <Users size={20} />,
      title: "Community Heart",
      text: "This neighborhood raised me, and now I'm honored to feed the families, workers, and dreamers who make Brooklyn the most authentic place on Earth."
    },
    {
      icon: <Award size={20} />,
      title: "Uncompromising Quality",
      text: "I source San Marzano tomatoes, buffalo mozzarella, and 00 flour directly from Italy because authenticity isn't negotiable when it comes to real pizza."
    }
  ];

  const processSteps = [
    {
      title: "Hand-Stretched Dough",
      text: "I prepare fresh dough daily using a 48-hour cold fermentation process that creates the perfect texture and flavor."
    },
    {
      title: "Premium Ingredients",
      text: "Only the finest imported Italian ingredients and locally-sourced toppings make it onto my pizzas."
    },
    {
      title: "Brick Oven Magic",
      text: "Each pizza is fired at 900°F in my authentic brick oven, creating that signature char and crispy-chewy perfection."
    },
    {
      title: "Served with Love",
      text: "Every pie that leaves my kitchen carries the pride and passion of authentic Italian craftsmanship."
    }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>The Heart Behind Every Slice</h1>
          <p style={styles.heroSubtitle}>
            From my nonna's kitchen in Sicily to the bustling streets of Brooklyn, 
            this is the story of authentic pizza, family tradition, and community love.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <div style={styles.storySection}>
            <div>
              <h2 style={styles.sectionTitle}>My Journey to Brooklyn</h2>
              <p style={styles.storyText}>
                I grew up in my nonna's kitchen in Palermo, watching her hands work magic with simple ingredients. 
                Flour, water, salt, and time – she taught me that great pizza isn't about fancy techniques, it's about respect for tradition.
              </p>
              <p style={styles.storyText}>
                When I came to Brooklyn fifteen years ago, I brought those recipes and that passion with me. 
                I've spent over a decade perfecting my craft, learning from the neighborhood, and building relationships 
                that go far beyond just serving food.
              </p>
              <p style={styles.storyText}>
                Today, I'm proud to be part of this incredible community, serving authentic Neapolitan-style pizza 
                made with the same love and attention my nonna showed me all those years ago.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800" 
              alt="Pizza chef at work" 
              style={styles.storyImage}
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Pull Quote */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920" 
        height="400px"
        overlay="rgba(139, 0, 0, 0.85)"
      >
        <div style={styles.pullQuote}>
          <p style={styles.pullQuoteText}>
            "My mission is simple: to honor my family's legacy while feeding the soul of Brooklyn, 
            one perfectly crafted pizza at a time."
          </p>
        </div>
      </ParallaxSection>

      {/* Values Section */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Drives My Passion</h2>
          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} style={styles.valueItem}>
                <div style={styles.valueIcon}>
                  {value.icon}
                </div>
                <div style={styles.valueContent}>
                  <h3 style={styles.valueTitle}>{value.title}</h3>
                  <p style={styles.valueText}>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Statistics */}
      <section style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>My Brooklyn Legacy</h2>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              <AnimatedCounter end={15} suffix="+" duration={2} />
            </div>
            <div style={styles.statLabel}>Years Perfecting</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              <AnimatedCounter end={12000} suffix="+" duration={2.5} />
            </div>
            <div style={styles.statLabel}>Happy Customers</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              <AnimatedCounter end={98} suffix="%" duration={2} />
            </div>
            <div style={styles.statLabel}>Satisfaction Rate</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>
              <AnimatedCounter end={75000} suffix="+" duration={3} />
            </div>
            <div style={styles.statLabel}>Pizzas Crafted</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ScrollReveal>
        <section style={{...styles.section, ...styles.processSection}}>
          <h2 style={styles.sectionTitle}>My Craft Process</h2>
          <div style={styles.processSteps}>
            {processSteps.map((step, index) => (
              <TiltCard key={index}>
                <div 
                  style={styles.processStep}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepText}>{step.text}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Taste Tradition?</h2>
        <p style={styles.ctaText}>
          Come experience authentic Sicilian-style pizza made with passion, 
          tradition, and the finest ingredients. Every bite tells a story.
        </p>
        <Link 
          to="/menu" 
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Pizza size={20} />
          View Our Menu
          <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;