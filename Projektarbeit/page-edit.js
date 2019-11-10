"use strict";

/**
 * Klasse PageEdit: Stellt die Seite mit dem Eingabeformular zur Verfügung.
 *
 * Diese Klasse wird von der App-Klasse zu bestimmten Zeitpunkten instantiiert
 * und aufgerufen, um die Liste mit den Adressen darzustellen.
 */
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
            alkoholgehalt: "",
            beschreibung: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.name = dataset.name;
            this._dataset.menge = dataset.menge;
            this._dataset.alkoholgehalt = dataset.alkoholgehalt;
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
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$GETRAENK_NAME$", this._dataset.name);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("MENGE", this._dataset.menge);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("ALKOHOLGEHALT", this._dataset.alkoholgehalt);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("BESCHREIBUNG", this._dataset.beschreibung);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }

    /**
     * Speichert den aktuell bearbeiteten Datensatz und kehr dann wieder
     * in die Listenübersicht zurück.
     */
    _saveAndExit() {
        // Eingegebene Werte überprüfen
        let name = document.querySelector("#main-page-edit .name").value.trim();
        let menge = document.querySelector("#main-page-edit .menge").value.trim();
        let alkoholgehalt = document.querySelector("#main-page-edit .alkoholgehalt").value.trim();
        let beschreibung = document.querySelector("#main-page-edit .beschreibung").value.trim();

        if (name === "") {
            alert("Geben Sie erst einen Namen für das Getränk ein.");
            return;
        }

        if (menge === "") {
            alert("Geben Sie erst eine Menge ein.");
            return;
        }

        if (alkoholgehalt === "") {
            alert("Geben Sie erst einen Alkoholgehalt ein.");
            return;
        }

        // Datensatz speichern
        this._dataset.name = name;
        this._dataset.menge = menge;
        this._dataset.alkoholgehalt = alkoholgehalt;
        this._dataset.beschreibung = beschreibung;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }

        // Zurück zur Übersicht
        this._app.showPage("page-list");
    }
}
