// Feedback1.js
import React, { useState } from 'react';

function Feedback1() {
  const [starsClicked, setStarsClicked] = useState(0); // State to track the number of stars clicked
  const [feedbackText, setFeedbackText] = useState(''); // State to store the feedback text

  // Function to handle star clicks
  const handleStarClick = (starCount) => {
    setStarsClicked(starCount);
  };

  // Function to handle text area changes
  const handleTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // You can perform actions like sending feedback to the server here
    console.log('Stars clicked:', starsClicked);
    console.log('Feedback:', feedbackText);
    // Reset the form after submission
    setStarsClicked(0);
    setFeedbackText('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Feedback is valuable for me</h1>
      <div style={styles.starsContainer}>
        {/* Render 5 stars */}
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{
              fontSize: '40px',
              cursor: 'pointer',
              color: starsClicked >= index + 1 ? '#FFD700' : '#ccc',
            }}
            onClick={() => handleStarClick(index + 1)}
          >
            ★
          </span>
        ))}
      </div>
      <div style={styles.feedbackContainer}>
        {/* Text area for feedback */}
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your feedback here..."
          value={feedbackText}
          onChange={handleTextChange}
          style={styles.textArea}
        ></textarea>
      </div>
      <div style={styles.submitContainer}>
        {/* Submit button */}
        <button onClick={handleSubmit} style={styles.submitButton}>Submit Feedback</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 40,
    marginBottom: 20,
    backgroundColor:'aqua'
  },
  starsContainer: {
    marginBottom: 40,
    
  },
  feedbackContainer: {
    marginBottom: 20,
  },
  textArea: {
    width: '100%',
    padding: 10,
    fontSize: 16,
  },
  submitContainer: {
    marginBottom: 20,
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
};

export default Feedback1;
