function dayOfWeek(num) {
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let index = num - 1;
    if (num < 1 || num > 7) {
        console.log("Invalid day!");
    } else {
        console.log(arr[index]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
