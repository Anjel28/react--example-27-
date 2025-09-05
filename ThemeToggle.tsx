// ThemeToggle.tsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div
     style={{backgroundColor: state.theme === 'Light'? '#fff': '#333',
        color: state.theme === 'Light'? '#000': '#fff',
        padding: '2rem',
        textAlign: 'center',
     }}
    >
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};
