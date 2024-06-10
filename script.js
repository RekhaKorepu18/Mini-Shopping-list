class ShoppingItem {
    constructor(newitem) {
        this.newitem = newitem;
        this.deleted = false;
        this.done = false;
    }

    toggleDone() {
        this.done = !this.done;
    }

    deleteItem() {
        this.deleted = true;
    }
}

const shoppingList = [];

function showList() {
    const shoppingListElement = document.getElementById('shoppingList');
    const markedCountElement = document.getElementById('markedCount');
    const unmarkedCountElement = document.getElementById('unmarkedCount');
    const totalCountElement = document.getElementById('totalCount');
    shoppingListElement.innerHTML = '';

    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingList.forEach((item, index) => {
        if (item.deleted) return; // If item deleted, then return

        createListItem(item, index, shoppingListElement);
        if (item.done) {
            markedCount++;
        } else {
            unmarkedCount++;
        }
    });

    markedCountElement.textContent = `Marked: ${markedCount}`;
    unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
    totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
}

function createListItem(item, index, parentElement) {
    const li = document.createElement('li');
    li.classList.add('shopping-item');
    if (item.done) {
        li.classList.add('done');
    }
    li.textContent = item.newitem;

    li.addEventListener('click', () => {
        toggleItem(index);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteShoppingItem(index);
    });

    li.appendChild(deleteBtn);
    parentElement.appendChild(li);
}

function addItem(item) {
    if (item.trim() === '') {
        window.alert("Oops! you have not entered any item");
        return; //If you do not enter any item then return
    }

    const newItem = new ShoppingItem(item.trim());
    shoppingList.push(newItem);
    const shoppingListElement = document.getElementById('shoppingList');
    createListItem(newItem, shoppingList.length - 1, shoppingListElement);
    updateCounts();
}

function deleteShoppingItem(index) {
    shoppingList[index].deleteItem();
    showList();
}

function toggleItem(index) {
    shoppingList[index].toggleDone();
    showList();
}

function updateCounts() {
    const markedCountElement = document.getElementById('markedCount');
    const unmarkedCountElement = document.getElementById('unmarkedCount');
    const totalCountElement = document.getElementById('totalCount');

    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingList.forEach(item => {
        if (item.deleted) 
              return; // If item deleted then return

        if (item.done) {
            markedCount++;
        } else {
            unmarkedCount++;
        }
    });

    markedCountElement.textContent = `Marked: ${markedCount}`;
    unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
    totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
}

document.getElementById('addItemBtn').addEventListener('click', () => {
    const newItemInput = document.getElementById('newItemInput');
    addItem(newItemInput.value);
    newItemInput.value = '';
});

document.getElementById('newItemInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem(event.target.value);
        event.target.value = '';
    }
});

document.getElementById('hideCompletedCheckbox').addEventListener('change', (event) => {
    const hide = event.target.checked;
    const doneItems = document.querySelectorAll('.shopping-item.done');
    doneItems.forEach((item) => {
        item.style.display = hide ? 'none' : 'block';
    });
});

showList();
