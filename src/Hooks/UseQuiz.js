import { useState } from "react";

const useQuiz = () => {
  const [quizData, setQuizData] = useState([]);

  const fetchQuizData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const formattedQuizData = data.results.map((q) => ({
        question: q.question,
        options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        answer: q.correct_answer,
      }));

      setQuizData(formattedQuizData);
    } catch (error) {
      console.error("Failed to fetch Quiz data", error);
    }
  };

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  return { quizData, fetchQuizData };
};

export default useQuiz;
