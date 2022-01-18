import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
// import Greetings from './Greetings';

function App() {
  const onSubmit = (form: { name: string; description: string }): void => {
    console.log(form);
  };

  return (
    <div>
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
