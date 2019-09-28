// MEAN
document.getElementById("meanbutton").addEventListener('click', function(){
  var num = 4;
  var a1g1 = document.getElementById("A1G1").value;
  var a1g2 = document.getElementById("A1G2").value;
  var g1 =(a1g1/a1g2);
  if (a1g1.trim() == '' && a1g2.trim() == ''){
    g1 = 0;
    num = num-1;
  }
  else if(a1g1.trim() == ''|| a1g2.trim() == ''){
    window.alert("PLEASE ENTER A VALUE FOR THE OTHER HALF OF ACTIVITY 1 ఠ_ఠ");
  }
  var a2g1 = document.getElementById("A2G1").value;
  var a2g2 = document.getElementById("A2G2").value;
  var g2 =(a2g1/a2g2);
  if (a2g1.trim() == ''&&a2g2.trim() == ''){
    g2 = 0;
    num = num-1;
  }
  else if(a2g1.trim() == ''|| a2g2.trim() == ''){
    window.alert("PLEASE ENTER A VALUE FOR THE OTHER HALF OF ACTIVITY 2 ఠ_ఠ");
  }
  var a3g1 = document.getElementById("A3G1").value;
  var a3g2 = document.getElementById("A3G2").value;
  var g3 = (a3g1/a3g2);
  if (a3g1.trim() == ''&&a3g2.trim() == ''){
    g3 = 0;
    num = num-1;
  }
  else if(a3g1.trim() == ''|| a3g2.trim() == ''){
    window.alert("PLEASE ENTER A VALUE FOR THE OTHER HALF OF ACTIVITY 3 ఠ_ఠ");
  }
  var a4g1 = document.getElementById("A4G1").value;
  var a4g2 = document.getElementById("A4G2").value;
  var g4 = (a4g1/a4g2);
  if (a4g1.trim() == ''&&a4g2.trim() == ''){
    g4 = 0;
    num = num-1;
  }
  else if(a4g1.trim() == ''|| a4g2.trim() == ''){
    window.alert("PLEASE ENTER A VALUE FOR THE OTHER HALF OF ACTIVITY 4 ఠ_ఠ");
  }
  if (num == 0 ){
    window.alert("PLEASE ENTER SOME VALUES  ఠ_ఠ ")
  }
  else{
  var mean = ((g1+g2+g3+g4)/num)*100;
  document.getElementById("mean0").innerHTML = "MEAN = "+ mean.toFixed(3)+"/100";}
})
// WEIGHT
document.getElementById("weightedbutton").addEventListener('click', function(){
  var num = 4;
  var a1g1 = document.getElementById("A1G1").value;
  var a1g2 = document.getElementById("A1G2").value;
  var a1w = document.getElementById("A1W").value;
  var g1 =(a1g1/a1g2);
  if (a1g1.trim() == ''&&a1g2.trim() == ''&&a1w.trim() == ''){
    g1 = 0;
    num = num-1;
    a1w = 0;
  }
  // else if(a1g1.trim() == ''||a1g2.trim() == ''||a1w.trim() == ''){
  //   window.alert("PLEASE ENTER VALUES FOR CORRESPONDING BOX ఠ_ఠ")
  // }
  var a2g1 = document.getElementById("A2G1").value;
  var a2g2 = document.getElementById("A2G2").value;
  var a2w = document.getElementById("A2W").value;
  var g2 =(a2g1/a2g2);
  if (a2g1.trim() == ''&&a2g2.trim() == ''&&a2w.trim() == ''){
    g2 = 0;
    num = num-1;
    a2w = 0;
  }
  // else if(a2g1.trim() == ''||a2g2.trim() == ''||a2w.trim() == ''){
  //   window.alert("PLEASE ENTER VALUES FOR CORRESPONDING BOX ఠ_ఠ")
  // }
  var a3g1 = document.getElementById("A3G1").value;
  var a3g2 = document.getElementById("A3G2").value;
  var a3w = document.getElementById("A3W").value;
  var g3 = (a3g1/a3g2);
  if (a3g1.trim() == ''&&a3g2.trim() == ''&&a3w.trim() == ''){
    g3 = 0;
    num = num-1;
    a3w = 0;
  }
  // else if(a3g1.trim() == ''||a3g2.trim() == ''||a3w.trim() == ''){
  //   window.alert("PLEASE ENTER VALUES FOR CORRESPONDING BOX ఠ_ఠ")
  // }
  var a4g1 = document.getElementById("A4G1").value;
  var a4g2 = document.getElementById("A4G2").value;
  var a4w = document.getElementById("A4W").value;
  var g4 = (a4g1/a4g2);
  if (a4g1.trim() == ''&&a4g2.trim() == ''&&a4w.trim() == ''){
    g4 = 0;
    num = num-1;
    a4w = 0;
  }
  if(a1g1.trim() == ''^a1g2.trim() == ''^a1w.trim() == ''||a2g1.trim() == ''^a2g2.trim() == ''^a2w.trim() == ''||a3g1.trim() == ''^a3g2.trim() == ''^a3w.trim() == ''||a4g1.trim() == ''^a4g2.trim() == ''^a4w.trim() == ''){
    window.alert("PLEASE ENTER VALUES FOR CORRESPONDING BOX ఠ_ఠ")
  }
  // else if(a4g1.trim() == ''||a4g2.trim() == ''||a4w.trim() == ''){
  //   window.alert("PLEASE ENTER VALUES FOR CORRESPONDING BOX ఠ_ఠ")
  // }
  if (num == 0 ){
    window.alert("PLEASE ENTER SOME VALUES  ఠ_ఠ ")
  }
  else{
  var weight = (((g1*a1w)+(g2*a2w)+(g3*a3w)+(g4*a4w))/(parseInt(a1w)+parseInt(a2w)+parseInt(a3w)+parseInt(a4w)))*100;
  document.getElementById("weight").innerHTML = "WEIGHTED = "+ weight.toFixed(3)+"/100";}
})
// Percentage
document.onkeyup = function(e){
  var a1g1 = document.getElementById("A1G1").value;
  var a1g2 = document.getElementById("A1G2").value;
  var g1 =(a1g1/a1g2);
  if(a1g1.trim() != ''&&a1g2.trim() != ''){
    document.getElementById("percent1").innerHTML = (g1*100).toFixed(3)+"%";
  }
  var a2g1 = document.getElementById("A2G1").value;
  var a2g2 = document.getElementById("A2G2").value;
  var g2 =(a2g1/a2g2);
  if (a2g1.trim() != ''&&a2g2.trim() != ''){
    document.getElementById("percent2").innerHTML = (g2*100).toFixed(3)+"%";
  }
  var a3g1 = document.getElementById("A3G1").value;
  var a3g2 = document.getElementById("A3G2").value;
  var g3 =(a3g1/a3g2);
  if (a3g1.trim() != ''&&a3g2.trim() != ''){
    document.getElementById("percent3").innerHTML = (g3*100).toFixed(3)+"%";
  }
  var a4g1 = document.getElementById("A4G1").value;
  var a4g2 = document.getElementById("A4G2").value;
  var g4 =(a4g1/a4g2);
  if (a4g1.trim() != ''&&a4g2.trim() != ''){
    document.getElementById("percent4").innerHTML = (g4*100).toFixed(3)+"%";
  }
}
