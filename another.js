const { PythonShell } = require("python-shell");
var path = require("path");
let timmy = "tim";
//https://flaviocopes.com/react-electron/

let options = {
  mode: "text",
  pythonPath:
    "C:\\Users\\rolapi\\AppData\\Local\\Continuum\\anaconda3\\python.exe",
  pythonOptions: ["-u"], // get print results in real-time
  scriptPath: "./"
};
//var pyshell = new PythonShell("python-test.py");

function sayTimsValue() {
  var pyshell = PythonShell.run("python-test.py", options, function(err) {
    if (err) throw err;
    console.log("finished");
  });
  pyshell.on("message", function(message) {
    // received a message sent from the Python script (a simple "print" statement)
    alert(message);
    timmy = message;
  });
}

function readFile() {
  let fs = require("fs");

  try {
    var data = fs.readFileSync("python-test.py", "utf8");
    alert(data.toString());
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

function savingFile() {}

function getRemoteFile() {
  const https = require("https");
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = body;
      alert(body);
    });
  });
}

function getAllFilesInFolder() {
  let fs = require("fs");

  fs.readdir("C:\\spikes\\electron-quick-start\\plugins", function(err, items) {
    console.log(err);

    for (var i = 0; i < items.length; i++) {
      alert(items[i]);
    }
  });
}

function createTextFile() {
  var fs = require("fs");

  var data = "New File Contents";

  fs.writeFile("temp.txt", data, err => {
    if (err) console.log(err);
    alert("Done");
  });
}
