import React, { useState, useEffect } from 'react';
import styles from './notes.module.css';

const Notes = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = window.localStorage.getItem('notesText');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    window.localStorage.setItem('notesText', newText);
  };

  return (
    <div className={styles.notesContainer}>
      <p className={styles.notesTitle}>All notes</p>
      <textarea className={styles.notesTextarea} value={text} onChange={handleChange} />
    </div>
  );
};

export default Notes;
