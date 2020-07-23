
var list = document.getElementById("list")

function addtodo(){
    var todo_items = document.getElementById("Todo_items")

   // Create li tag  with Text Node.

    var li = document.createElement("li");
    var liText = document.createTextNode(todo_items.value);
    li.appendChild(liText)
    

    //Create Delete Button.

    var dltbtn = document.createElement("button")
    var dltText = document.createTextNode("Delete");
    dltbtn.setAttribute("class","btn");
    dltbtn.setAttribute("onclick","deleteItem(this)")
    dltbtn.appendChild(dltText);


    // Create Edit Button

    var editbtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editbtn.setAttribute("class","edit");
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(editText);

    li.appendChild(editbtn);
    li.appendChild(dltbtn);
    list.appendChild(li);
    todo_items.value = ""   
}

    // Create All Items Delete.

    function deleteItem(e){
        e.parentNode.remove()
    }


    // Create Edit Items.

    function editItem(e){
        var val =  e.parentNode.firstChild.nodeValue;
        var editValue = prompt("Enter your update value",val)
        e.parentNode.firstChild.nodeValue = editValue;
    }

    
    function deleteAll(){
        list.innerHTML = ""
    }


    


    