// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {
    name:"John",
    surName: "Smith",    
};

let newUser = prompt("Enter new name","peter");

user.name = newUser;

delete user.name;
console.log(user);
