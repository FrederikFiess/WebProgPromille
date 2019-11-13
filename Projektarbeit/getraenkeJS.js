window.addEventListener("load", () => {


  let rangeHoehe = document.getElementById("hoehe");
  let outputHöhe = document.getElementById("laufe"); //für berechne einbinden
  let rangeGewicht = document.getElementById("gewicht");
  let outputGewicht = document.getElementById("laufe1"); //Für berechne einbinden
  let rangeAlter = document.getElementById("alter");
  let outputAlter = document.getElementById("laufe2");

  //Lese die Mengen aus
  let bierMenge = document.getElementById("bier_menge_id");
  let weinMenge = document.getElementById("wein_menge_id");
  let likörMenge = document.getElementById("likör_menge_id");
  let schnapsMenge = document.getElementById("schnaps_menge_id");
  let whiskyMenge = document.getElementById("whisky_menge_id");
  let wodkaMenge = document.getElementById("wodka_menge_id");

  //Lese den Alkoholgehalt aus
  let bierAlkohol = document.getElementById("bier_alkohol_id");
  let weinAlkohol = document.getElementById("wein_alkohol_id");
  let likörAlkohol = document.getElementById("likör_alkohol_id");
  let schnapsAlkohol = document.getElementById("schnaps_alkohol_id");
  let whiskyAlkohol = document.getElementById("whisky_alkohol_id");
  let wodkaAlkohol = document.getElementById("wodka_alkohol_id");

  //Text des ergebnisses
  let ergebnisText = document.getElementById("ergebnisText");

  //Lese die Radio Buttons für die Fallunterscheidung
  let geschlechtMann = document.getElementById("mann_id").value;
  let geschlechtFrau = document.getElementById("frau_id").value

  //Um welches Geschlecht handelt es switch
  // let geschlechtMann =document.getElementById("mann");
  // let geschlechtFrau = document.getElementById("frau");


  outputHöhe.innerHTML = rangeHoehe.value;
  outputGewicht.innerHTML = rangeGewicht.value;
  outputAlter.innerHTML = rangeAlter.value


  rangeHoehe.oninput = function() {
    outputHöhe.innerHTML = this.value;
  }

  rangeGewicht.oninput = function() {
    outputGewicht.innerHTML = this.value;
  }

  rangeAlter.oninput = function() {
    outputAlter.innerHTML = this.value;
  }



  berechnePromille.addEventListener("click", function() {

    let rechneReduktionFrau;
    let rechneReduktionMann;
    let aufgenommeneMenge;
    let ergebnis;

    if (geschlechtFrau == "Weiblich") {
      console.log("geklickt");

      rechneReduktionFrau = (1.055 * (-2.097 + 0.1069 * outputHöhe + 0.2466 * outputGewicht) / 0.8 * outputGewicht);

      if (bierMenge.value != 0 || weinMenge.value != 0 || likörMenge.value != 0 || schnapsMenge.value != 0 || whiskyMenge.value != 0 || wodkaMenge.value != 0) {
        aufgenommeneMenge = bierMenge.value * bierAlkohol.value + weinMenge.value * weinAlkohol + likörMenge.value * likörAlkohol.value + schnapsMenge.value * schnapsAlkohol + wodkaMenge.value * wodkaAlkohol.value + whiskyMenge.value * whiskyAlkohol.value;

      }
      ergebnis = aufgenommeneMenge / (outputGewicht * rechneReduktionFrau);
      console.log("Dein Promillewert " + ergebnis);


    } else if (geschlechtMann == "Männlich") {
      rechneReduktionMann = (1.055 * (2.447 - 0.09516 * outputAlter + 0.1074 * outputHöhe + 0.3362 * outputGewicht) / 0.8 * outputGewicht);
      aufgenommeneMenge = bierMenge.value + weinMenge.value + likörMenge.value + schnapsMenge.value + whiskyMenge.value + wodkaMenge.value

      if (bierMenge.value != 0 || weinMenge.value != 0 || likörMenge.value != 0 || schnapsMenge.value != 0 || whiskyMenge.value != 0 || wodkaMenge.value != 0) {
        aufgenommeneMenge = bierMenge.value * bierAlkohol.value + weinMenge.value * weinAlkohol + likörMenge.value * likörAlkohol.value + schnapsMenge.value * schnapsAlkohol + wodkaMenge.value * wodkaAlkohol.value + whiskyMenge.value * whiskyAlkohol.value;


      }
      ergebnis = aufgenommeneMenge / (outputGewicht * rechneReduktionMann);
      console.log("Dein Promillewert " + ergebnis);


    } else {
      alert("Bitte geben Sie ihr Geschlecht, Körpergröße, Gewicht, Alter ein und füllen Sie die Eingabefelder");
    }

    return ergebnisText.value = ergebnis;
  });






  // function addDrink(name, menge, alkgehalt, beschreibung) {
  //   var _name = name;
  //   var _menge = menge;
  //   var _alkgehalt = alkgehalt;
  //   var _beschreibung = beschreibung;
  //
  //
  //   let newElement = document.createElement('div');
  //   newElement.textContent('hello');
  //   /*new Element.textContent = '<img src="bilder/WhiskyBild.png">
  //                               <h3>Whisky</h3>
  //                               <p><h4>Menge: </h4></p>
  //                               <p><h5>Alkoholgehalt: </h5></p>
  //                               <p id="beschreibung">Whisky ist eine durch Destillation aus Getreidemaische gewonnene und im Holzfass gereifte Spirituose. (Quelle: wikipedia)</p>';*/
  //   let DrinkBox = document.getElementById('DrinkBox');
  //   DrinkBox.appendChild(newElement)

  //var text = _beschreibung;

  //document.getElementById("demo").innerHTML = text3;
  //document.main.appendChild(newElement);
  // }

});
