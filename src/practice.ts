// 변수 선언
const message: string = 'hello world';
console.log(message);

// 조건 가능
let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임

// 함수 선언
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

// 객체 형태 interface
interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20,
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react'],
};

// extends 를 통해 상속 가능
/*
interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
  skills: string[];
}
해당 코드는 위와 같음

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

🚀 const people: Person[] = [person, expert];
-> 상속했음으로  person 타입으로 선언 가능
*/

// Generics
// 타입이 무엇이 올지 모를 경우, 선언시 부여된 타입으로 타입 추론을 할 수 있도록 해주는 역할

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

function wrap<T>(param: T) {
  return {
    param,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
const wrapped = wrap(10);

// interface에서 사용하는 generics
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};
export default null;
