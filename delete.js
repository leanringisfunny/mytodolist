const todolist=document.querySelector(".todolist")


function deleteToDo(event){
    const options=event.target;
    if(options.classList.contains("todolist__delete-button")){
        const currentLine=options.parentElement
        currentLine.remove();
    }
    
}



todolist.addEventListener("click",deleteToDo);