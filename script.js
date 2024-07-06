function sum(num1, num2) {
  alert(num1 + num2);
}

function sum2() {
  const num1 = Number(prompt("Enter First Number"));
  const num2 = Number(prompt("Enter Second Number"));
  console.log(num1, num2);
  alert(`Sum is ${num1 + num2}`);
}

function fullName(fname, lname) {
  alert(fname + " " + lname);
}

function fullName2() {
  const fname = prompt("Enter Name");
  const lname = prompt("Enter Surname");
  alert(fname + " " + lname);
}
