    const todos = [];

    const todoList = document.querySelector("ul");

    const form = document.querySelector("form");

    const save = document.getElementById("save")

    let globalIndex = null;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const input = document.querySelector("input");
      const value = input.value;
      if(globalIndex != null){
        if((input.value).length > 0){  
            todos[globalIndex] = input.value;
            input.value = "";
            save.innerHTML = "Add";
            console.log("Index hàm save: " ,globalIndex);
            render();
          }
          else{
            return;
          }
      }
      else{
        if(todos.includes(value))
        alert("Trùng");
      else
        todos.push(value);
        input.value = "";
      }
      render();
    });

    function handleDelete(index) {
      todos.splice(index, 1);
      render();
    }

    function handleEdit(index){
      const input = document.querySelector("input");
      input.value = todos[index]; 
      globalIndex = index;
      render();
    }

    function render() {
      const todoElements = todos.map(function (todo) {
        return `
          <li>
            <span>${todo}</span>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
          </li>
        `;
      });

      todoList.innerHTML = todoElements.join("");

      const deleteButtons = document.querySelectorAll("#delete");

      for (let index = 0; index < deleteButtons.length; index++) {
        const deleteButton = deleteButtons[index];
        deleteButton.addEventListener("click", function () {
          handleDelete(index);
        });
      }

      const editButtons  = document.querySelectorAll("#edit");

      for (let index = 0; index < editButtons.length; index++) {
        const editButton = editButtons[index];
        editButton.addEventListener("click", function () {
          save.innerHTML = "Save";
          handleEdit(index);
          console.log("Index hàm edit:" ,index);
        });
      }
    }

    function initialApp() {
      render();
    }

    initialApp();