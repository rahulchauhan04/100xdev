/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const normalize = (str) => str.toLowerCase();
  const cleanSortedStr = (str) => str.replace(/[^a-z]/g,'').split('').sort().join('');

  const sortedStr1 = normalize(str1);
  const sortedStr2 = normalize(str2);

  if (sortedStr1.length !== sortedStr2.length) 
  {
    return false;  
  }

  return cleanSortedStr(sortedStr1) === cleanSortedStr(sortedStr2);
  
}

module.exports = isAnagram;
