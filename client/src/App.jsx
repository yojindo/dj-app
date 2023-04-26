import styles from './index.module.css';
import djLogo from './assets/record.png';
import CircularLoader from './components/circular-loader';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState('');
  const [songQuery, setSongQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoaded(false);
    const generatedSong = await generateSong();
    setSongQuery(generatedSong);
    setIsLoaded(true);
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
      <h1>MixSaver</h1>
      <img src={djLogo} alt="vinyl" className={styles.icon} />
      <h3>Generate song recommendations with AI</h3>

      <form onSubmit={onSubmit}>
        <input
          className={styles.textBox}
          type="text"
          name="query-description"
          placeholder="song and artist"
          onChange={(e) => setSong(e.target.value)}
          onKeyPress={handleKeyPress}
          autocomplete="off"
        />
        <input
          className={styles.generateButton}
          type="submit"
          value="Generate"
        />
      </form>
      {isLoaded === null ? null : (
        <div className={styles.loader}>
          <CircularLoader show={!isLoaded} />
        </div>
      )}
      {isLoaded && <pre className={styles.result}>{songQuery}</pre>}
    </main>
  );
}

export default App;
