function findMatching(collection, targetName) {

  function compareStrings(string1, string2) {
    return string1.toUpperCase() === string2.toUpperCase();
  }

  collection.filter(item => checkName(item, targetName))
  
}

function fuzzyMatch() {

}

function matchName() {

}
