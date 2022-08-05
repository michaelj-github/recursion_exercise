/** product: calculate the product of an array of numbers. */

// const e = require("express");

function product(nums) {
  if (nums.length < 1) throw new Error('Cannot find the product of an empty array');
  let theProduct = nums[0];
  nums.splice(0, 1);
  while (nums.length > 0) theProduct = theProduct * product(nums);

  return theProduct;

  
}
// console.log("product()");
// console.log(product([])); // throws error
// console.log(product([0]) === 0);
// console.log(product([1]) === 1);
// console.log(product([1,2]) === 2);
// console.log(product([1,2,3]) === 6);
// console.log(product([1,2,3,4]) === 24);
// console.log(product([1,2,3,4,5]) === 120);
// console.log(product([2,3,4]) === 24);

/** longest: return the length of the longest word in an array of words. */

function longest(words, theIndex = 0, theLength = 0) {
  // console.log("words = ", words)
  if (words.length < 1) throw new Error('Cannot find the longest word in an empty array');
  if (theIndex === words.length) return theLength;
  theLength = Math.max(words[theIndex].length, theLength);
  return longest(words, theIndex + 1, theLength)
}
// console.log("longest()");
// longest([]) // throws error
// console.log(longest(['a', 'be', 'sea', 'four', 'fiver', 'tree', 'two', 'ay', 'u']) === 5)
// console.log(longest(['a', 'be', 'sea', 'four', 'tree', 'two', 'ay', 'u']) === 4)
// console.log(longest(['a', 'be', 'sea', 'two', 'ay', 'u']) === 3)
// console.log(longest(['a', 'be', 'ay', 'u']) === 2)
// console.log(longest(['a']) === 1)
// console.log(longest(['']) === 0)
// console.log(longest(["hello", "hi", "hola"]) === 5)


/** everyOther: return a string with every other letter. */

function everyOther(str, theIndex = 0, theString = "") {
  if (str.length < 1) throw new Error('Cannot return every other letter from an empty string');
  if (theIndex >= str.length) return theString;
  theString += str[theIndex];
  return everyOther(str, theIndex + 2, theString)
}
// console.log("everyOther");
// everyOther(''); // throws error
// console.log(everyOther("thequickbrownfoxjumpedoverthelazydog") === "teucbonojmeoeteayo")
// console.log(everyOther("thelazydog") === "teayo")
// console.log(everyOther("thelazydo") === "teayo")
// console.log(everyOther("thelazyd") === "teay")
// console.log(everyOther("the") === "te")
// console.log(everyOther("th") === "t")
// console.log(everyOther("t") === "t")
// console.log(everyOther("hello") === "hlo")



/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, theIndex = 0) {
  if (str.length < 1) throw new Error('Cannot check for palindrome with an empty string');
  let leftSide = theIndex;
  let rightSide = (str.length - 1) - theIndex;
  if (str[leftSide] !== str[rightSide]) return false;
  if (leftSide >= rightSide) return true;
  return isPalindrome(str, theIndex + 1)
}

// console.log("isPalindrome")
//isPalindrome("") // throws error
// console.log(isPalindrome("abcdcba") === true)
// console.log(isPalindrome("abcddcba") === true)
// console.log(isPalindrome("bcdcb") === true)
// console.log(isPalindrome("cdc") === true)
// console.log(isPalindrome("cc") === true)
// console.log(isPalindrome("ccc") === true)
// console.log(isPalindrome("d") === true)
// console.log(isPalindrome("abcdefg") === false)
// console.log(isPalindrome("tacocat") === true)
// console.log(isPalindrome("tacodog") === false)



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, theIndex = 0) {
  if (arr.length < 1) throw new Error('Cannot find value in empty array');
  if (arr[theIndex] === val) return theIndex; // found it
  if (theIndex === arr.length) return -1; // didn't find it

  return findIndex(arr, val, theIndex + 1)
}
// console.log("findIndex")
// findIndex([], ''); // throws error
// console.log(findIndex([1,2,3,4,5], 3) === 2)
// console.log(findIndex([1,2,4,5], 3) === -1)
// console.log(findIndex([1], 1) === 0)
// console.log(findIndex(['a', 'be', 'foo', 'four', 'fiver', 'tree', 'bar', 'ay', 'u'], 'tree') === 5)
// console.log(findIndex(['a'], 'a') === 0)

/** revString: return a copy of a string, but in reverse. */

function revString(str, theIndex = 0, theString = "") {
  if (str.length < 1) throw new Error('Cannot reverse an empty string');
  // console.log(str, theIndex, theString);
  if (str.length === theString.length) return theString;
  theString += str[(str.length - 1) - theIndex]

  return revString(str, theIndex + 1, theString)
}
// console.log("revString")
// revString("") // throws an error
// console.log(revString("abcdefg") === "gfedcba");
// console.log(revString("abcdef") === "fedcba");
// console.log(revString("bcdef") === "fedcb");
// console.log(revString("cde") === "edc");
// console.log(revString("ce") === "ec");
// console.log(revString("c") === "c");



/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let theArray = [];
  for (let key in obj) {

    if (typeof obj[key] === "object") {
      theArray.push(...gatherStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      theArray.push(obj[key]);
    }

  }

  return theArray;

}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

// gatherStrings(nestedObj)

// console.log(gatherStrings(nestedObj));


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftSide = 0, rightSide = arr.length) {
  if (arr.length < 1) throw new Error('Cannot find value in empty array');
  if (leftSide > rightSide) return -1;
  let midIdx = Math.floor((leftSide + rightSide) / 2);
  if (arr[midIdx] === val) return midIdx;

  if (arr[midIdx] > val) {
    return binarySearch(arr, val, leftSide, midIdx - 1);
  } else {
    return binarySearch(arr, val, midIdx + 1, rightSide);
  }

}
// console.log("binarySearch")
//console.log(binarySearch([])); // throws error
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6) === 5);
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 0) === -1);
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8) === -1);
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1) === 0);
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7) === 6);
// console.log(binarySearch([1], 1) === 0);

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
