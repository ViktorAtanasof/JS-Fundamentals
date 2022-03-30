function addAndRemove(arr) {
    let newArray = [];
    let index = 0;
    let command = arr[index++];

    for (let i = 1; i <= arr.length; i++) {
        if (command === "add") {
            newArray.push(Number(i));
        }
        if (command === "remove") {
            newArray.pop();
        }
        command = arr[index++];
    }
    if (newArray.length <= 0) {
        console.log("Empty");
    }
    console.log(newArray.join(" "));
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
