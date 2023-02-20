let question1 = parseInt(prompt('What is the first number?'));
let question2 = parseInt(prompt('What is the second number?'));
let question3 = parseInt(prompt('What is the third number?'));
let res = 0;
let i = 0;


do {
    i++;
    res = question1 * question2 * question3;
    console.log(`final answer is ${res}`);

}
while (i < 4);
