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
