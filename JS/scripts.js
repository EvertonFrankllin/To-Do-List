
const button = document.querySelector('.button-add-task');
const input = document.querySelector('.task-inp');

button.addEventListener('click', () => {
    console.log(input.value);
});