//EXAMPLE - ADDING FORM

import React, { useRef } from 'react';

const UncontrolledForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
