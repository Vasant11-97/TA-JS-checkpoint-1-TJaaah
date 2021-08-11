// 1. Using loops take 10 inputs from user and find the average of all the numbers.


let count = 1;
let add_1 = 0;
while(count <= 10){
    let num = +prompt(`Enter the number : `);
    add_1 += num;
    
    num = 0;
    count ++;

}
let average = add_1 / 10;
console.log(average);

//  What will be the output of the code below

// println is not defined.

// 3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers.
//  The value of max should default to 10.

function getEvenSum(max){
    let count = 0;
    let even = 0;
        while(count <= max){
            if(count % 2 == 0){
                even += count;
            }
            count ++;
        }
    console.log(even);
    }
getEvenSum(10);

function getOddSum(max){
    let count = 0;
    let odd = 0;
        while(count <= max){
            if(count % 2 != 0){
                odd += count;
            }
            count ++;
        }
    console.log(odd);
    }
getOddSum(10);

// 5. Write a function named `getProductOfDigits` that accepts a parameter `num`. 
// It returns the product of all the digits in the number.
// - If the input value is less than 0 return `not a valid input`
// - For example if the input is `123` output should be `6`.

function getProductOfDigits(num){

    getProductOfDigits(13);
}
