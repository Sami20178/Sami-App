// SamiScript Editor Generator
// Version 0.1

function insertSamiScriptBody(input) {
    if (input === "!") {
        return `<Edition="SamiScript">

<head>

<head-inner>
<ss-style>
theme: "SamiBlue";
version: "0.1";
</ss-style>
</head-inner>

</head>

<body>

print("Hallo SamiScript!");

</body>

<ss-java>

</ss-java>

</Edition>`;
    }

    return input;
}

module.exports = { insertSamiScriptBody };
