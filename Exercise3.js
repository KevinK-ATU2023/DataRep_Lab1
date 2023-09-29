let my_arr = ["data", "representation", "and","Query"];

let add_task = (task) => {
    my_arr.push(task);
    console.log("Task: "+ task + " added to the array");
    console.log("Number of tasks: " + my_arr.length);
}
let list_all_tasks = () => {
    my_arr.forEach((task) => {
        console.log(task);
    });
}

let delete_task = (task) => {
    let index = my_arr.indexOf(task);
    my_arr.splice(index, 1);
    console.log("Number of tasks: " + my_arr.length);
}

add_task("Graphics");
list_all_tasks();
delete_task("and");
list_all_tasks();
