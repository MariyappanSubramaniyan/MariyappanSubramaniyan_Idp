// 1.Write a program to demonstrate how a function can be passed as a parameter to another function.

function greet() {
    return "Hello";
}
function greetuser(username, func) {
    console.log(func() + " " + username);
}

greetuser("John", greet) // Hello John
greetuser("Adam", greet) // Hello Adam
greetuser("Bob", greet) // Hello Bob


//2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.

let initial = (firstname,lastname)=> firstname[0]+lastname[0];
console.log(initial("Roger","Waters")); // Outputs: RW