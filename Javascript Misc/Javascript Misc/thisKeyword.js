var address = {
  company: "Courscate",
  city: "Surat",
  state: "Gujarat",
  fullAddress: function () {
    return this.company + " " + this.city + " " + this.state;
  },
};

let fetch = address.fullAddress();
console.log(fetch);

// Global Context

// set website to this -> global Circular
global.website = "Javatpoint";

function web() {
  console.log(website);
}

web();

// call and apply

var emp_address = {
  fullAddress: function () {
    return this.company + " " + this.city + " " + this.state;
  },
};
var address2 = {
  company: "Javatpoint",
  city: "Noida",
  state: "UP",
};

console.log(emp_address.fullAddress.call(address2));
console.log(emp_address.fullAddress.apply(address2));

global.lang = "Java";

function lang_name(call) {
  call();
}

var obj = {
  lang: "JavaScript",
  language: function () {
    console.log(this.lang + " is a popular programming language.");
  },
};

lang_name(obj.language);
lang_name(obj.language.bind(obj));
