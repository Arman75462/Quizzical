## Description

Quizzical is a React-based web application where users can answer multiple-choice questions and check their scores. It fetches questions from an API and allows users to select answers, with visual feedback on correctness. This README provides an overview of the project.

### Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)

### Features

- **Quiz Questions**: Displays multiple-choice questions fetched from an API.
- **Interactive Options**: Users can select answers for each question.
- **Dynamic Styling**: Visual feedback on selected options (correct, incorrect, or chosen).
- **Score Calculation**: Calculates and displays the score based on correct answers.
- **Play Again**: Allows users to restart the quiz after completion.
- **Responsive Design**: Designed to work well on different screen sizes.

### How to Play

1. **Answering Questions**:

   - Read each question carefully.
   - Click on an option to select your answer.
   - The selected option changes color to indicate it's chosen.

2. **Checking Answers**:

   - Click the "Check answers" button after answering all questions.
   - Correct answers are highlighted in green.
   - Chosen incorrect answers are highlighted in red.

3. **Viewing Results**:

   - After checking answers, see your score.

4. **Playing Again**:

   - Click "Play again" to reset the quiz and start over.

5. **Technical Details**:
   - The project uses React for the frontend.
   - CSS is used for styling, with dynamic class changes for option feedback.

### Additional Notes

- **API**: Questions are fetched from an external API (specified in the code).
- **State Management**: Uses React state hooks to manage user selections and quiz completion.
