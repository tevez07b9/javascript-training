// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
let list = ["ä", "a", "z"];
let l10nDE = new Intl.Collator("de");
let l10nSV = new Intl.Collator("sv");
console.log(l10nDE.compare("ä", "z")); // -1
console.log(l10nSV.compare("ä", "z")); // +1
console.log(list.sort(l10nDE.compare)); // [ "a", "ä", "z" ]
console.log(list.sort(l10nSV.compare)); // [ "a", "z", "ä" ]
