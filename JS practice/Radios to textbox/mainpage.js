$( "input" ).on( "click", function() {
  $( ".outp1" ).html( "Your favorite browser is " + $("input:checked").val());
});
