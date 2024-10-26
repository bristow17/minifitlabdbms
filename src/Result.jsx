import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { score, questions, selectedOptions } = location.state || {};

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Determine the message based on the score
  const getResultMessage = (score) => {
    if (score === 10) {
      return "Congratulations! Perfect score!";
    } else if (score >= 7) {
      return "Nearly there! Keep working!";
    } else {
      return "Don't be discouraged. Every mistake is a learning opportunity!";
    }
  };

  return (
    <div className="result-container text-center p-4">
      <h2 className="result-header">Quiz Results</h2>
      <h3 className="score-display">Your Score: {score} out of {questions?.length || 0}</h3>
      <p className="result-message">{getResultMessage(score)}</p> {/* Display the result message */}
      
      <div className="question-list mt-4">
        {questions?.map((question, index) => (
          <div key={index} className="question-item card p-3 mb-4">
            <h5>Question {index + 1}</h5>
            <p className="font-weight-bold">{question.question}</p>
            <p><strong>Your Answer:</strong> {selectedOptions[index] !== undefined ? question.choices[selectedOptions[index]] : 'No answer'}</p>
            <p><strong>Correct Answer:</strong> {question.answer}</p>
          </div>
        ))}
      </div>
      
      <Link to="/home" className="btn btn-primary mt-4">Back to Home</Link>
    </div>
  );
}

export default Result;
