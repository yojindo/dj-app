import styles from './index.module.css';
import djLogo from './assets/record.png';

import { useState } from 'react';

function App() {
  const [song, setSong] = useState('');
  const [songQuery, setSongQuery] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedSong = await generateSong();
    setSongQuery(generatedSong);
  };

  const generateSong = async () => {
    const response = await fetch('http://localhost:3009/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ song }),
    });

    const data = await response.json();
    return data.response.trim();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <main className={styles.main}>
      <img src={djLogo} alt="vinyl" className={styles.icon} />
      <h3>Generate song recommendations with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="song and artist"
          onChange={(e) => setSong(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input type="submit" value="Generate" />
        <pre className={styles.result}>{songQuery}</pre>
      </form>
    </main>
  );
}

export default App;
