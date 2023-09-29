// 1 find the maximum between two numbers

let numberOne = 101;
let numberTwo = 50;
let numberThree = 105;
let numberFour = -33;
let numberFive = 0;


// 1 find the maximum between two numbers

console.log(Math.max(numberOne, numberTwo));

// 2 find a maximum between three numbers

console.log(Math.max(numberOne, numberTwo, numberThree));

// 3 check whether a number is negative, positive or zero


console.log(Math.sign(numberThree)); // If value is positive, returns 1
console.log(Math.sign(numberFour)); // If value is negetive, returns -1
console.log(Math.sign(numberFive)); // If value is zero, returns 0


// 4 check whether a number is divisible by 10 or not

function isDivisibleBy10(number) {
    return number % 10 === 0;
  }
  console.log(isDivisibleBy10(350));
  console.log(isDivisibleBy10(351));


// 5 check whether a number is even or odd.


  function isEven(number) {
    return number % 2 === 0; 
  }
  
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  
  console.log(isEven(40));   // true
  console.log(isEven(71));   // false
  console.log(isOdd(42));    // false
  console.log(isOdd(73));    // true


//   6 check whether a character is in the alphabet or not

function isAlphabetCharacter(char) {
    return isNaN(char);
  }
  
  // Example usage:
  console.log(isAlphabetCharacter('ABC')); // true
  console.log(isAlphabetCharacter('7')); // false
  
//   7 check whether the temperature

  function checkTemperature(temperature) {
    if (temperature >= 30) {
      return "hot";
    } else if (temperature <= 25) {
      return "cold";
    } else {
      return "normal";
    }
  }
  
  // Example usage:
  console.log(checkTemperature(35));  // hot
  console.log(checkTemperature(20));  // cold
  console.log(checkTemperature(27));  // normal
  

//   8 find the total marks and average of 3 subjects

function calculateGrade(mathMarks, englishMarks, physicsMarks) {
    
    // Calculate total marks
    const totalMarks = mathMarks + englishMarks + physicsMarks;
  
    // Calculate average percentage
    const averagePercentage = (totalMarks / 300) * 100;
  
    // Determine the grade based on the average percentage
    let grade;
    if (averagePercentage >= 90) {
      grade = "Grade A";
    } else if (averagePercentage >= 80) {
      grade = "Grade B";
    } else if (averagePercentage >= 70) {
      grade = "Grade C";
    } else if (averagePercentage >= 60) {
      grade = "Grade D";
    } else if (averagePercentage >= 40) {
      grade = "Grade E";
    } else {
      grade = "Grade F"; // Below 40% is Grade F (Fail)
    }
  
    // Return the results
    return {
      totalMarks: totalMarks,
      averagePercentage: averagePercentage,
      grade: grade,
      
    };
  }
  
  // Example usage:
  const mathMarks = 90;
  const englishMarks = 85;
  const physicsMarks = 75;
  
  const result = calculateGrade(mathMarks, englishMarks, physicsMarks);
  console.log("Total Marks:", result.totalMarks);
  console.log("Average Percentage:", result.averagePercentage.toFixed(2) + "%");
  console.log("Grade:", result.grade);



  //9 Generate a random number between 1 and 10

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);


// 10 Create a for loop where it prints out the even number only between number 10 to 50

for (let number = 10; number <= 50; number += 2) {
    console.log(number);
  }
  
  

