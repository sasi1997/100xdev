in class :

1. let sum = 0;
        for(let i =0 ; i < 10000000000;i++){
        sum += i;
        }
        
    why this is taking almost 100% CPU is because it has a arithmetic operation which CPU has to calculate . i
        f you will remove the sum += i, it will take less CPU occupancy . because of CPU intensive task its taking the nearly 100%



 * 2. we can pass the function in callback also

eg:

        function sum(num1, num2, fnToCall) {
            let result = num1 + num2;
            fnToCall(result)
            // return result;
        }

        function displayResult(data) {
            console.log("Result of the sum is : " + data);
        }

        function displayResultPassive(data) {
            console.log("Sum's result is : " + data);
        }

        // You are only allowed to call one function after this
        // How will you displayResult of a sum

        const ans = sum(1,2, displayResult)



assignments : 

1. create a counter  in javascript (counts down from 30 to 0 )
2. calculate the time it takes  between  a setTimeout call and the inner function  actually running 
3. create a terminal clock (HH:mm:ss)


4. check the async properly and check the problems in it 
5. 



js loop eg link: 
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

