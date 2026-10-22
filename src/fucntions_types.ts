function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

const subtract = (a: number, b: number): number => {
  const result = a - b;
  return result;
};

console.log("Výsledek sčítání: " + add(15, 26));
console.log("Výsledek odčítání: " + subtract(52, 63));
