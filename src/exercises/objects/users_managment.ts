import { User } from "./user.ts";

const adminUser = new User("admin", "123456", 30, "jozef@gmail.com");

console.log("Uživatelské jméno admina: " + adminUser.getUsername());
adminUser.logUser();
adminUser.setAge(3);
adminUser.logUser();

console.log("Email admina: " + adminUser.getEmail());

// adminUser.logDivider(); // ! Nelze volat private metodu mimo třídu. Chyba: Property 'logDivider' is private and only accessible within class 'User'.ts(2341)
