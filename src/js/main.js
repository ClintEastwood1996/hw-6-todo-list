var ToDoItemNumber = 1;


// Plus new todo module 
(function() {
    document.getElementById("plusButton").onclick = function() {
        document.getElementById("todoList").insertAdjacentHTML("beforeend",
            `<div class="todo-list-item" id="todoListItem${ToDoItemNumber}">
                <input type="text" class="todo-list-item__text" id="itemText${ToDoItemNumber}" readonly></input>
                <input type="button" class="todo-list-item__button" value="&#10004;" id="doneButton${ToDoItemNumber}">
                <input type="button" class="todo-list-item__button" value="&#10008;" id="deleteButton${ToDoItemNumber}">
            </div>`
        );
    
        var deleteButton = document.getElementById(`deleteButton${ToDoItemNumber}`);
        var itemText = document.getElementById(`itemText${ToDoItemNumber}`);
        var doneButton = document.getElementById(`doneButton${ToDoItemNumber}`);
        var deadline = document.getElementById("daedline").value;
        
    
        deleteButton.addEventListener('click', () => deleteButton.parentElement.remove());
    
        doneButton.addEventListener('click', () => ((itemText.style.textDecoration == "line-through") ? 
        (itemText.style.textDecoration = "none") : 
        (itemText.style.textDecoration = "line-through")));
    
        itemText.value = deadline + ": " + document.getElementById("newTodoText").value;
    
        ToDoItemNumber++;
    }
})();



// Module filter function
var filter = ((function () {
    return {
        filterBy: function(filterBy) {
            return function() {
                var todoListItems = document.querySelectorAll(".todo-list-item");
                var chosenDate = document.getElementById("filterDaedline").value;
        
            
                if (todoListItems[0]) {
                    switch (filterBy) {
                        case ("done"): {
                            for (var todoListItem of todoListItems) {
                                if (!(todoListItem.firstElementChild.style.textDecoration === "line-through")) {
                                    todoListItem.style.display = "none";
                                };
                            }
                            break;
                        };
                        case ("notDone"): {
                            for (var todoListItem of todoListItems) {
                                if (todoListItem.firstElementChild.style.textDecoration === "line-through") {
                                    todoListItem.style.display = "none";
                                };
                            }
                            break;
                        };
                        case ("showAll"): {
                            for (var todoListItem of todoListItems) {
                                todoListItem.style.display = "flex";
                            }
                            break;
                        };
                        case ("chosenDate"): {
                            for (var todoListItem of todoListItems) {
                                if (!(todoListItem.firstElementChild.value.substr(0,10) == chosenDate)) {
                                    todoListItem.style.display = "none";
                                } else {
                                    todoListItem.style.display = "flex";
                                };
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
})());


document.getElementById("DoneFilter").onclick = filter.filterBy("done");
document.getElementById("showAll").onclick = filter.filterBy("showAll");
document.getElementById("notDoneFilter").onclick = filter.filterBy("notDone");
document.getElementById("filterDaedline").onchange = filter.filterBy("chosenDate");




    







