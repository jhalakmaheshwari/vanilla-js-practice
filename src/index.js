import "./styles.css";

let name = {
  fName: "Jhalak",
  lName: "Maheshwari"
};

let printName = function (hometown, state) {
  console.log(
    "firstname::",
    this.fName,
    "lastname::",
    this.lName,
    hometown,
    state
  );
};

let printMyName = printName.bind(name, "Jaipur", "Rajasthan");
printMyName("Rajasthan");

// Make your own Bind function
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Jaipur");
printMyName2("Rajasthan");

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
