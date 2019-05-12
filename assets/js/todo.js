let data = [{
    id: 1,
    title: "Estudar HTML"
}, {
    id: 2,
    title: "Estudar CSS"
}, {
    id: 3,
    title: "Estudar JavaScript"
}, {
    id: 4,
    title: "Estudar NodeJS"

}, {
    id: 5,
    title: "Estudar React"
}];

data.forEach(task => {
    let li = document.createElement('li');

    //Template da lista de tarefas    
    li.innerHTML = `
    <input type="checkbox" id="task-${task.id}">
    <label for="${task.id}">${task.title}</label>
    `;

    //Adicionado evento de ckecked na lista de tarefa completada
    li.querySelector('input').addEventListener('change', e =>{

        if(e.target.checked){
            li.classList.add('complete')

        }else{
            li.classList.remove('complete')
        }

         
    })

    document.querySelector('.todo').append(li);

});