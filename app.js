// INIT
const URL = "https://jsonplaceholder.typicode.com/users";
const userData = {
    name: "M H",
    username: "m981",
    email: "m981@helpdesk.com",
}

// FUNCS
async function getUsers() {
    await fetch(URL)
    .then(response => response.json())
    .then((data) => console.log(data));
}

async function createUser(userData) {
    try {
        const response = await fetch(URL, { // Wacht op fetch
            method: "POST", 
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json(); // API Response -> JSON Structuur
        console.log(data);
        server_antwoord_data = data;
    } catch (err) {
        console.log("Error posting user:", err);
    }
}

getUsers()
createUser(userData)