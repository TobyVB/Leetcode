/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* The easiest solution to this problem is to use hashmap. 
Passing the loop on any string, we put characters in hasmap as replaceable. 
If there is a mismatch between the key and value in the dictionary and 
the same key and value in the string, we return false. Also return false 
if there is more than one key for the same value.
 */
var isIsomorphic = function (s, t) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]] && !Object.values(dict).includes(t[i])) {
      dict[s[i]] = t[i];
    } else if (dict[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};
