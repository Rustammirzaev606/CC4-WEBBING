var ford = { name:"F-150", year:2005, model:"XLT" };
function mercury() {
  document.getElementById('display').innerHTML = ford.name;
  document.getElementById('showing').innerHTML = "Hi <br> there!";
};
document.getElementById('buttie').onclick = mercury;
var vehicle;
function chevy() {
  vehicle = {
    make:"Equinox", year:2011, vin: [2020444, 369898], color:"ICE Blue"
  }
  document.getElementById('showing').innerHTML = vehicle.vin[1];
  document.getElementById('open').innerHTML = vehicle.make;
}
document.getElementById('buttie1').onclick = chevy;
