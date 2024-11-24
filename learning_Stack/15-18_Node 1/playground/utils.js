function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}

function sub(a, b) {
  console.log(`Subtracting ${a} and ${b}`);
  return a - b;
}

module.exports = {
  add,
  sub,
};
