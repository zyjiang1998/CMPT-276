document.onkeyup = function(e){
  var fly1 = +document.getElementById("fly").value;
  var fight1 = +document.getElementById("fight").value;
  var fire1 = +document.getElementById("fire").value;
  var water1 = +document.getElementById("water").value;
  var electric1 = +document.getElementById("electric").value;
  var frozen1 = +document.getElementById("frozen").value;
  var total1 = (fly1+fight1+fire1+water1+electric1+frozen1);
  document.querySelector("#total").value = parseInt(total1);
}
// document.getElementById("submitb").addEventListener('click', function(){
//   var name1 = document.getElementById("name");
//   var weight1 = document.getElementById("weight").value;
//   var height1 = document.getElementById("height").value;
//   var trainer1 = document.getElementById("trainer");
//   if (name1 == "NULL" || weight1.trim() == '' || height1.trim() == '' || trainer1 == "NULL"){
//     window.alert("Please don't leave anything blank!!");
//   }
// });
