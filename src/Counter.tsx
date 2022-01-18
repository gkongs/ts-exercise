import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  // useState의 Generics는 생략 가능하다
  // 다만 null일 수도 있고 아닐수도 있을때 활용하면 좋다.
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
