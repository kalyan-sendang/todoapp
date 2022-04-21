var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

var addButton = document.getElementById("add-button");
addButton.addEventListener("click",addtodoItem);
function addtodoItem()
{
    var itemText = toDoEntryBox.value;
    addElement(itemText, false);
}
var clearcompeltedbuttons= document.getElementById("clear-completed-button");
clearcompeltedbuttons.addEventListener("click",clear);
function clear()
{
    var completeditems = toDoList.getElementsByClassName("completed")
    while(completeditems.length > 0)
    {
        completeditems.item(0).remove();
    }
}
var emptybuttons= document.getElementById("empty-button");
 emptybuttons.addEventListener("click",empty);
 function empty()
 {
     var emptytext = toDoList.children;
    while(emptytext.length > 0)
    {
        emptytext.item(0).remove();
    }
 }
 
 function save()
 {
    var a = [];
    for(var i=0;i<toDoList.children.length;i++)
    {
        var toDo= toDoList.children.item(i);
        var todoinfo= {
            "text":toDo.innerText,
            "completed":toDo.classList.contains("completed")
        };
        a.push(todoinfo);
        localStorage.setItem("a",JSON.stringify(a));
    }
 }
 var loadbutton = document.getElementById("load-button");
 loadbutton.addEventListener("click",load);
    function load()
    {
    
    if(localStorage.getItem("a")!=null)
    {
        var a= JSON.parse(localStorage.getItem("a"));

        for(var i=0;i<a.length;i++)
        {
            var toDo = a[i];
            addElement(toDo.text,toDo.completed);
        }
    }
    }

function addElement(itemText,completed)
{
    var toDoItem =document.createElement("li");//creates an li element to use as your new list item.
    var toDoText = document.createTextNode(itemText);//creates a text node — a special container for text that you want to put inside a HTML element using JavaScript — and fills it with the contents of the itemText variable that is passed into the function.
    toDoItem.appendChild(toDoText);//takes the element, or text node, that you pass to it (in this case toDoText), and puts it inside toDoItem. If there are already elements inside that one, the one you’re adding now will be last.
    if(completed)
    {
        toDoItem.classList.add("completed");
    }
    toDoList.appendChild(toDoItem);
  
    toDoItem.addEventListener("dblclick",toggleToDoItem);
    save();
}

function toggleToDoItem()
{
    if(this.classList.contains("completed")){
    this.classList.remove("completed");
}
    else{
        this.classList.add("completed");
    }
}
