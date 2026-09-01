window.alert("You have to sign in to continue!");

const username = window.prompt("Username:");
const password = window.prompt("Password:");

if (username && password) {
    console.log("Login attempt:", username);
}
