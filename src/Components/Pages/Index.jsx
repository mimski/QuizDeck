import { useState } from "react";

const Index = ({ quizData }) => {
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectOption = (questionIndex, selectedOption) => {
    if (selectedAnswers[questionIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));

    setFlippedCards((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
  };

  const handleCardClick = (index) => {
    if (selectedAnswers[index]) return;

    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setFlippedCards({});
  };

  const allAnswered =
    quizData.length > 0 &&
    Object.keys(selectedAnswers).length === quizData.length;

  const correctCount = Object.entries(selectedAnswers).filter(
    ([index, answer]) => quizData[index]?.answer === answer
  ).length;

  return (
    <div className="p-5 m-5">
      <div className="row g-4">
        {Array.isArray(quizData) &&
          quizData.map((item, index) => {
            const selected = selectedAnswers[index];
            const isCorrect = selected === item.answer;
            const isFlipped = flippedCards[index];

            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                key={index}
              >
                <div
                  className={`quiz-card ${isFlipped ? "flipped" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <h6
                        className="fw-bold mb-2 border-bottom pb-4"
                        dangerouslySetInnerHTML={{ __html: item.question }}
                      />
                      <ul className="list-unstyled mb-0">
                        {item.options.map((opt, i) => {
                          const letter = String.fromCharCode(97 + i);
                          let className = "option";

                          if (isFlipped) {
                            if (opt === item.answer) {
                              className += " correct";
                            } else if (selected === opt) {
                              className += " incorrect";
                            }
                          } else if (selected === opt) {
                            className += " selected";
                          }

                          return (
                            <li
                              key={i}
                              className={className}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectOption(index, opt);
                              }}
                              dangerouslySetInnerHTML={{
                                __html: `${letter}. ${opt}`,
                              }}
                            ></li>
                          );
                        })}
                      </ul>
                      {!isFlipped && <span>Click to flip</span>}
                    </div>

                    <div className="card-back text-center">
                      <h6 className="fw-bold">Answer</h6>
                      {selected ? (
                        <>
                          <p
                            className={
                              isCorrect ? "text-success" : "text-danger"
                            }
                          >
                            Correct: {selected}
                          </p>
                          {!isCorrect && (
                            <p>
                              Your answer: <strong>{item.answer}</strong>
                            </p>
                          )}
                        </>
                      ) : (
                        <p>You didn't select an answer</p>
                      )}
                      <small>(click to flip back)</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {allAnswered && (
        <div className="mt-4 text-center">
          <h5 className="text-primary">
            You got {correctCount} out of {quizData.length} questions right.
          </h5>
          <button className="btn btn-secondary mt-3" onClick={handleReset}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
