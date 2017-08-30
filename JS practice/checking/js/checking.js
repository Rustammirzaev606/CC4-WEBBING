var x, y;
function work() {

  x = document.getElementById('tBox1').value;
  y = x.toUpperCase();

  if (y == "YES") {
    alert('I Like Dancing Too!!');
  }
  else if (y == "NO") {
    alert('FUNCTION YOU!');
  }
  else {
    alert('Bro say something!');
  }
}

document.getElementById('buttie').onclick = work;

function whip() {
  var good = { fname: "John", lname:"Doe", address:"200 Main St", city:"Kingslanding"}
document.getElementById('smalls').innerHTML = "First name: " + good.fname + ". Last name: " + good.lname + ". Address: " + good.address + ". City: " + good.city;
}

document.getElementById('buttie1').onclick = whip;
