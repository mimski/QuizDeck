import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";

const Nav = ({ onGenerate }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(4);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const handleGenerate = () => {
    const modalElement = document.getElementById("quizModal");
    if (!modalElement) return;
    let modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (!modalInstance) {
      modalInstance = new bootstrap.Modal(modalElement);
    }

    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
    document.body.classList.remove("modal-open");

    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}${
      selectedCategory ? `&category=${selectedCategory}` : ""
    }`;

    onGenerate(url);
    modalInstance.hide();
  };

  return (
    <>
      <div className="px-5 py-3 nav-wrap">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between gap-3 px-5">
          <h3 className="logo navbar-brand text-light">
            <i className="ri-brain-line me-2"></i>
            QuizDeck
          </h3>
          <button
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#quizModal"
          >
            <i className="ri-lightbulb-flash-line"></i>
            Get Quiz
          </button>
        </nav>
      </div>

      {/* Get Quiz Modal */}
      <div
        className="modal fade"
        id="quizModal"
        tabIndex="-1"
        aria-labelledby="quizModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="quizModalLabel">
                Select Quiz Settings
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">-- Select Category --</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Number of Questions</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max="30"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleGenerate}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
