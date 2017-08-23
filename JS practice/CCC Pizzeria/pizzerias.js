function printToppings() {
  var stTop, ndTop, rdTop;
  stTop = document.getElementById('fstTopping').value;
  ndTop = document.getElementById('sndTopping').value;
  rdTop = document.getElementById('trdTopping').value;

  document.getElementById('asd').innerHTML = "You ordered " + stTop + " " + ndTop + " " + rdTop + " pizza.";
}
