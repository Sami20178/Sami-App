// SamiScript Lexer v0.1

function tokenize(code) {
  return code
    .split(/\s+/)
    .filter(Boolean)
    .map(value => ({ type: 'TOKEN', value }));
}

module.exports = { tokenize };
