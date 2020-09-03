let l10nEN = new Intl.NumberFormat("en-US");
let l10nDE = new Intl.NumberFormat("de-DE");

console.log(l10nEN.format(1234567.89)); // "1,234,567.89"
console.log(l10nDE.format(1234567.89)); // "1.234.567,89"
