function callFile() {
  var ttBro = new XMLHttpRequest();
  ttBro.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("qwe").innerHTML = this.responseText;
    }

  };
  ttBro.open("POST","xx/zxc.txt", true);
  ttBro.send();
  alert(ttBro.readyState);
}
document.getElementById("bro").onclick = callFile;


// document.getElementById('bro').onclick = callFile;
