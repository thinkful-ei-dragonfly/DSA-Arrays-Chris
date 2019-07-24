// function urlify(str) {
//     return str.split(' ').join('%20')
// }

// console.log(urlify('tauhida parveen'))
// console.log(urlify('www.thinkful.com /tauh ida parv een'))

const array = [4, 6, -3, 5, -2, 1];

function maxContinousSum(arr) {
    
    let currentMax = 0;
    let total = 0;
    arr.forEach(i => {
        total += i;
        if (total > currentMax) {
            currentMax = total;
        }
    })
    return currentMax;
}

// console.log(maxContinousSum(array))
// Time Complexity: O(n) 

function sortIntegers(a, b) {
    return a - b;
  }

const arrayOne = [1, 3, 6, 8, 11];
const arrayTwo = [2, 3, 5, 8, 9, 10];

function mergeArray(arrayOne, arrayTwo) {
    return arrayOne.concat(arrayTwo)
            .map(num => parseInt(num))
            .sort(sortIntegers)
}

// console.log(mergeArray(arrayOne, arrayTwo))
// Time Complexity: O(n) 


function removeCharacters(str, characters) {
    return str.split("").filter(i => (!characters.includes(i))).join('')
}

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou', 'a,'))
// Time Complexity: O(n) 


function products(array) {
    let finalArray = []
    array.forEach(num => {
        let temp = num;
        let tempArray = array.filter(number => number !== temp);
        finalArray.push(tempArray.reduce((a,b) => a*b))
    })
    return finalArray;
}

// console.log(products([1, 3, 9, 4]))
// Time Complexity: O(n^2) 

const zeroArray = [
                    [1,0,1,1,0],
                    [0,1,1,1,0],
                    [1,1,1,1,1],
                    [1,0,1,1,1],
                    [1,1,1,1,1]
                ];


function twodArray(array) {
    let finalArray = [];
    array.forEach(array => {
        if (array.includes(0)) {
            let zeroArray = [];
            array.forEach(number => {
                zeroArray.push(0)
            })
            finalArray.push(zeroArray)
        }
        else {
            finalArray.push(array)
        }     
    })
    return finalArray
}

// console.log(twodArray(zeroArray))
// Time Complexity: O(n^2) 

function stringRotation(str1, str2) {
    let combinedString = str1 + str1;
    return combinedString.includes(str2);
}

console.log(stringRotation('amazon', 'azonma'))

console.log(stringRotation('amazon', 'azonam'))
// Time Complexity: O(n)