import React from 'react';
import styles from './circular-loader.module.css';

function CircularLoader({ show }) {
  const dots = Array.from({ length: 20 }, (_, i) => (
    <span key={i} style={{ '--i': i + 1 }}></span>
  ));
  return show ? <div className={styles.loader}>{dots}</div> : null;
}

export default CircularLoader;
