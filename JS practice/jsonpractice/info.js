

function shoes() {
  var jordan = { first: "One", second: "Two", third: "Three", fourth: "Four"};

  document.getElementById('size').innerHTML = jordan.second;

}
document.getElementById('buttie').onclick = shoes;
