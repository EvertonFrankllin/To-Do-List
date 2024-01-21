document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.button-add-task');
    const input = document.querySelector('.task-inp');

    let addTaskLi = [];
    
        function addnewTask(){
            addTaskLi.push(input.value);
            console.log(addTaskLi);
        };

    button.addEventListener('click', addnewTask);
});






























