// Remaining things to implement
// 1. make the clearAll button disapper when the the todoContainer has been emptied using delBtn
// 2. work on the itemLefts to show the number of todo items 

let mainSection = document.querySelector('section');
let addBtn = document.querySelector('.circle');
let input = document.querySelector('input');
let todoContainer = document.querySelector('.empty');
let moon = document.querySelector('.moon');
let clearAll = document.createElement('button');
let itemsLeft = document.createElement('p');


addBtn.addEventListener('click', ()=> {

    if (input.value === '') {
        alert("You haven't written anything yet!")
    }
    else {
    let newTodo = document.createElement('h1'); //creating a h1 element
    let newItem = document.createElement('div'); //creating a div element
    let col_1 = document.createElement('div'); //to hold check btn & newTodo
    let checkedBtn = document.createElement('div');
    let delBtn = document.createElement('div');

    // checkedBtn.setAttribute('src', '/todo-app-main/images/icon-check.svg');
    // delBtn.setAttribute('src', '/todo-app-main/images/icon-cross.svg');
    checkedBtn.setAttribute('class', 'check-btn');
    // checkedBtn.innerHTML =
    delBtn.textContent = '❌';
    delBtn.setAttribute('class', 'del-btn');
    newItem.setAttribute('class', 'newItem');
    col_1.setAttribute('class', 'col-1');

    newTodo.textContent = input.value; //passing the value of the input field into the h1 created above 
    col_1.appendChild(checkedBtn); //appending check-button into the div created above
    col_1.appendChild(newTodo); //appending the h1 with the text inside into the div created above
    newItem.appendChild(col_1);
    newItem.appendChild(delBtn); //appending delete-button into the div created above
    todoContainer.appendChild(newItem); //appnding that div created above which now contains check-button, h1 with text inside and delete button
    input.value = '';


    //Work on Checked buttons starts here...
    checkedBtn.addEventListener('click', ()=> {
        newTodo.classList.toggle('line-through');
        checkedBtn.classList.toggle('tick');
    })

    //Delete button
    delBtn.addEventListener('click', ()=> {
        todoContainer.removeChild(newItem);
    });


    //Items Left button
//    for (let i = 0; i > ; i++) {  
//       let guys = document.createElement('p');
//       guys.textContent = `items left`;
//       todoContainer.appendChild(guys);


//    }




    //Clear all button
    clearAll.textContent = 'Clear All';
    clearAll.setAttribute('class', 'clear-all')
    todoContainer.appendChild(clearAll);

    clearAll.addEventListener('click', ()=> {
        todoContainer.innerHTML = '';
        mainSection.removeChild(clearAll);

    })

}
});





