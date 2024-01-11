// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let prefix = "";
  if (first.length > 0 && first[0] === last[0]) {
    for (let i = 0; first.length > i; i++) {
      if (first[i] === last[i]) {
        prefix += first[i];
      } else break;
    }
  } else return "";
  return prefix;
}

//Test Cases
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
