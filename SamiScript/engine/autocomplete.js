// SamiScript Autocomplete Engine
// Version 0.1

const suggestions = {
    "!": "<Edition=\"SamiScript\">",
    "<": "<Edition=\"SamiScript\">",
    "print": "print(\"Hallo SamiScript!\");",
    "let": "let name = \"Sami\";",
    "function": "function name() {\n\n}"
};

function getSamiScriptSuggestion(input) {
    return suggestions[input] || null;
}

module.exports = { getSamiScriptSuggestion };
