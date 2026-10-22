export class User {
  public username: string; // ? public = použitelné kdekoliv, není potřeba zadávat, property bez anotace viditelnosti je public automaticky
  password: string;
  age: number;
  isActive = true;
  email: string;
  readonly role = "user"; // Vlastnost je pouze pro čtení - nelze změnit!

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel "${this.username}", věk: ${this.age}, stav: ${this.isActive}`,
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`,
    );
  }

  setAge(newAge: number): void {
    const originalAge = this.age;
    this.age = newAge;
    console.log(
      `Změna věku uživatele ${this.username} z ${originalAge} na ${newAge}`,
    );
    this.logDivider();
  }

  getEmail(): string {
    return this.email;
  }

  private logDivider() {
    console.log("------------");
  }
}
