window.addEventListener("load", () => {

  let rangeHoehe = document.getElementById("hoehe");
  let output = document.getElementById("laufe");
  let rangeGewicht = document.getElementById("gewicht");
  let output1 = document.getElementById("laufe1");

  let kleinesBier = document.getElementById("bKlein");
  let großesBier = document.getElementById("bGroß");
  let piccoloWein = document.getElementById("wPicc");
  let kleinesWein = document.getElementById("wKlein");
  let großesWein = document.getElementById("wGroß");
  let flascheWein = document.getElementById("wFla");
  let kleinesLikör = document.getElementById("lKlein");
  let großesLikör = document.getElementById("lGroß");
  let flascheLikör = document.getElementById("lFla");
  let kleinesSchnaps = document.getElementById("sKlein");
  let großesSchnaps = document.getElementById("sGroß");
  let flascheSchnaps = document.getElementById("sFla");
  let kleinesWodka = document.getElementById("woKlein");
  let großesWokda = document.getElementById("woGroß");
  let flascheWodka = document.getElementById("woFla")
  let kleinesWhisky = document.getElementById("whKlein");
  let großesWhisky = document.getElementById("whGroß");
  let flascheWodka = document.getElementById("whFla")


  let neuesGetraenk = document.getElementById("neuerBtn");
  let ergebnis = document.getElementById("ergebnisBtn");

  output.innerHTML = rangeHoehe.value;
  output1.innerHTML = rangeGewicht.value;



  rangeHoehe.oninput = function() {
    output.innerHTML = this.value;
  }

  rangeGewicht.oninput = function() {
    output1.innerHTML = this.value;
  }









});
