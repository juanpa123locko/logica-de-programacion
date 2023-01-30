let option = parseInt(prompt("please enter number 1"));
let option2 = parseInt(prompt("please enter number 2"));
let option3 = parseInt(prompt("please enter number 3"));
let res = 0;
let i = 0;


do {
    res = option + option2 + option3;
    i++;
    console.log(res);
}
while (i < 4);