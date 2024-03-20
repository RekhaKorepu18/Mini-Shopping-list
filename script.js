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
                if (!item.deleted) {
                    const li = document.createElement('li');
                    li.classList.add('shopping-item');
                    if (item.done) {
                        li.classList.add('done');
                        markedCount++;
                    } else {
                        unmarkedCount++;
                    }
                    li.textContent = item.newitem;

                    li.addEventListener('click', () => {
                        toggle(index);
                    });

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'X';
                    deleteBtn.addEventListener('click', (event) => {
                        event.stopPropagation();
                        deleteItem(index);
                    });

                    li.appendChild(deleteBtn);
                    shoppingListElement.appendChild(li);
                }
            });

            markedCountElement.textContent = `Marked: ${markedCount}`;
            unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
            totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
        }

        function addItem(item) {
            if (item.trim() !== '') {
                shoppingList.push({
                    newitem: item.trim(),
                    deleted: false,
                    done: false
                });
                showList();
            }
            else{
                window.alert("Oops! you have not entered any item")
            }
        }

        function deleteItem(index) {
            shoppingList[index].deleted = true;
            showList();
        }

        function toggle(index) {
            shoppingList[index].done = !shoppingList[index].done;
            showList();
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
                item.style.display = hide? 'none' : 'block';
            });
        });

        showList();