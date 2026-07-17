// SamiScript Runner
// Executes .ss files
// Version 0.1

const fs = require("fs");

function runSamiScriptFile(filePath) {
    if (!filePath.endsWith(".ss")) {
        return "Fehler: Nur .ss Dateien können ausgeführt werden.";
    }

    const code = fs.readFileSync(filePath, "utf8");

    console.log("SamiScript startet:");
    console.log(code);

    return code;
}

module.exports = { runSamiScriptFile };
