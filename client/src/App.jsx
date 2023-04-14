import styles from './index.module.css';
import questionLogo from './assets/question.png';

import { useState } from 'react';

function App() {
  const [questionDescription, setQuestionDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', questionDescription);
  };

  return (
    <main className={styles.main}>
      <img src={questionLogo} alt="lightbulb" className={styles.icon} />
      <h3>Generate Questions with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Ask your question"
          onChange={(e) => setQuestionDescription(e.target.value)}
        />
        <input type="submit" value="Generate questions" />
      </form>
    </main>
  );
}

export default App;
