
// Get the current date and time
function logCurrentTime() {
    const currentDate = new Date();
    console.log(currentDate);
}

logCurrentTime()

//User basic logging system for an app
function logUserAction(userAction) {
    console.log(`User performed: ${userAction}`);
}
console.log("What the user has done");
logUserAction("Login");
logUserAction("View Profile");
logUserAction("Logout");
logUserAction("Add Item to Cart");

//simple calculator app
function calculate(num1,num2,operation) {
    let operationResult = null;
    if (operation === "add") {
        operationResult = num1 + num2;
    } else if (operation === "subtract") {
        operationResult = num1 - num2;
    } else if (operation === "multiply") {
        operationResult = num1 * num2;
    } else if (operation === "divide") {
        operationResult = num1/num2;
    } else {
        console.log("Please input the intended operation");
    }
    return operationResult;
}
console.log("Solutions to calculator app");
console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 50, "subtract"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));
console.log(calculate(10, 5, "upper"));

//calculate the velocity of an object
function calculateVelocity(initialVelocity, acceleration, time) {
    let velocity = initialVelocity + (acceleration * time);
    return velocity
}
console.log("Solutions to calculating velocity");
console.log(calculateVelocity(5, 2, 3));
console.log(calculateVelocity(0, 10, 5));
console.log(calculateVelocity(20, -3, 4));
console.log(calculateVelocity(15, 1, 10));

//Chess knight game
function KnightMoves(x, y) {
    const allPossibleMoves = [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
    ];
  
    //initialize an empty array that will hold all valid moves within the border
    const validMoves = [];
  
    //lets loop through all possible moves to find the valid ones
    for (let i = 0; i < allPossibleMoves.length; i++) {
      const newX = allPossibleMoves[i][0];
      const newY = allPossibleMoves[i][1];
  
      //validate the new position is within the board
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        validMoves.push(`${newX}, ${newY}`);
      }
    }
    return validMoves.join(", ");
  }
  
  console.log(KnightMoves(4, 4));


//Leadership board game with arrow functions
const calculateAverageScore = (scores) => {
    if (scores.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < scores.length;) {
        total += scores[i];
        i++
    }

    return total / scores.length;
};
console.log("Leadership Game results");
console.log(calculateAverageScore([80, 90, 70, 60]))
console.log(calculateAverageScore([100, 90, 95]));
console.log(calculateAverageScore([50, 50, 50, 50, 50]));
console.log(calculateAverageScore([]));


//assigning function to variables - managing list of tasks
function checkTaskStatus(taskName, isComplete) {
    let returnValue = null;
    if (isComplete) {
        returnValue = `Task ${taskName} is completed`;
        // console.log(`Task ${taskName} is completed`);
    } else {
        returnValue = `Task ${taskName} is not completed yet`;
        // console.log(`Task ${taskName} is not complete yet`);
    }
    return returnValue;
}

let taskLogger = checkTaskStatus;
console.log(taskLogger("Finish Homework", true));
console.log(taskLogger("Clean Room", false));
console.log(taskLogger("Go for a Run", true));
console.log(taskLogger("Read Book", false));

//simple online store
function calculateTotal(unitPrice, quantity) {
    let totalAmount = unitPrice * quantity;
    return totalAmount;
}

const totalCost = calculateTotal(15, 3);
console.log(totalCost);