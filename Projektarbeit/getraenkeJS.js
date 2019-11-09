function addDrink(name, menge, alkgehalt, beschreibung) {
  var _name = name;
  var _menge = menge;
  var _alkgehalt = alkgehalt;
  var _beschreibung = beschreibung;


  let newElement = document.createElement('div');
  newElement.textContent('hello');
  /*new Element.textContent = '<img src="bilder/WhiskyBild.png">
                              <h3>Whisky</h3>
                              <p><h4>Menge: </h4></p>
                              <p><h5>Alkoholgehalt: </h5></p>
                              <p id="beschreibung">Whisky ist eine durch Destillation aus Getreidemaische gewonnene und im Holzfass gereifte Spirituose. (Quelle: wikipedia)</p>';*/
  let DrinkBox = document.getElementById('DrinkBox');
  DrinkBox.appendChild(newElement)

  //var text = _beschreibung;

  //document.getElementById("demo").innerHTML = text3;
  //document.main.appendChild(newElement);
}
