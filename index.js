function findMatching(collection, targetName) {

  // function compareStrings(string1, string2) {
  //   return string1.toUpperCase() === string2.toUpperCase();
  // }
  //
  // const result = collection.filter(item => compareStrings(item, targetName));

  return collection.filter(item => item.toUpperCase() === targetName.toUpperCase());

}

function fuzzyMatch(collection, text) {
  const textLength = text.length;

  return collection.filter(item => text === item.slice(0,text.length));
}

function matchName() {

}
