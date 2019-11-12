

window.addEventListener("load", () => {



  let rangeHoehe = document.getElementById("hoehe");
  let output = document.getElementById("laufe");
  let rangeGewicht = document.getElementById("gewicht");
  let output1 = document.getElementById("laufe1");

let bierText = document.getElementById("bier");
  let weinText = document.getElementById("wein");
  let likörText = document.getElementById("likör");
  let schnapsText = document.getElementById("schnaps");
  let wodkaText = document.getElementById("wodka");
  let whiskyText = document.getElementById("whisky");

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
  let flascheWodka = document.getElementById("woFla");
  let kleinesWhisky = document.getElementById("whKlein");
  let großesWhisky = document.getElementById("whGroß");
  let flascheWhisky = document.getElementById("whFla");


  let ergebnis = document.getElementById("ergebnisBtn");

  output.innerHTML = rangeHoehe.value;
  output1.innerHTML = rangeGewicht.value;



  rangeHoehe.oninput = function() {
    output.innerHTML = this.value;
  }

  rangeGewicht.oninput = function() {
    output1.innerHTML = this.value;
  }


  kleinesBier.addEventListener("click", function() {
  bierText.value = kleinesBier.value;
  });

  großesBier.addEventListener("click", function() {
  bierText.value = großesBier.value;
  });

  piccoloWein.addEventListener("click", function() {
  weinText.value = piccoloWein.value;
  });

  kleinesWein.addEventListener("click", function() {
  weinText.value = kleinesWein.value;
  });

  großesWein.addEventListener("click", function() {
  weinText.value = großesWein.value;
  });

  flascheWein.addEventListener("click", function() {
  weinText.value = flascheWein.value;
  });

  kleinesLikör.addEventListener("click", function() {
  likörText.value = kleinesLikör.value;
  });

  großesLikör.addEventListener("click", function() {
  likörText.value = großesLikör.value;
  });

  flascheLikör.addEventListener("click", function() {
  likörText.value = flascheLikör.value;
  });

  kleinesSchnaps.addEventListener("click", function() {
  schnapsText.value = kleinesSchnaps.value;
  });

  großesSchnaps.addEventListener("click", function() {
  schnapsText.value = großesSchnaps.value;
  });

  flascheSchnaps.addEventListener("click", function() {
  schnapsText.value = flascheSchnaps.value;
  });

  kleinesWhisky.addEventListener("click", function() {
  whiskyText.value = kleinesWhisky.value;
  });

  großesWhisky.addEventListener("click", function() {
  whiskyText.value = großesWhisky.value;
  });

  flascheWhisky.addEventListener("click", function() {
  whiskyText.value = flascheWhisky.value;
  });

  kleinesWodka.addEventListener("click", function() {
  wodkaText.value = kleinesWodka.value;
  });

  großesWokda.addEventListener("click", function() {
  wodkaText.value = großesWokda.value;
  });

  flascheWodka.addEventListener("click", function() {
  wodkaText.value = flascheWodka.value;
  });
});
