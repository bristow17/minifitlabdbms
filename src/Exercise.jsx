import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mongoQuestions from './Questions/mongo.json';
import sqlQuestions from './Questions/sql.json';
import './Exercise.css';

const getRandomQuestions = (questions, count) => {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

function Exercise() {
  const { exerciseNumber } = useParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allQuestions = exerciseNumber === "1" ? sqlQuestions : mongoQuestions;
    const randomQuestions = getRandomQuestions(allQuestions, 10);
    setQuestions(randomQuestions);
  }, [exerciseNumber]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelections);
  };

  const handleFinish = () => {
    let totalScore = 0;
    selectedOptions.forEach((selected, index) => {
      if (selected !== undefined && questions[index].choices[selected] === questions[index].answer) {
        totalScore++;
      }
    });
    navigate('/result', { state: { score: totalScore, questions, selectedOptions } });
  };

  // Check if all questions are answered
  const isAllAnswered = selectedOptions.length === questions.length && selectedOptions.every(option => option !== undefined);

  return (
    <div className="exercise-page">
      <h2>Answer All Questions</h2>
      <div className="questions-container">
        {questions.map((question, index) => (
          <div 
            key={index} 
            className={`question-card ${selectedOptions[index] === undefined ? 'unanswered' : ''}`}
          >
            <h4>Question {index + 1}</h4>
            <p>{question.question}</p>
            <div className="options-container">
              {question.choices.map((choice, optionIndex) => (
                <div 
                  key={optionIndex} 
                  className={`option ${selectedOptions[index] === optionIndex ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(index, optionIndex)}
                >
                  {choice}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button 
        className={`finish-button ${isAllAnswered ? 'active' : 'inactive'}`} 
        onClick={isAllAnswered ? handleFinish : undefined}
        disabled={!isAllAnswered}
      >
        Finish
      </button>
      <p className="finish-message">
        {isAllAnswered ? '' : 'Finish is enabled only after answering all questions.'}
      </p>
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Exercise;
