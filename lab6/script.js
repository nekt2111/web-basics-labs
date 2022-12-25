class User {
    picture;
    city;
    postcode;
    cell;
    name;
}

const AMOUNT_OF_RESULTS = 5;

function updateUsers() {
    event.preventDefault();
    showSpinner();
    fetch(`https://randomuser.me/api?results=${AMOUNT_OF_RESULTS}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            processResult(data.results);
            hideSpinner();
        });
}

function processResult(data) {
    let users = [];
    document.querySelector('.users-list').innerHTML = '';
    for (let i = 0; i < AMOUNT_OF_RESULTS; i++) {
        const user = new User();
        const userData = data[i];

        user.name = userData.name.first + " " + userData.name.last;
        user.picture = userData.picture.medium;
        user.cell = userData.cell;
        user.city = userData.location.city;
        user.postcode = userData.location.postcode;

        users.push(user);
        pushUserToHtml(user);
    }
}

function pushUserToHtml(user) {
    document.querySelector('.users-list').innerHTML += `<div class="user-card">
        <img class="user-picture" src="${user.picture}"{/>
        <div class="user-name">${user.name}</div>
        <div class="user-city">${user.city}</div>
        <div class="user-cell">${user.cell}</div>
        <div class="user-postcode">${user.postcode}</div>
    </div>`
}

function showSpinner() {
    document.querySelector('.users-list').style.display = 'none';
    document.querySelector('.loader').style.display = 'block'
}

function hideSpinner() {
    document.querySelector('.users-list').style.display = 'flex';
    document.querySelector('.loader').style.display = 'none'
}
window.onload = () => updateUsers();

