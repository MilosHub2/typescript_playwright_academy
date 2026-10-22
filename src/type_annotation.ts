let firstName: string = "Petr";
console.log(firstName);

firstName = "Pavel";
console.log(firstName);

// firstName = 25; // ! Nelze, dostaneme chybu: Type 'number' is not assignable to type 'string'.ts(2322)

let age = 52; // ? Použití implicitní typové anotace -> typ se přiřadí automaticky
console.log(age);
age = 13;
//age = "string"; // ! Nelze! Chyba: Type 'string' is not assignable to type 'number'.ts(2322)
console.log(age);

// let tsArray: string[]; // ? Typová anotace pro pole (v tomto případě pole stringů)
// let tsArrayObject: Array<string>;
