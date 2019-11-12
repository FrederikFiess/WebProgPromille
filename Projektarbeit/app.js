class App {
    /**
     * Konstruktor.
     * @param {Liste} pages Seiten, zwischen denen umgeschaltet werden kann
     */
    constructor(pages) {
        // Verfügbare Seiten und Steuerobjekt der aktuellen Seite
        this._pages = pages;
        this._currentPageObject = null;

        // Datensätze unserer Anwendung. Falls Sie die Anwendung erweitern
        // wollen, so dass die Datensätze nicht verloren gehen können, müssten
        // Sie hier die Datensätze komplett einlesen und wiederherstellen.
        this._data = [
            {
                first_name: "Willy",
                last_name: "Tanner",
                phone: "+49 711 564412",
                email: "willy.tanner@alf.com",
            },

            // TODO: Füge hier ein paar weitere Adressen hinzu, damit du genügend Testdaten hast
        ];

        // Interne Methode zum Rendern des Menüs aufrufen
        this._renderMenu();
    }

    ////
    //// Umschalten der aktuell sichtbaren Seite
    ////

    /**
     * Tablaschen zum Umschalten der aktuellen Seite anzeigen. (Interne Methode)
     */
    _renderMenu() {
        let ul = document.querySelector("#app-menu > ul");
        let template = document.getElementById("template-app-menu-li").innerHTML;

        this._pages.forEach(page => {
            // Versteckte Seiten überspringen
            if (page.hidden) return;

            // Neues Element auf Basis des Templates erzeugen
            let dummy = document.createElement("ul");
            dummy.innerHTML = template;
            dummy.innerHTML = dummy.innerHTML.replace("$NAME$", page.name);
            dummy.innerHTML = dummy.innerHTML.replace("$LABEL$", page.label);

            // Event Listener auf das <li>-Element registrieren
            let li = dummy.firstElementChild;
            li.addEventListener("click", () => this.showPage(page.name));

            // Element nun in das Menü umhängen
            dummy.removeChild(li);
            ul.appendChild(li);
        });
    }

    /**
     * Umschalten der sichtbaren Seite.
     *
     * @param  {String} name Name der anzuzeigenden Seite, gemäß this.pages
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes (optional)
     */
    showPage(name, editIndex) {
        // Gewünschte Seite suchen
        let newPage = this._pages.find(p => p.name === name);

        if (newPage === undefined) {
            console.error(`Klasse App, Methode showPage(): Ungültige Seite „${name}”`);
            return;
        }

        // Aktuelle Seite ausblenden
        if (this._currentPageObject != null) {
            // TODO: Methode zum Ausblenden der aktuellen Seite aufrufen
        }

        // Neue Seite anzeigen und merken
        this._currentPageObject = new newPage.klass(this, name, editIndex);
        // TODO: Methode zum Anzeigen der aktuellen Seite aufrufen

        // Aktuelle Seite im Kopfbereich hervorheben
        document.querySelectorAll("#app-menu li").forEach(li => li.classList.remove("active"));
        document.querySelectorAll(`#app-menu li[data-page-name="${name}"]`).forEach(li => li.classList.add("active"));
    }

    ////
    //// Methoden zum Bearbeiten der Datensätze
    ////
    //// Falls Sie die Anwendung so erweitern wollen, dass die Datensätze
    //// nicht verloren gehen können, müssen Sie die Änderungen in den
    //// nachfolgenden Methoden irgendwie dauerhaft speichern.
    ////

    /**
     * Gibt die komplette Liste mit allen Daten zurück.
     * @return {Array} Array mit allen Datenobjekten
     */
    getData() {
        return this._data;
    }

    /**
     * Gibt den Datensatz mit dem übergebenen Index zurück. Kann der Datensatz
     * nicht gefunden werden, wird undefined zurückgegeben.
     *
     * @param  {Integer} index Index des gewünschten Datensatzes
     * @return {Object} Gewünschter Datensatz oder undefined
     */
    getDataByIndex(index) {
        return this._data[index];
    }

    /**
     * Aktualisiert den Datensatz mit dem übergebenen Index und überschreibt
     * ihn mit dem ebenfalls übergebenen Objekt. Der Datensatz muss hierfür
     * bereits vorhanden sein.
     *
     * @param {Integer} index Index des zu aktualisierenden Datensatzes
     * @param {Object} dataset Neue Daten des Datensatzes
     */
    updateDataByIndex(index, dataset) {
        this._data[index] = dataset;
    }

    /**
     * Löscht den Datensatz mit dem übergebenen Index. Alle anderen Datensätze
     * rücken dadurch eins vor.
     *
     * @param {[type]} index Index des zu löschenden Datensatzes
     */
    deleteDataByIndex(index) {
        this._data.splice(index, 1);
    }

    /**
     * Fügt einen neuen Datensatz am Ende der Liste hinzu.
     *
     * @param  {Object} dataset Neu anzuhängender Datensatz
     * @return {Integer} Index des neuen Datensatzes
     */
    appendData(dataset) {
        this._data.push(dataset);
        return this._data.length - 1;
    }
}



// window.addEventListener("load", () => {
//
//
//
//   let rangeHoehe = document.getElementById("hoehe");
//   let output = document.getElementById("laufe");
//   let rangeGewicht = document.getElementById("gewicht");
//   let output1 = document.getElementById("laufe1");
//
// let bierText = document.getElementById("bier");
//   let weinText = document.getElementById("wein");
//   let likörText = document.getElementById("likör");
//   let schnapsText = document.getElementById("schnaps");
//   let wodkaText = document.getElementById("wodka");
//   let whiskyText = document.getElementById("whisky");
//
//   let kleinesBier = document.getElementById("bKlein");
//   let großesBier = document.getElementById("bGroß");
//   let piccoloWein = document.getElementById("wPicc");
//   let kleinesWein = document.getElementById("wKlein");
//   let großesWein = document.getElementById("wGroß");
//   let flascheWein = document.getElementById("wFla");
//   let kleinesLikör = document.getElementById("lKlein");
//   let großesLikör = document.getElementById("lGroß");
//   let flascheLikör = document.getElementById("lFla");
//   let kleinesSchnaps = document.getElementById("sKlein");
//   let großesSchnaps = document.getElementById("sGroß");
//   let flascheSchnaps = document.getElementById("sFla");
//   let kleinesWodka = document.getElementById("woKlein");
//   let großesWokda = document.getElementById("woGroß");
//   let flascheWodka = document.getElementById("woFla");
//   let kleinesWhisky = document.getElementById("whKlein");
//   let großesWhisky = document.getElementById("whGroß");
//   let flascheWhisky = document.getElementById("whFla");
//
//
//   let ergebnis = document.getElementById("ergebnisBtn");
//
//   output.innerHTML = rangeHoehe.value;
//   output1.innerHTML = rangeGewicht.value;
//
//
//
//   rangeHoehe.oninput = function() {
//     output.innerHTML = this.value;
//   }
//
//   rangeGewicht.oninput = function() {
//     output1.innerHTML = this.value;
//   }
//
//
//   kleinesBier.addEventListener("click", function() {
//   bierText.value = kleinesBier.value;
//   });
//
//   großesBier.addEventListener("click", function() {
//   bierText.value = großesBier.value;
//   });
//
//   piccoloWein.addEventListener("click", function() {
//   weinText.value = piccoloWein.value;
//   });
//
//   kleinesWein.addEventListener("click", function() {
//   weinText.value = kleinesWein.value;
//   });
//
//   großesWein.addEventListener("click", function() {
//   weinText.value = großesWein.value;
//   });
//
//   flascheWein.addEventListener("click", function() {
//   weinText.value = flascheWein.value;
//   });
//
//   kleinesLikör.addEventListener("click", function() {
//   likörText.value = kleinesLikör.value;
//   });
//
//   großesLikör.addEventListener("click", function() {
//   likörText.value = großesLikör.value;
//   });
//
//   flascheLikör.addEventListener("click", function() {
//   likörText.value = flascheLikör.value;
//   });
//
//   kleinesSchnaps.addEventListener("click", function() {
//   schnapsText.value = kleinesSchnaps.value;
//   });
//
//   großesSchnaps.addEventListener("click", function() {
//   schnapsText.value = großesSchnaps.value;
//   });
//
//   flascheSchnaps.addEventListener("click", function() {
//   schnapsText.value = flascheSchnaps.value;
//   });
//
//   kleinesWhisky.addEventListener("click", function() {
//   whiskyText.value = kleinesWhisky.value;
//   });
//
//   großesWhisky.addEventListener("click", function() {
//   whiskyText.value = großesWhisky.value;
//   });
//
//   flascheWhisky.addEventListener("click", function() {
//   whiskyText.value = flascheWhisky.value;
//   });
//
//   kleinesWodka.addEventListener("click", function() {
//   wodkaText.value = kleinesWodka.value;
//   });
//
//   großesWokda.addEventListener("click", function() {
//   wodkaText.value = großesWokda.value;
//   });
//
//   flascheWodka.addEventListener("click", function() {
//   wodkaText.value = flascheWodka.value;
//   });
// });
