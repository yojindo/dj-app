import styles from './index.module.css';
import djLogo from './assets/record.png';

import { useState } from 'react';

function App() {
  const [song, setSong] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', song);
  };

  return (
    <main className={styles.main}>
      <img src={djLogo} alt="vinyl" className={styles.icon} />
      <h3>Generate songs with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="song title and artist"
          onChange={(e) => setSong(e.target.value)}
        />
        <input type="submit" value="song" />
      </form>
    </main>
  );
}

export default App;
