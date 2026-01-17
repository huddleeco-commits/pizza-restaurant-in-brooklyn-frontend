import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal, ParallaxSection, TiltCard } from '../effects';
import { Pizza, Clock, Utensils, Truck, Users, Phone, MapPin, Star } from 'lucide-react';

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

const ServicesPage = () => {
  const styles = {
    hero: {
      background: `linear-gradient(rgba(139, 0, 0, 0.8), rgba(139, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: `${THEME.spacing.sectionPadding} 20px`,
      textAlign: 'center',
      color: 'white',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroContent: {
      maxWidth: '800px'
    },
    heroTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '48px',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: '20px',
      marginBottom: '30px',
      opacity: 0.95,
      lineHeight: 1.4
    },
    ctaButton: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.text,
      padding: '15px 40px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
    },
    servicesSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: THEME.colors.background,
      textAlign: 'center'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '36px',
      color: THEME.colors.primary,
      marginBottom: '20px'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: THEME.colors.text,
      marginBottom: '60px',
      maxWidth: '600px',
      margin: '0 auto 60px auto',
      opacity: 0.8
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    serviceCard: {
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(139, 0, 0, 0.1)',
      textAlign: 'center',
      border: '1px solid #f0f0f0',
      transition: 'all 0.3s ease'
    },
    serviceIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: THEME.colors.primary,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px auto',
      color: 'white'
    },
    serviceTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '24px',
      color: THEME.colors.primary,
      marginBottom: '15px'
    },
    serviceDescription: {
      fontSize: '16px',
      color: THEME.colors.text,
      lineHeight: 1.6,
      marginBottom: '20px',
      opacity: 0.8
    },
    servicePrice: {
      fontSize: '18px',
      fontWeight: '600',
      color: THEME.colors.accent,
      marginBottom: '20px'
    },
    serviceButton: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '12px 30px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease'
    },
    menuSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: 'white'
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    menuCategory: {
      textAlign: 'left'
    },
    categoryTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '28px',
      color: THEME.colors.primary,
      marginBottom: '25px',
      textAlign: 'center'
    },
    menuItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '15px 0',
      borderBottom: '1px solid #f0f0f0'
    },
    itemInfo: {
      flex: 1
    },
    itemName: {
      fontSize: '18px',
      fontWeight: '600',
      color: THEME.colors.text,
      marginBottom: '5px'
    },
    itemDescription: {
      fontSize: '14px',
      color: THEME.colors.text,
      opacity: 0.7,
      lineHeight: 1.4
    },
    itemPrice: {
      fontSize: '18px',
      fontWeight: '600',
      color: THEME.colors.primary,
      marginLeft: '15px'
    },
    infoSection: {
      padding: `${THEME.spacing.sectionPadding} 20px`,
      backgroundColor: THEME.colors.background
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    },
    infoCard: {
      backgroundColor: 'white',
      padding: '30px 20px',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(139, 0, 0, 0.1)'
    },
    infoIcon: {
      color: THEME.colors.primary,
      marginBottom: '15px'
    },
    infoTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '20px',
      color: THEME.colors.primary,
      marginBottom: '10px'
    },
    infoText: {
      fontSize: '16px',
      color: THEME.colors.text,
      lineHeight: 1.5,
      opacity: 0.8
    }
  };

  const services = [
    {
      icon: <Pizza size={40} />,
      title: 'Dine-In Experience',
      description: 'Enjoy our authentic Brooklyn pizzas in our warm, family-friendly atmosphere with attentive service.',
      price: 'Full Menu Available',
      action: 'Reserve Table'
    },
    {
      icon: <Truck size={40} />,
      title: 'Fast Delivery',
      description: 'Hot, fresh pizza delivered to your door in 30 minutes or less. Free delivery on orders over $25.',
      price: '$2.99 delivery fee',
      action: 'Order Online'
    },
    {
      icon: <Users size={40} />,
      title: 'Catering Services',
      description: 'Perfect for parties, office events, and celebrations. Large orders with advance notice.',
      price: 'Starting at $150',
      action: 'Get Quote'
    }
  ];

  const menuCategories = [
    {
      title: 'Signature Pizzas',
      items: [
        { name: 'Brooklyn Special', description: 'Pepperoni, sausage, peppers, onions, mushrooms', price: '$22' },
        { name: 'Margherita Classica', description: 'Fresh mozzarella, basil, San Marzano tomatoes', price: '$18' },
        { name: 'Meat Lovers Supreme', description: 'Pepperoni, sausage, bacon, ham, ground beef', price: '$24' },
        { name: 'White Ricotta Delight', description: 'Ricotta, mozzarella, garlic, spinach, olive oil', price: '$20' }
      ]
    },
    {
      title: 'Appetizers',
      items: [
        { name: 'Garlic Knots (6)', description: 'House-made knots with garlic butter and marinara', price: '$8' },
        { name: 'Mozzarella Sticks', description: 'Golden fried with marinara dipping sauce', price: '$10' },
        { name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, house dressing', price: '$12' },
        { name: 'Buffalo Wings (10)', description: 'Spicy wings with blue cheese and celery', price: '$14' }
      ]
    },
    {
      title: 'Calzones & More',
      items: [
        { name: 'Classic Calzone', description: 'Ricotta, mozzarella, your choice of 3 toppings', price: '$16' },
        { name: 'Chicken Parmigiana', description: 'Breaded chicken, marinara, mozzarella, pasta', price: '$18' },
        { name: 'Tiramisu', description: 'Traditional Italian dessert with espresso', price: '$7' },
        { name: 'Cannoli (2)', description: 'Crispy shells filled with sweet ricotta', price: '$6' }
      ]
    }
  ];

  const businessInfo = [
    {
      icon: <Clock size={32} />,
      title: 'Hours',
      text: 'Mon-Thu: 11am-10pm\nFri-Sat: 11am-11pm\nSun: 12pm-9pm'
    },
    {
      icon: <Phone size={32} />,
      title: 'Order & Contact',
      text: '(718) 555-PIZZA\n(718) 555-7492\norders@brooklynpizzaco.com'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Location',
      text: '847 5th Avenue\nBrooklyn, NY 11215\nPark Slope neighborhood'
    },
    {
      icon: <Star size={32} />,
      title: 'Why Choose Us',
      text: '10+ years serving Brooklyn\nFamily recipes since 2014\nFresh ingredients daily'
    }
  ];

  return (
    <div style={{ fontFamily: THEME.fonts.body }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Authentic Brooklyn Pizza</h1>
          <p style={styles.heroSubtitle}>
            I bring you traditional Italian flavors with a Brooklyn twist. Every pizza is made fresh to order using family recipes passed down through generations.
          </p>
          <Link to="/contact" style={styles.ctaButton}>
            Order Now <Pizza size={20} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section style={styles.servicesSection}>
          <h2 style={styles.sectionTitle}>How I Serve You</h2>
          <p style={styles.sectionSubtitle}>
            Whether you're dining in, taking out, or hosting an event, I'm here to make your pizza experience exceptional.
          </p>
          
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TiltCard key={index}>
                <div style={styles.serviceCard}>
                  <div style={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <div style={styles.servicePrice}>{service.price}</div>
                  <Link to="/contact" style={styles.serviceButton}>
                    {service.action}
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Menu Highlights */}
      <ScrollReveal>
        <section style={styles.menuSection}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={styles.sectionTitle}>Menu Highlights</h2>
            <p style={styles.sectionSubtitle}>
              A taste of what I offer - made fresh daily with premium ingredients
            </p>
          </div>

          <div style={styles.menuGrid}>
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} style={styles.menuCategory}>
                <h3 style={styles.categoryTitle}>{category.title}</h3>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={styles.menuItem}>
                    <div style={styles.itemInfo}>
                      <div style={styles.itemName}>{item.name}</div>
                      <div style={styles.itemDescription}>{item.description}</div>
                    </div>
                    <div style={styles.itemPrice}>{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Business Information */}
      <section style={styles.infoSection}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={styles.sectionTitle}>Visit My Pizzeria</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to know about ordering, visiting, and enjoying authentic Brooklyn pizza
          </p>
        </div>

        <div style={styles.infoGrid}>
          {businessInfo.map((info, index) => (
            <div key={index} style={styles.infoCard}>
              <div style={styles.infoIcon}>
                {info.icon}
              </div>
              <h3 style={styles.infoTitle}>{info.title}</h3>
              <p style={styles.infoText}>
                {info.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < info.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
        height="40vh"
      >
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '36px',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Ready for Authentic Brooklyn Pizza?
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            opacity: 0.95
          }}>
            Call now or visit my pizzeria for the best Italian experience in Brooklyn
          </p>
          <Link 
            to="/contact" 
            style={{
              ...styles.ctaButton,
              fontSize: '20px',
              padding: '18px 50px'
            }}
          >
            Order Now <Utensils size={24} />
          </Link>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default ServicesPage;