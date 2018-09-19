var textConsole = document.getElementById("text_console");
var consoleLog = document.getElementById("console");
textConsole.addEventListener("keyup", comparator);

function send(dir1, dir2, message) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = document.createElement("p");
      response.innerHTML = this.responseText;
      consoleLog.appendChild(response);
      clearInput();
    }
  };
  xhttp.open("GET", "../../../practicaBackEnd/controller/Cindex.php?dir1=" + dir1 + "&dir2=" + dir2 + "&message=" + message, true);
  xhttp.send();
}

function comparator(event) {
  if (event.keyCode == 13) {
    text = document.getElementById("text_console").value;
    text = text.split(" ");
    if (text[0] == "Register" || text[0] == "register") {
      if (text.length == 4) {
        send(text[1], text[2], text[3]);
      } else {
        var response = document.createElement("p");
        response.innerHTML = "le faltan argumentos a este comando.";
        consoleLog.appendChild(response);
      }
    } else if (text[0] == "list" || text[0] == "List") {
      if (text.length == 2) {
        list(text[1]);
      } else {
        var response1 = document.createElement("p");
        response1.innerHTML = "le faltan argumentos a este comando.";
        consoleLog.appendChild(response1);
      }
    } else if (text[0] == "clear") {
      clear();
    } else {
      var response2 = document.createElement("p");
      response2.innerHTML = text[0] + " no es un arguemto valido";
      consoleLog.appendChild(response2);
    }
  }
}

function clear() {
  document.getElementById("console").innerHTML = "";
}

function list(dir) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = document.createElement("p");
      response.innerHTML = this.responseText;
      consoleLog.appendChild(response);
      clearInput();
    }
  };
  xhttp.open("GET", "../../../practicaBackEnd/controller/Cindex.php?dir=" + dir, true);
  xhttp.send();
}
function clearInput() {
  textConsole.value = "";
}