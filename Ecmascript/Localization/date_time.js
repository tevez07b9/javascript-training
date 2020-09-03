let l10nEN = new Intl.DateTimeFormat("en-US");
let l10nDE = new Intl.DateTimeFormat("de-DE");
console.log(l10nEN.format(new Date("2015-01-02"))); // "1/2/2015"
console.log(l10nDE.format(new Date("2015-01-02"))); // "2.1.2015"
