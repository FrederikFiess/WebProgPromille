window.addEventListener("load", () => {
    let getraenkHinzufuegen = document.getElementById("weiteresGetränk")
      let getraenkeListe = document.querySelector("main .container");


      let insertGetraenk = text => {
          let getraenkElement = document.createElement("div class = box");
          getraenkeListe.appendChild(getraenkElement);

          let getraenkUeberschrift = document.createElement("h3");
          getraenkUeberschrift.textContent = text;
          getraenkElement.appendChild(getraenkUeberschrift);
        }

        getraenkHinzufuegen.addEventListener("click", () => {
            let text = prompt("Geben Sie die Bezeichnug des Getränkes ein");
            if (text === null) return;

            insertGetraenk(text);
        });
      });
