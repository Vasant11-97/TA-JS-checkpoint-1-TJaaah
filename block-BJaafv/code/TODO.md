1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return = a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```
<!--
The main difference between these two function is that when we call the function with arguments one will store the output and another will just display the sum and give output as undefined. In console.log we cannot store the value of output. 
 -->

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.

<!-- 
  If we store the value of first function in variable first then it will store the addition of two values and return it to the first variable. When we use second variable to store the value of seconf function then it will show the addition but it will return a value as "undefined" because we are using console.log in the function which don't allow us to store the value outside the console.
 -->

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?

<!-- 
The output will be 36 because there were two parameters declared in the function but there are three argument while calling the function so the third value will be ignore and will consider the first two values and gives the output.
 -->

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

<!-- 
  Yes we can store a function named sum in the add variable because function acts as an object and we can write the function on right side of the = operator.
 -->

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

function sayHello(name){
  name = (`Hello Arya`);
  return name;
}
sayHello();

6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}.

showMessage();
```
<!-- 
  The output will be Hello, John because we declared a variable userName and we used that variable in anoter to get the username and the message variable was declared so username and message concatenated.
 -->

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // undefined

showMessage(); // "Hello, John"

alert(userName); // undefined
```

8. What is a Anonymous Function give example of three functions. 

<!-- 
    Anonymous Function : When we store a function in a variable we have a option of not giving the name to a function. When we don't give name to a function it is known as an anonymous function.
    example : let num = function(a, b){
      return a + b ; 
    }
    num();
    2 : let sub = function(a, b){
      return a - b ; 
    }
    sub();
    3 : let mul = function(a, b){
      return a * b ; 
    }
    mul();
 -->

9. Can function declaration be a Anonymous Function? Explain

<!-- 
  No function declaration cannot be a Anonymous Function because for declaring a function we have to give a name to function but in anonymous function we dont give name to a function so it cannot be declared.
 -->

10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```

<!-- 
  Good naming convertions :
  1 : function oddOrEven()
  2 : function addingNumbers();
  3 : function findingFactorial();
  4 : function findingGreaterNumber();
  5 : function findingMultiple();
 -->