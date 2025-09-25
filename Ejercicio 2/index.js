let message_greetings = "Welcome to the application!";
let inform_message = "This is an informational message.";
let warning_message = "This is warning. Be cautious.";
let error_message = "Error! Something went wrong.";

console.log(
  "%c" + message_greetings,
  "color: blue; font-weight: bold; font-size: 18px"
);
console.log("%c" + inform_message, "color: green; font-size: 16px");
console.warn(warning_message);
console.error(error_message);
console.table(
  [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Bob", age: 40, city: "Chicago" },
  ],
  ["name", "age", "city"]
);
