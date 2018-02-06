const testLett = ['a', 'b', 'c'];
const testNum = [1, 2, 3];

function zipList(letter, num) {
  const com = [];
  for (let i = 0; i < letter.length; i++) {
    com.push(letter[i], num[i]);
  }
  return com;
}

console.log(zipList(testLett, testNum));

function zipTheSimpleWay(letter, num) {
  return _.flatten(_.zip(letter, num));
}

console.log(zipTheSimpleWay(testLett, testNum));
