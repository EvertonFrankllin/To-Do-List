document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.button-add-task');
    const input = document.querySelector('.task-inp');
    const completList = document.querySelector('.list-task');
    


        
    

    let addTaskLi = [];
    
        function addnewTask(){
            addTaskLi.push(input.value);
            input.value ='';
            openTask();
        };

        function openTask(){
            let newLi= '';
            
            addTaskLi.forEach((task) => {
                newLi +=  
                `<li class="task">
                    <img src="imagens/foguete.png" alt="imagem de foguete">
                        <p>${task}</p>
                <img class="lixo" src="./imagens/excluir.png"  alt="Imagem de lixeira" >
                </li>`
                
            });
            
            completList.innerHTML = newLi;

        };
        
        
    button.addEventListener('click', addnewTask);

    
   
});






































