import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, Phone, Mail, Star, ArrowRight, Check, ChevronDown, Plus, Minus } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, VideoBackground } from '../effects';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [selectedTable, setSelectedTable] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [step, setStep] = useState(1);

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

  // Generate available dates (next 30 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ];

  const tableOptions = [
    { id: 'booth', name: 'Cozy Booth', capacity: '2-4 people', premium: false },
    { id: 'window', name: 'Window Table', capacity: '2-6 people', premium: true },
    { id: 'family', name: 'Family Table', capacity: '6-8 people', premium: false },
    { id: 'private', name: 'Private Corner', capacity: '4-6 people', premium: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit booking
      alert('Reservation confirmed! You\'ll receive a confirmation email shortly.');
    }
  };

  const stepTitles = [
    'Select Date & Time',
    'Choose Table & Party Details',
    'Your Information'
  ];

  return (
    <div style={{ 
      fontFamily: THEME.fonts.body,
      color: THEME.colors.text,
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${THEME.colors.background} 0%, #fff 100%)`
    }}>
      {/* Hero Section */}
      <VideoBackground
        videoSrc="https://videos.pexels.com/video-files/4253291/4253291-uhd_2560_1440_25fps.mp4"
        posterImage="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920"
        overlay="linear-gradient(rgba(139, 0, 0, 0.8), rgba(139, 0, 0, 0.9))"
        height="60vh"
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          height: '100%',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          gap: '40px'
        }}>
          <div style={{ color: 'white' }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontFamily: THEME.fonts.heading,
              marginBottom: '20px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Reserve Your Table at Nonna Rosa's
            </h1>
            <p style={{ 
              fontSize: '20px', 
              opacity: 0.9,
              marginBottom: '30px',
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Experience authentic Brooklyn Italian dining where every meal tells a story of tradition, family, and passion.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '20px',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star style={{ color: THEME.colors.accent, fill: THEME.colors.accent }} size={20} />
                <span style={{ fontSize: '18px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>4.8/5 Rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users style={{ color: THEME.colors.accent }} size={20} />
                <span style={{ fontSize: '18px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Family Owned Since 2010</span>
              </div>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Quick Reservation
            </h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <select style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid #e1e5e9',
                fontSize: '16px',
                fontFamily: THEME.fonts.body
              }}>
                <option>Select Date</option>
                {availableDates.slice(0, 7).map(date => (
                  <option key={date.value} value={date.value}>{date.display}</option>
                ))}
              </select>
              <select style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid #e1e5e9',
                fontSize: '16px',
                fontFamily: THEME.fonts.body
              }}>
                <option>Select Time</option>
                {timeSlots.slice(0, 6).map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
              <select style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid #e1e5e9',
                fontSize: '16px',
                fontFamily: THEME.fonts.body
              }}>
                <option>Party Size</option>
                {[1,2,3,4,5,6,7,8].map(size => (
                  <option key={size} value={size}>{size} {size === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <button style={{
                background: THEME.colors.primary,
                color: 'white',
                padding: '15px 30px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'transform 0.2s'
              }}>
                Find Table <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Progress Steps */}
      <div style={{ 
        background: 'white',
        padding: '30px 0',
        borderBottom: '1px solid #e1e5e9'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Progress Line */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              right: '15px',
              height: '2px',
              background: '#e1e5e9',
              zIndex: 1
            }}>
              <div style={{
                height: '100%',
                background: THEME.colors.primary,
                width: `${((step - 1) / 2) * 100}%`,
                transition: 'width 0.3s ease'
              }} />
            </div>

            {stepTitles.map((title, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: step > index + 1 ? THEME.colors.primary : 
                             step === index + 1 ? THEME.colors.primary : '#e1e5e9',
                  color: step >= index + 1 ? 'white' : '#666',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {step > index + 1 ? <Check size={16} /> : index + 1}
                </div>
                <span style={{
                  fontSize: '14px',
                  color: step >= index + 1 ? THEME.colors.primary : '#666',
                  textAlign: 'center',
                  fontWeight: step === index + 1 ? 'bold' : 'normal'
                }}>
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Booking Form */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '60px 20px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '60px'
      }}>
        {/* Left Column - Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <ScrollReveal>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '30px'
                }}>
                  <h2 style={{
                    fontSize: '28px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    marginBottom: '30px'
                  }}>
                    When would you like to dine?
                  </h2>

                  {/* Date Selection */}
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      Select Date
                    </label>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                      gap: '10px'
                    }}>
                      {availableDates.slice(0, 14).map(date => (
                        <button
                          key={date.value}
                          type="button"
                          onClick={() => setSelectedDate(date.value)}
                          style={{
                            padding: '15px 10px',
                            borderRadius: '10px',
                            border: selectedDate === date.value ? 
                              `2px solid ${THEME.colors.primary}` : '2px solid #e1e5e9',
                            background: selectedDate === date.value ? 
                              `${THEME.colors.primary}10` : 'white',
                            color: selectedDate === date.value ? 
                              THEME.colors.primary : THEME.colors.text,
                            fontSize: '14px',
                            fontWeight: selectedDate === date.value ? 'bold' : 'normal',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.2s'
                          }}
                        >
                          {date.display}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      Select Time
                    </label>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                      gap: '10px'
                    }}>
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          style={{
                            padding: '12px 8px',
                            borderRadius: '8px',
                            border: selectedTime === time ? 
                              `2px solid ${THEME.colors.primary}` : '2px solid #e1e5e9',
                            background: selectedTime === time ? 
                              THEME.colors.primary : 'white',
                            color: selectedTime === time ? 'white' : THEME.colors.text,
                            fontSize: '14px',
                            fontWeight: selectedTime === time ? 'bold' : 'normal',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.2s'
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Party Size */}
                  <div style={{ marginBottom: '40px' }}>
                    <label style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      Party Size
                    </label>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      background: '#f8fafc',
                      padding: '20px',
                      borderRadius: '10px',
                      border: '2px solid #e1e5e9'
                    }}>
                      <button
                        type="button"
                        onClick={() => setPartySize(Math.max(1, partySize - 1))}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: `2px solid ${THEME.colors.primary}`,
                          background: 'white',
                          color: THEME.colors.primary,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Minus size={16} />
                      </button>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        minWidth: '60px',
                        textAlign: 'center'
                      }}>
                        {partySize} {partySize === 1 ? 'Guest' : 'Guests'}
                      </div>
                      <button
                        type="button"
                        onClick={() => setPartySize(Math.min(12, partySize + 1))}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: `2px solid ${THEME.colors.primary}`,
                          background: THEME.colors.primary,
                          color: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    style={{
                      width: '100%',
                      background: (!selectedDate || !selectedTime) ? '#ccc' : THEME.colors.primary,
                      color: 'white',
                      padding: '18px',
                      borderRadius: '12px',
                      border: 'none',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: (!selectedDate || !selectedTime) ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    Continue to Table Selection <ArrowRight size={20} />
                  </button>
                </div>
              </ScrollReveal>
            )}

            {step === 2 && (
              <ScrollReveal>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '30px'
                }}>
                  <h2 style={{
                    fontSize: '28px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    marginBottom: '30px'
                  }}>
                    Choose Your Perfect Table
                  </h2>

                  {/* Table Selection */}
                  <div style={{ 
                    display: 'grid', 
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    {tableOptions.map(table => (
                      <div
                        key={table.id}
                        onClick={() => setSelectedTable(table.id)}
                        style={{
                          padding: '25px',
                          borderRadius: '15px',
                          border: selectedTable === table.id ? 
                            `3px solid ${THEME.colors.primary}` : '2px solid #e1e5e9',
                          background: selectedTable === table.id ? 
                            `${THEME.colors.primary}05` : 'white',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          position: 'relative'
                        }}
                      >
                        {table.premium && (
                          <div style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: THEME.colors.accent,
                            color: THEME.colors.text,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}>
                            PREMIUM
                          </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <h4 style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: THEME.colors.primary,
                              marginBottom: '5px'
                            }}>
                              {table.name}
                            </h4>
                            <p style={{
                              fontSize: '16px',
                              color: '#666',
                              margin: 0
                            }}>
                              Perfect for {table.capacity}
                            </p>
                          </div>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: `2px solid ${THEME.colors.primary}`,
                            background: selectedTable === table.id ? THEME.colors.primary : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {selectedTable === table.id && <Check size={14} color="white" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Special Requests */}
                  <div style={{ marginBottom: '40px' }}>
                    <label style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Anniversary celebration, dietary restrictions, accessibility needs..."
                      style={{
                        width: '100%',
                        height: '120px',
                        padding: '15px',
                        borderRadius: '10px',
                        border: '2px solid #e1e5e9',
                        fontSize: '16px',
                        fontFamily: THEME.fonts.body,
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      style={{
                        flex: 1,
                        background: 'transparent',
                        color: THEME.colors.primary,
                        padding: '18px',
                        borderRadius: '12px',
                        border: `2px solid ${THEME.colors.primary}`,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!selectedTable}
                      style={{
                        flex: 2,
                        background: !selectedTable ? '#ccc' : THEME.colors.primary,
                        color: 'white',
                        padding: '18px',
                        borderRadius: '12px',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: !selectedTable ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                      }}
                    >
                      Continue to Contact Info <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {step === 3 && (
              <ScrollReveal>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '30px'
                }}>
                  <h2 style={{
                    fontSize: '28px',
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.primary,
                    marginBottom: '30px'
                  }}>
                    Almost There! Your Contact Information
                  </h2>

                  <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                    <div>
                      <label style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        display: 'block'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Enter your full name"
                        style={{
                          width: '100%',
                          padding: '15px',
                          borderRadius: '10px',
                          border: '2px solid #e1e5e9',
                          fontSize: '16px',
                          fontFamily: THEME.fonts.body
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        display: 'block'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        placeholder="your.email@example.com"
                        style={{
                          width: '100%',
                          padding: '15px',
                          borderRadius: '10px',
                          border: '2px solid #e1e5e9',
                          fontSize: '16px',
                          fontFamily: THEME.fonts.body
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        display: 'block'
                      }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                        style={{
                          width: '100%',
                          padding: '15px',
                          borderRadius: '10px',
                          border: '2px solid #e1e5e9',
                          fontSize: '16px',
                          fontFamily: THEME.fonts.body
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      style={{
                        flex: 1,
                        background: 'transparent',
                        color: THEME.colors.primary,
                        padding: '18px',
                        borderRadius: '12px',
                        border: `2px solid ${THEME.colors.primary}`,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                      style={{
                        flex: 2,
                        background: (!customerInfo.name || !customerInfo.email || !customerInfo.phone) ? '#ccc' : THEME.colors.primary,
                        color: 'white',
                        padding: '18px',
                        borderRadius: '12px',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: (!customerInfo.name || !customerInfo.email || !customerInfo.phone) ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                      }}
                    >
                      Confirm Reservation <Check size={20} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </form>
        </div>

        {/* Right Column - Reservation Summary */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.primary,
              marginBottom: '25px'
            }}>
              Reservation Summary
            </h3>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <Calendar size={20} color={THEME.colors.primary} />
                <div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Date</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : 'Not selected'}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <Clock size={20} color={THEME.colors.primary} />
                <div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Time</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    {selectedTime || 'Not selected'}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '15px',
                background: '#f8fafc',
                borderRadius: '10px'
              }}>
                <Users size={20} color={THEME.colors.primary} />
                <div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Party Size</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    {partySize} {partySize === 1 ? 'Guest' : 'Guests'}
                  </div>
                </div>
              </div>

              {selectedTable && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '15px',
                  background: '#f8fafc',
                  borderRadius: '10px'
                }}>
                  <MapPin size={20} color={THEME.colors.primary} />
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Table</div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      {tableOptions.find(t => t.id === selectedTable)?.name}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Restaurant Info */}
            <div style={{
              borderTop: '2px solid #e1e5e9',
              paddingTop: '20px',
              marginBottom: '20px'
            }}>
              <h4 style={{
                fontSize: '18px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '15px'
              }}>
                Nonna Rosa's Pizzeria
              </h4>
              <div style={{ display: 'grid', gap: '10px', fontSize: '14px', color: '#666' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} />
                  <span>2847 Atlantic Avenue, Brooklyn, NY 11207</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} />
                  <span>(718) 555-ROSA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} />
                  <span>reservations@nonnarosas.com</span>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div style={{
              background: `${THEME.colors.accent}20`,
              padding: '15px',
              borderRadius: '10px',
              fontSize: '13px',
              color: '#666',
              lineHeight: 1.5
            }}>
              <strong>Reservation Policies:</strong><br />
              • Reservations held for 15 minutes past scheduled time<br />
              • Parties of 6+ require credit card to hold table<br />
              • 24-hour cancellation policy<br />
              • Contact us for special dietary accommodations
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <ScrollReveal>
        <div style={{
          background: THEME.colors.primary,
          color: 'white',
          padding: THEME.spacing.sectionPadding + ' 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontFamily: THEME.fonts.heading,
              marginBottom: '50px'
            }}>
              Trusted by Brooklyn Families
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px'
            }}>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                  <AnimatedCounter end={14} suffix="+" duration={2} />
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>Years Serving Brooklyn</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                  <AnimatedCounter end={5000} suffix="+" duration={2.5} />
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>Happy Customers</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                  <AnimatedCounter end={98} suffix="%" duration={2} />
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>Satisfaction Rate</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                  <AnimatedCounter end={50000} suffix="+" duration={3} />
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>Pizzas Served</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Info */}
      <div style={{
        background: THEME.colors.background,
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '28px',
            fontFamily: THEME.fonts.heading,
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            Need Help with Your Reservation?
          </h3>
          <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: 1.6 }}>
            Our friendly team is here to help! Call us directly or email for special requests, 
            large parties, or any questions about your dining experience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <a 
              href="tel:+17185557672"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: THEME.colors.primary,
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              <Phone size={20} />
              (718) 555-ROSA
            </a>
            <a 
              href="mailto:reservations@nonnarosas.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: THEME.colors.primary,
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              <Mail size={20} />
              reservations@nonnarosas.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;