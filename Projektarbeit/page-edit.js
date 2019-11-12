class PageEdit {
    /**
     * Konstruktor.
     *
     * @param {App} app Instanz der App-Klasse
     * @param {String} pageName Name der aufgerufenen Seite
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes
     */
    constructor(app, pageName, editIndex) {
        // Parameter merken
        this._app = app;
        this._editIndex = editIndex;

        // Hauptelement mit dem Inhalt der Seite ermitteln
        this._mainElement = document.getElementById("main-page-edit");

        // Bearbeiteten Datensetz einlesen
        this._dataset = {
            name: "",
            menge: "",
            alkohol: "",
            beschreibung: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.name = dataset.name;
            this._dataset.menge = dataset.menge;
            this._dataset.alkohol = dataset.alkohol;
            this._dataset.beschreibung = dataset.beschreibung;
        }
    }

    /**
     * Seite anzeigen. Wird von der App-Klasse aufgerufen.
     */
    show() {
        this._renderForm();
        this._mainElement.classList.remove("hidden");
    }

    /**
     * Seite nicht mehr anzeigen. Wird von der App-Klasse aufgerufen.
     */
    hide() {
        this._mainElement.classList.add("hidden");
    }

    /**
     * Formularfelder in die Seite einfügen. (Interne Methode)
     */
    _renderForm() {
        // Alten Inhalt verwerfen
        this._mainElement.innerHTML = "";

        // Formularfelder einfügen
        let template = document.getElementById("template-page-edit").innerHTML;
        this._mainElement.innerHTML = template;
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$Name$", this._dataset.name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$Menge$", this._dataset.menge);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$Alkohol$", this._dataset.alkohol);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$Beschreibung$", this._dataset.beschreibung);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }

    /**
     * Speichert den aktuell bearbeiteten Datensatz und kehr dann wieder
     * in die Listenübersicht zurück.
     */
    _saveAndExit() {
        // Eingegebene Werte überprüfen
        let firstName = document.querySelector("#main-page-edit .name").value.trim();
        let lastName = document.querySelector("#main-page-edit .menge").value.trim();
        let phone = document.querySelector("#main-page-edit .alkohol").value.trim();
        let email = document.querySelector("#main-page-edit .beschreibung").value.trim();

        if (firstName === "") {
            alert("Geben Sie den Namen des Getränks ein.");
            return;
        }

        if (lastName === "") {
            alert("Geben Sie die Menge des Getränks ein.");
            return;
        }

        // Datensatz speichern
        this._dataset.name = firstName;
        this._dataset.menge = lastName;
        this._dataset.alkohol = phone;
        this._dataset.beschreibung = email;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }

        // Zurück zur Übersicht
        this._app.showPage("page-list");
    }
}
