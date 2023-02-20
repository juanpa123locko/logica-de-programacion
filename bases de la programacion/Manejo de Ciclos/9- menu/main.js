
let option;

do {
    option = prompt("select 1 to say hi\n select 2 to say goodbye\n 3 to close");
    switch (option) {
        case "1":
            console.log("hi");
            break;
        case "2":
            console.log("goodbye");
            break;
        case "3":
            console.log("closing");
            break;
        default:
            console.log("invalid option")
    }
}
while (option !== "3");
// another way
/*
while (true) {
    var choice = prompt("Please choose an option: \n1. Say hi \n2. Say goodbye \n3. Close");

    if (choice == "1") {
        console.log("Hi");
    } else if (choice == "2") {
        console.log("Goodbye");
    } else if (choice == "3") {
        console.log("Closing");
        break;
    }
}
*/
