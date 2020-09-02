// Run these with Nodejs
// Eg: node <filename>

// if statement

if (10 > 5) {
    var outcome = "if block";
}
console.log("logging outcome... ", outcome);

// else statement
if ("cat" === "dog") {
    var outcome = "if block";
} else {
    var outcome = "else block";
}

console.log("logging outcome... ", outcome);

// else if statement

if (false) {
    var outcome = "if block";
} else if (true) {
    var outcome = "else if block";
} else {
    var outcome = "else block";
}

console.log("logging outcome... ", outcome);

// When there is no else

outcome = undefined;

if (false) {
    var outcome = "if block";
} else if (false) {
    var outcome = "else if block";
}

console.log("logging outcome... ", outcome);


