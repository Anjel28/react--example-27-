import { useRef } from 'react';

const Tricker: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null);

  return <div ref={myRef}>Hello</div>;
};

export default Tricker;