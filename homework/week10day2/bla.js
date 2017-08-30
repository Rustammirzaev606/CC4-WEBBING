var gord;
gord = { city: "Cleveland", team: "Cavaliers", arena: "Quicken Loans", star: "Lebron", owner: "Gilbert", co: "Usher", };

$('.spoke').click(function() {
  $('#p1').text('Our home town is ' + gord.city + '& our superstar is ' + gord.star);

});
// Our home town is Cleveland & our superstar is Lebron

var zorro;
zorro = { Infiniti: "FX 35" , ford: "Ranger", Chevy: "Corvette", Nissan :"Altima" };

$('.inf').click(function() {
  $('#p2').text(zorro.Chevy);

});

$('.doge').click(function(){
  $('#p1').text('');
  $('#p2').text('');
});
