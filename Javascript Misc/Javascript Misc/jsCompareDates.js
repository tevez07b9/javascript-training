function compare() {
  var d1 = new Date("2020-01-23"); //yyyy-mm-dd
  var d2 = new Date("2020-01-21"); //yyyy-mm-dd
  if (d1 > d2) {
    console.log("True, First date is greater than second date");
  } else if (d1 < d2) {
    console.log("False, Second date is smaller than the first");
  } else {
    console.log("Both date are same and equal");
  }
}
compare(); //invoking compare()

// Comparing Date with Time

var d1 = new Date("Apr 17, 2019 12:10:10"); //mm dd, yyyy hh:mm:ss
var d2 = new Date("Dec 1, 2019 12:10:30"); //mm dd, yyyy hh:mm:ss
if (d1 > d2) {
  console.log("False, d1 date and time is smaller than d2 date and time");
} else if (d1 < d2) {
  console.log("True, d2 is greater in terms of both time and date");
} else {
  console.log("Both date and time are same and equal");
}

// Comparing date with getTime()

var d1 = new Date("2019-10-10, 10:10:10"); //yyyy-mm-dd hh:mm:ss
var currentdate = new Date(); //fetch the current date value
if (d1.getTime() < currentdate.getTime()) {
  console.log("True, currentdate and time are greater than d1");
} else if (d1.getTime() > currentdate.getTime()) {
  console.log("False");
} else {
  console.log("True, equal");
}
