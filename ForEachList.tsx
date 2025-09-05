// for less common
import React from 'react';


        
       const items: string[] = ['One', 'Two', 'Three'];

const ForEachList: React.FC = () => {
  const renderedItems: React.ReactElement[] = [];
  items.forEach((item, index) => {
    renderedItems.push(<li key={index}>{item}</li>);
  });
  return <ul>{renderedItems}</ul>;
};

export default ForEachList;