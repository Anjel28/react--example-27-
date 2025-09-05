import React from 'react';

type ButtonProps = {
  onClick: () => void;
};

const Clickbutton: React.FC<ButtonProps> = ({ onClick }) => {
  console.log('🔁 Button rendered');
  return <button onClick={onClick}>Click Me</button>;
};

export default Clickbutton;