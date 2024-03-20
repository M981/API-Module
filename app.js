const URL = "https://jsonplaceholder.typicode.com/users";

getUsers()
async function getUsers() {
    await fetch(URL)
    .then(response => response.json())
    .then((data) => console.log(data));
}