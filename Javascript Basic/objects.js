// Run these with Nodejs
// Eg: node <filename>

// Objects
var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};
console.log("logging an object... ", course);

// Getting keys
console.log("getting course name...", course.name);
console.log("getting course start...", course['start']);
console.log("updating course name...");
course.name = "GRA 2030";
console.log(course);
