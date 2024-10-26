import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Exercise from './Exercise';
import Result from './Result';

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [score, setScore] = useState(null);

  const handleSelectExercise = (exerciseNumber) => {
    setCurrentExercise(exerciseNumber);
    setScore(null);
  };

  const handleComplete = (finalScore) => {
    setScore(finalScore);
    setCurrentExercise(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage onSelectExercise={handleSelectExercise} />} />
        <Route path="/exercise/:exerciseNumber" element={<Exercise onComplete={handleComplete} />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<HomePage onSelectExercise={handleSelectExercise} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
