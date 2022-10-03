/**
* @param {string}
* @param {string}
* @return {boolean}
*/

// var isIsomorphic = function(s, t) {
//
//   //implement checks
//   if (s.length !== t.length) {
//     return false
//   }
//
// //create your objects
//   let sMap = {};
//   let tMap = {};
//
//   for (let idx = 0; idx < s.length; idx++) {
//     let sCharacter = s[idx];
//     let tCharacter = t[idx];
//
//     if (sMap[sCharacter] == undefined) {
//       sMap[sCharacter] = tCharacter;
//     }
//
//     if (tMap[tCharacter] == undefined) {
//       tMap[tCharacter] = sCharacter;
//
//     if (sMap[sCharacter] != tCharacter || tMap[tCharacter] != sCharacter){
//       return false;
//     }
//   }
//
//   return true;
//   }
// };

console.log(isIsomorphic("egg", "add"));

/**  iteration 1
 * 
e = sCharacter
a = tCharacter

sMap {
   e : a
 }


tMap {
   a : e
}

*/ 






var isIsomorphic = function(s, t) {
  //implement checks
  if (s.length !== t.length) {
    return false
  }

  let sArray = new Array(128).fill(0);
  let tArray = new Array(128).fill(0);

  for(let index =0; index <s.length; index++){
    let sAscii = s.charCodeAt(index); //look at the string and get the ascii code of the lettr
    let tAscii = t.charCodeAt(index);

    if (sArray[sAscii] !== tArray[tAscii]) {
      return false;
    }

    //denote that this is the position of the letter in the word (if count starting from 1)
    sArray[sAscii]  = index + 1
    tArray[tAscii] = index + 1
  }

  return true;
};

