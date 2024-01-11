// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. (R)
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()" || "({}[])"
// Output: true


// Example 1:
// Input: s = "(}" || "([})"
// Output: false

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; s.length > i; i++) {
    switch (s[i]) {
      case "[": {
        stack.push("]");
        break;
      }
      case "{": {
        stack.push("}");
        break;
      }
      case "(": {
        stack.push(")");
        break;
      }
      case "]":
      case "}":
      case ")": {
        if (s[i] === stack[stack.length - 1]) {
          stack.pop();
          break;
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
}

console.log(isValid("[{}]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
