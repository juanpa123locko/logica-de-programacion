let var1 = parseInt(prompt("enter a number"));

for (let i = 1; i <= var1; i++) {
    if (i % 2 === 0) {
        console.log(`es par ${i}`);
    }
    else {
        console.log(`es impar ${i}`);
    }
}
