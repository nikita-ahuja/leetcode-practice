/**
* @param {string}
* @param {string}
* @return {boolean}
*/

var isIsomorphic = function(s, t) {

  //implement checks
  if (s.length) {
    return false
  }

//create your objects
  let sMap = {};
  let tMap = {};

  for (let idx = 0; idx < s.length; idx++) {
    let sCharacter = s[idx];
    let tCharacter = t[idx];

    if (sMap[sCharacter] == undefined) {
      sMap[sCharacter] = tCharacter;
    }

    if (tMap[tCharacter] == undefined) {
      tMap[tCharacter] = sCharacter;

    if (sMap[sCharacter] !== tCharacter || tMap[tCharacter] !== sCharacter) {
      return false;
    }
  }

  return true;
  }
};

isIsomorphic("egg", "add");
