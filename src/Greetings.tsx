import React from 'react';

interface Props {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 함수 예시
}

export default function Greetings({ name, mark, optional, onClick }: Props) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};
