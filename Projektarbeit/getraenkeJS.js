window.addEventListener("load", () => {
    let newButton = document.getElementById("weiteresGetränk")
      let memoList = document.querySelector("main .box");


      let insertMemo = text => {
          let liElement = document.createElement("main");
          memoList.appendChild(liElement);

          let memoTextElement = document.createElement("main. box");
          memoTextElement.textContent = text;
          liElement.appendChild(memoTextElement);
        }

        newButton.addEventListener("click", () => {
            // Memotext vom Anwender abfragen
            let text = prompt("Geben Sie die Bezeichnug des Getränkes ein");
            if (text === null) return;

            // Neues Element in die HTML-Liste einfügen
            insertMemo(text);
        });
