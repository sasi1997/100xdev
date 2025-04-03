/**
 *
1. create a counter  in javascript (counts down from 30 to 0 )
2. calculate the time it takes  between  a setTimeout call and the inner function  actually running
3. create a terminal clock (HH:mm:ss)


4. check the async properly and check the problems in it

 */

// 1.

// let count = 30
// const interval = setInterval(() => {
//     count = + count - 1
//     console.log(count)

//     if (count == 0) {
//         clearInterval(interval)
//     }
// }, 100);


// 2.

// const start = Date.now();

// setTimeout(() => {
//     const end = Date.now();
//     console.log(`Actual delay: ${end - start} milliseconds`);
// }, 1000);


// 3.

// function displayClock() {
//     const now = new Date();
//     const timeString = now.toLocaleTimeString('en-US', { hour12: false }); // Format HH:mm:ss

//     process.stdout.write(`\r${timeString}`); // Overwrites the same line
// }

// setInterval(displayClock, 1000);
