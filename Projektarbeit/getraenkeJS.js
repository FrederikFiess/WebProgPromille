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
    let alkoholMengeGesamt = 0;
    let _promillewert = 0;
    let rechneReduktionFrau;
    let rechneReduktionMann;
    let aufgenommeneMenge;
    let ergebnis;

    if (document.getElementById('frau_id').checked) {
      console.log("geklickt");

      rechneReduktionFrau = Number((1.055 * (-2.097 + 0.1069 * Number(hoehe.value) + 0.2466 * Number(gewicht.value)) / (0.8 * Number(gewicht.value))));
      console.log("RechneReduktionFrau lautet: " + rechneReduktionFrau);

      let i;
      for(i=0; i < aufgenommeneMengeArray.length; i++){
        alkoholMengeGesamt = Number(alkoholMengeGesamt) + Number(aufgenommeneMengeArray[i]);
        console.log(alkoholMengeGesamt);
      }
      console.log("Die alkoholMengeGesamt: " + alkoholMengeGesamt);

      _promillewert = alkoholMengeGesamt / (Number(gewicht.value) * rechneReduktionFrau) * 1000;
      let gerundet = Math.round(_promillewert * 100) / 100;
      console.log("Der Promillewert beträgt: " + gerundet);

      document.querySelector('.results').innerHTML = "Ihr Promillewert beträgt : " + gerundet + " ‰";


      window.onload = function(){
      var übertrag =gerundet;

      document.getElementById('output').innerHTML = übertrag;
  };

      //aufgenommeneMenge = Number(bierMenge.value) * Number(bierAlkohol.value)  + Number(weinMenge.value) * Number(weinAlkohol.value) + Number(likörMenge.value) * Number(likörAlkohol.value) + Number(schnapsMenge.value) * Number(schnapsAlkohol.value) + Number(wodkaMenge.value) * Number(wodkaAlkohol.value) + Number(whiskyMenge.value) * Number(whiskyAlkohol.value);

    //  aufgenommeneMenge2 = Number(aufgenommene)
    //  console.log(aufgenommeneMenge2);

    /*  ergebnis = Number(aufgenommeneMenge) / Number(Number(gewicht.value) * rechneReduktionFrau);
      ergebnis2 = Number(ergebnis);
      console.log("Dein Promillewert " + ergebnis2); */


    } else if (document.getElementById('mann_id').checked) {
      rechneReduktionMann = (1.055 * (2.447 - 0.09516 * Number(alter.value) + 0.1074 * Number(hoehe.value) + 0.3362 * Number(gewicht.value)) / (0.8 * Number(gewicht.value)));
      console.log("RechneReduktionMann lautet: " + rechneReduktionMann);

      let i;
      for(i=0; i < aufgenommeneMengeArray.length; i++){
        alkoholMengeGesamt = Number(alkoholMengeGesamt) + Number(aufgenommeneMengeArray[i]);
        console.log(alkoholMengeGesamt);

      }

      console.log("Die alkoholMengeGesamt: " + alkoholMengeGesamt);
      _promillewert = alkoholMengeGesamt / (Number(gewicht.value) * rechneReduktionMann) * 1000;
      let gerundet = Math.round(_promillewert * 100) / 100;
      console.log("Dein Promillewert " + gerundet);
      document.querySelector('.results').innerHTML = "Ihr Promillewert beträgt : " + gerundet +" ‰";


    } else {
      alert("Bitte geben Sie ihr Geschlecht, Körpergröße, Gewicht und Alter ein.");
    }

    return ergebnisText.value = ergebnis;
  });




    function addDrink() {

      //den Wert der Eingaben in Variablen speichern
      var _name = document.getElementById('nameEingeben').value;
      var _menge = document.getElementById('mengeEingeben').value;
      var _alkgehalt = document.getElementById('alkoholGehaltEingeben').value;
      var _beschreibung = document.getElementById('beschreibungEingeben').value;

      let newElement1 = document.createElement('div');
      let newElement2 = document.createElement('img');
      let newElement3 = document.createElement('h3');
      let newElement4 = document.createElement('p');
      let newElement5 = document.createElement('h4');
      let newElement10 = document.createElement('h4');
      let newElement9 = document.createElement('input');
      let newElement6 = document.createElement('p');
      let newElement7 = document.createElement('h5');
      let newElement8 = document.createElement('p');

      //die src von img setze
      newElement2.setAttribute('src', 'alkoholHinzufuegen.jpg');

      //die einzelnen Elemente aneinander anhängen und verschachteln
      newElement1.appendChild(newElement2);
      newElement1.appendChild(newElement3);
      newElement1.appendChild(newElement4);
      newElement4.appendChild(newElement5);
      newElement5.appendChild(newElement10);
      newElement5.appendChild(newElement9);
      newElement1.appendChild(newElement6);
      newElement6.appendChild(newElement7);
      newElement1.appendChild(newElement8);

      //den Elementen die benötigten id, bzw. class zuweisen
      newElement1.className = "box";
      newElement8.idName = "beschreibung";
      newElement2.setAttribute('id', 'universalBild');
      newElement9.setAttribute('id', 'NeuesGetraenk_'+_name);
      newElement9.setAttribute('type', 'number');
      newElement9.setAttribute('value', _menge);
      newElement9.setAttribute('readonly', 'readonly');


      //bestimmte Elemente mit Text füllen
      newElement3.textContent = _name;
      newElement10.textContent = 'Menge: '
      newElement7.textContent = 'Alkoholgehalt: ' + _alkgehalt;
      newElement8.textContent = _beschreibung;


      //Elemente finden, wo die ganzen Sachen angehängt werden und als Kind anhängen
      let DrinkBox = document.getElementById('DrinkBox');
      DrinkBox.appendChild(newElement1)

      help = 'NeuesGetraenk_'+_name;
      menge_GetraenkeListe.push(document.getElementById(help));

      help2 = Number(_alkgehalt);
      alkohol_GetraenkeListe.push(help2);

    }


    function aufsummieren(id, wert) {
      var _ergebnis = Number(id.value) + Number(wert);
      id.value = _ergebnis;
      //alert(_ergebnis);
    }

    var menge_GetraenkeListe = [document.getElementById('bier_menge_id'), document.getElementById('wein_menge_id'), document.getElementById('likör_menge_id'), document.getElementById('schnaps_menge_id'), document.getElementById('wodka_menge_id'), document.getElementById('whisky_menge_id')];
    var alkohol_GetraenkeListe = [5.5, 12.5, 30, 40, 45, 43];
    var aufgenommeneMengeArray = [0];

    function ausgeben(){

      let i;
      for(i=0; i < menge_GetraenkeListe.length; i++){
        alert((GetraenkeListe[i]).value);
      }
      berechneAufgenommeneMenge();
    }

    function berechneAufgenommeneMenge(){
      // let i;
      //aufgenommeneMenge = Number(0);

      for(let i=0; i < menge_GetraenkeListe.length; i++){
        hilfe1 = Number(menge_GetraenkeListe[i].value);
        temp = Number(alkohol_GetraenkeListe[i]) / 100;
        temp2 = temp * hilfe1;
        temp3 = temp2 * 0.8;
        //aufgenommeneMengeArray.push(temp);
        aufgenommeneMengeArray[i] = temp3;
        console.log(temp3);
        console.log(i);
        //alert("Aufgenommene Menge: " + aufgenommeneMengeArray[i]);
        //aufgenommeneMenge += Number((GetraenkeListe[i]).value);
        }
        console.table(menge_GetraenkeListe);
        //console.log("Array an der Stelle 8: " + aufgenommeneMengeArray[8]);
        //alert("Aufgenommene Menge: " + aufgenommeneMenge);
    }








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
