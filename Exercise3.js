let my_arr = ["data", "representation", "and","Query"];

let add_task = (task) => {
    my_arr.push(task);
    console.log(task + " added to the array");
    console.log("Number of tasks: " + my_arr.length);
}
let list_all_tasks = () => {
    for(let i = 0; i < my_arr.length; i++) {
        console.log(i+1 + ". " + my_arr[i]);
    }
}
let delete_task = (task) => {
    for(let i = 0; i < my_arr.length; i++) {
        if(task === my_arr[i]) {
            my_arr.splice(i, 1);
        }
    }
    console.log("Number of tasks: " + my_arr.length);
}

add_task("Graphics");
list_all_tasks();
delete_task("and");
list_all_tasks();


