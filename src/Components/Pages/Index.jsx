import { useState } from "react";

function Index({ quizData }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="p-5 my-5">
        <div className="row g-4">
          {quizData.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-md-4 col-lg-3 mb-3"
              key={index}
            >
              <div
                className={`quiz-card ${flippedIndex === index ? "" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <h6
                      className="fw-bold mb-2 border-bottom pb-4"
                      dangerouslySetInnerHTML={{ __html: item.question }}
                    ></h6>
                    <ul className="list-unstyled mb-0">
                      {item.options.map((opt, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: `${String.fromCharCode(97 + i)}. ${opt}`,
                          }}
                        ></li>
                      ))}
                    </ul>
                    <span>Answer</span>
                  </div>
                  <div className="card-back text-center">
                    <h6 className="fw-bold">Answer</h6>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${String.fromCharCode(
                          97 + item.options.indexOf(item.answer)
                        )}. ${item.answer}`,
                      }}
                    ></p>
                    <small>(click to flip back)</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Index;
