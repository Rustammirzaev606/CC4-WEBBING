function changeStatus() {
 var curMes = "good1";

   if (curMes == "good2") {
     document.images[0].src = "qop.jpg";
     curMes = "good1";
   }
   else {
     document.images[1].src = "jimCarry.jpg";
     curMes = "good2";
   }
 }
