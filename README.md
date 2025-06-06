# QuizDeck

**QuizDeck** is a modern flashcard-style quiz app built with React. It fetches trivia questions from the OpenTDB API and presents them as stylish interactive cards. Flip, select, and learn — the smarter way.

---

![QuizDeck Screenshot](https://github.com/user-attachments/assets/1c6312a2-3b7c-4510-a351-cd9172422007)

![select Quiz Settings](https://github.com/user-attachments/assets/418c9c86-9cf4-411f-a0b9-00ce9eaa2815)

![Answers](https://github.com/user-attachments/assets/fcc558d8-093b-4db6-bcc2-dc6c85890277)

![QuizDeckGame](https://github.com/user-attachments/assets/9d23746b-ab58-4d19-bf52-d4a33ceb74a7)

## Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/mimski/QuizDeck.git
cd QuizDeck
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## How to Use

1. Click **“Get Quiz”**.
2. Choose a category and number of questions.
3. Click **“Generate”**.
4. Each card shows a question — pick an answer to flip it.
5. Get instant feedback (correct/incorrect).
6. At the bottom, you'll see your score and a restart option.

Flashcard behavior:

- You **cannot re-answer** once flipped.
- Some cards will scroll if content overflows (auto-handled).
- Responsive and mobile-friendly.

---

## Features

- Flip-card style quiz with animations
- Categories + question limits
- Correct/incorrect UI feedback
- Score tracker and restart

---

## Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenTDB API](https://opentdb.com)
- [Bootstrap](https://getbootstrap.com)
- [Remix Icons](https://remixicon.com/)
