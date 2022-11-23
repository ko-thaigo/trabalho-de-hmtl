function addNewTask() {
    var list= document.getElementById("list");
    var text= document.getElementById("task_name").value;

    if(text.length ===0){
        alert('Tarefa precisa ter mais de um caracter');
        return;
    }
    var listItem= document.createElement("li");
    listItem.className= "list-item";

    const textElemente= document.createTextNode(text)
    listItem.appendChild(textElemente)
    list.appendChild(listItem)
}

var sec=0
var min=0
var hr=0

var interval

function start(){
    interval= setInterval(watch, 1)
    
}

function pause(){
   clearInterval(interval)
    
}

function stop(){
    clearInterval(interval)
    min=0
    sec=0
    document.getElementById("watch").innerText='00:00:00'
}


function watch (){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    
    document.getElementById("watch").innerText=hr+':'+min+':'+sec 
}