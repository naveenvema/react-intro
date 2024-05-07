// App1.js
import React from 'react';
import Card from './Card';

function App1() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Feedback Collection</h1>
      <div style={styles.cardContainer}>
        <div style={styles.upperCards}>
          <Card style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Overall Experience</h2>
              <p style={styles.cardText}>Please feel free to tell us about your experience.</p>
              <button onClick={() => window.location.href = '/feedback1'} style={styles.cardButton}>Go to Overall Experience</button>
            </div>
          </Card>
          <Card style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Overall Experience</h2>
              <p style={styles.cardText}>Please feel free to tell us about your experience.</p>
              <button onClick={() => window.location.href = '/feedback2'} style={styles.cardButton}>Go to Overall Experience</button>
            </div>
          </Card>
          {/* Add other upper cards similarly */}
        </div>
        <div style={styles.lowerCards}>
          <Card style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Overall Experience</h2>
              <p style={styles.cardText}>Please feel free to tell us about your experience.</p>
              <button onClick={() => window.location.href = '/feedback3'} style={styles.cardButton}>Go to Overall Experience</button>
            </div>
          </Card>
          <Card style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>Overall Experience</h2>
              <p style={styles.cardText}>Please feel free to tell us about your experience.</p>
              <button onClick={() => window.location.href = '/feedback4'} style={styles.cardButton}>Go to Overall Experience</button>
            </div>
          </Card>
          {/* Add other lower cards similarly */}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
  },
  heading: {
    textAlign: 'Center',
    fontSize: 55,
    color: '#333',
    marginBottom: 20,
    background:'yellow',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    maxWidth: '1200px', // Maximum width for the cards
    margin: '0 auto', // Center the cards horizontally
  },
  upperCards: {
    display: 'flex',
    gap: 20,
    width: '100%', // Set width to 100% for upper cards to span the full width of the container
    justifyContent: 'center',
    
  
  },
  lowerCards: {
    display: 'flex',
    gap: 20,
     width: '100%', // Set width to 100% for upper cards to span the full width of the container
    justifyContent: 'center',
  
  },
  card: {
    flex: '1 0 calc(50% - 20px)', // Adjust width to fill 50% of the container width with some gap
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#fff',
  },
  cardContent: {
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666',
  },
  cardLink: {
    display: 'block',
    fontSize: 16,
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default App1;
