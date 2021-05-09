let a = 1;
console.log(a);
let b = "1";
console.log(a == b);
const c = 1;
//c=2;
//TypeError: "c" is read-only

console.log(a === b);
console.log(a !== b);
// Expected '===' and instead saw '=='. (eqeqeq)eslint
// ==  타입은 비교 하지 않고 값만 비교
// === 타입도 같이 비교

let a2 = "Hello";
let b2 = "World!";
console.log(a2 + b2);

function hello(name) {
  console.log("Hello " + name + "!");
  console.log(`Hello ${name}@`);
}

hello("World");

function add(a, b) {
  return a + b;
}
const add2 = (a, b) => {
  return a + b;
};
const add3 = (a, b) => a + b;

console.log(add(1, 2));
console.log(add2(1, 3));
console.log(add3(1, 4));

const intro = {
  name: "insung",
  age: 1,
  "j o b": "student",
  address: {
    nation: "korea",
    city: "busan"
  }
};
console.log(intro);
console.log(intro.address);
console.log(intro.address.nation);
console.log(intro["j o b"]);

//비구조화 할당
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};
function printIronMan({ alias, name, actor }) {
  const text = `${alias}(${name})의 역할을 맡은 배우는 ${actor}`;
  console.log(text);
}
printIronMan(ironMan);

const array = [1, 2, 3, 4];
console.log(array);
array.push(5);
console.log(array);

for (let a = 0; a < array.length; a++) {
  console.log(array[a]);
}

const keyvalue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(Object.entries(keyvalue));
//  배열형태로 반환
console.log(Object.keys(keyvalue));
console.log(Object.values(keyvalue));

for (let a in keyvalue) {
  console.log(`${a} : ${keyvalue[a]}`);
}
