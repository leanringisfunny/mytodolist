const inputSearch= document.querySelector(".input-search");

const todoList=document.querySelector(".todolist");

const seekingList=document.querySelector(".container__search-list"); 


function listarrayhandler(e){  
    var length = seekingList.childNodes.length;
    for(var i=0 ; i<length; i++){
        const toRemove=seekingList.childNodes[0];
        toRemove.remove();
        console.log(seekingList.childNodes);
        console.log(seekingList.childNodes.length);

    } 
    
    console.log('first checkPoint');
    console.log(seekingList.childNodes);
    console.log(seekingList.childNodes.length);

    if(inputSearch.value!==""){
    for(var i=0;i<todoList.childNodes.length;i++){
        if(todoList.childNodes[i].childNodes[0].innerHTML.includes(inputSearch.value)===true){
            const saveSearchInfo=document.createElement("span");
            const searchInfo=todoList.childNodes[i].childNodes[0].innerText;   

            saveSearchInfo.innerText=searchInfo;
            //saveSearchInfo.classList.add("container__search-element")
            seekingList.appendChild(saveSearchInfo);
        }
    }}
}

inputSearch.addEventListener("change",listarrayhandler)
