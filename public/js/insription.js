document.addEventListener('DOMContentLoaded', function() {
    loadItemsFromLocalStorage();
});

document.getElementById('addButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const teamNameInput = document.getElementById('teamNameInput');
    const file = fileInput.files[0];
    const teamName = teamNameInput.value.trim();

    if (file && teamName) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const item = {
                id: Date.now(),
                name: teamName,
                imgSrc: e.target.result
            };
            addItemToLocalStorage(item);
            addItemToPage(item);
        };
        reader.readAsDataURL(file);
    }
});

function addItemToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem('teamItems')) || [];
    items.push(item);
    localStorage.setItem('teamItems', JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
    let items = JSON.parse(localStorage.getItem('teamItems')) || [];
    items.forEach(item => addItemToPage(item));
}

function addItemToPage(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('team-item');
    itemDiv.setAttribute('data-id', item.id);

    const img = document.createElement('img');
    img.src = item.imgSrc;
    itemDiv.appendChild(img);

    const nameDiv = document.createElement('div');
    nameDiv.textContent = item.name;
    itemDiv.appendChild(nameDiv);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editItem(item.id);
    });
    itemDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteItem(item.id);
    });
    itemDiv.appendChild(deleteButton);

    document.getElementById('boxteam').appendChild(itemDiv);
}

function editItem(itemId) {
    const items = JSON.parse(localStorage.getItem('teamItems')) || [];
    const item = items.find(i => i.id === itemId);
    const newName = prompt('Enter new team name', item.name);

    if (newName) {
        item.name = newName;
        localStorage.setItem('teamItems', JSON.stringify(items));
        document.querySelector(`.team-item[data-id="${itemId}"] div`).textContent = newName;
    }
}

function deleteItem(itemId) {
    let items = JSON.parse(localStorage.getItem('teamItems')) || [];
    items = items.filter(item => item.id !== itemId);
    localStorage.setItem('teamItems', JSON.stringify(items));
    document.querySelector(`.team-item[data-id="${itemId}"]`).remove();
}