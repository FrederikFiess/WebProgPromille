window.addEventListener("load", () => {

  let rangeHoehe = document.getElementById("hoehe");
  let output = document.getElementById("laufe");
  let rangeGewicht = document.getElementById("gewicht");
  let output1 = document.getElementById("laufe1");
  
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
