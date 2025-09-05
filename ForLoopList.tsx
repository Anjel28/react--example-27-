//For loop condition
import React from 'react';

const items = ['Apple', 'Banana', 'Cherry'];

const ForLoopList: React.FC = () => {
const renderedItems: React.ReactElement[] = [];

  items.forEach((items, index) => {
    renderedItems.push(<li key={index}>{items}</li>);
  });

  return <ul>{renderedItems}</ul>;
};


export default ForLoopList;