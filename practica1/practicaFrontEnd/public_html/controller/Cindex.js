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
        addConsole("----------------------------------------------------------------------------------------------------------------------------------");
        addConsole("missing arguments to this command.");
        addConsole("if you want to know more, enter the help command.");
        clearInput();
      }
    } else if (text[0] == "list" || text[0] == "List") {
      if (text.length == 2) {
        list(text[1]);
      } else {
        addConsole("----------------------------------------------------------------------------------------------------------------------------------");
        addConsole("missing arguments to this command.");
        addConsole("if you want to know more, enter the help command.");
        clearInput();
      }
    } else if (text[0] == "clear") {
      clear();
      clearInput();
    }else if(text[0] == "help"){
      addConsole("----------------------------------------------------------------------------------------------------------------------------------");
      addConsole("command: register [transmitter] [receiver] [message] Record a message.");
      addConsole("command: list [transmitter] List all messages sent by the transmitter.");
      clearInput();
    }
     else {
      addConsole("----------------------------------------------------------------------------------------------------------------------------------");
      addConsole(text[0] + " is not a valid command");
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
      addConsole(this.responseText);
      clearInput();
    }
  };
  xhttp.open("GET", "../../../practicaBackEnd/controller/Cindex.php?dir=" + dir, true);
  xhttp.send();
}

function clearInput() {
  textConsole.value = "";
}

function addConsole(string) {
  var response = document.createElement("p");
  response.innerHTML = string;
  consoleLog.appendChild(response);
}