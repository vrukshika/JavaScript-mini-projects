
let tasks = [];

let input = prompt("enter your request!");

while (true) {
    if (input == "quit") {
        console.log("user quit!!");
        break;
    }

    if (input == "list") {
        console.log("-----------------");
        for (let i = 0; i < tasks.length;i++) {
            console.log(tasks[i]);
        }
        console.log("-----------------");
    }
    else if (input == "add") {
            let task = prompt("enter task:");
            tasks.push(task);
            console.log("task added succesfully!");
    }
    else if (input == "remove") {
        let rem = prompt("enter index of task that u want to delete.");
        tasks.splice(rem, 1);
        console.log("task remove successfully!");
    } else {
        console.log("wrong input!");
    }
    input= input = prompt("enter your request!");
}
