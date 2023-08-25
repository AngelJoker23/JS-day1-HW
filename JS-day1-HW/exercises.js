//============Exercise #1 ============//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    //Your code goes here
}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Exercise #1:
function findWords(str, names) {
    for (let i=0; i < names.length; i++) {
        if (str.includes(names[i])) {
            console.log("Matched " + names[i]);
        return;  // Exit the function after finding the firtst match
        }
    }
    console.log("No Matches");
}
findWords(dog_string, dog_names);


// Exercise #2:
function replaceEvens(arr) {
    for (let i=0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
replaceEvens(arr);
console.log(arr);

//============ CodeWars Challenges JavaScript Answers ============//
// 6kyu Challenge: Counting Duplicates JavaScript Answers:
function countDuplicates(array) {
    const seen = new Set();
    let count = 0;
    for (const value of array) {
      if (seen.has(value)) {
        count++;
      } else {
        seen.add(value);
      }
    }
    return count;
  }
  

// 6kyu Challenge: Sort the Odd JavaScript Answers:
function sortArray(array) {
    const odd=array.filter((x) => x%2).sort((a,b) => a-b);
    return array.map((x) => x%2 ? odd.shift() : x);
}

// 8kyu Challenge: Is He Gonna Survive? JavaScript Answers:
function hero(bullets, dragons) {
    return bullets / 2 >= dragons;
}

// 8kyu Challenge: How Good Are You Really? JavaScript Answers:
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a+b, 0) / classPoints.length;
}