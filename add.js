const toDoInput=document.querySelector(".input-list");
const toDoList=document.querySelector(".todolist");
const toDoSubmit=document.querySelector(".input-button");


function enterkey(){
    if (window.event.keyCode == 13) {
 
        // 엔터키가 눌렸을 때 실행할 내용
        listAdd();
   }
}


function listAdd(){

    const newToDo=toDoInput.value;
    
    if(newToDo===''){
        alert('빈 칸을 입력해주세요.');
        return;
    }
    toDoInput.value="";
    const li=document.createElement("li");
    const span=document.createElement("span");
    const deleteButton=document.createElement("button");
    const reviseButton=document.createElement("button");
   
    deleteButton.innerText="삭제";
    deleteButton.classList.add("todolist__delete-button");
    reviseButton.innerText="수정"
    reviseButton.classList.add("todolist__revise-button");

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(reviseButton);
    li.classList.add("todolist__lists");
    
    function fixToDo(event){
        span.innerText=prompt("수정할 내용을 입력하세요.");
    }
    
    
    span.innerText=newToDo;
    toDoList.appendChild(li);

    
   
    reviseButton.addEventListener("click",fixToDo);
    

} 

toDoSubmit.addEventListener("click",listAdd);
