window.alert("Sign in by your unique id given by developer!");

const Id = window.prompt("Id:");
const password = window.prompt("Password:");
const loggedIn;

if (Id && password) {
    console.log("Login attempt:", Id);
    loggedIn = true;
}
else {
    window.alert("Incorrect log in, please contact developer if you are entering correct logins");
    loggedIn = false
}

const u´ = [
    "YVdRNklEZzBOekk1TVRZek5URXdORGN5T0RNNU1UWUtjR0Z6Y3pvZ1N6ZHRVVEo0T1V4d1VnPT0=",
    "YVdRNklETTVNamd4TnpRMk5UQXlPVEU0TXpjME5qVUtjR0Z6Y3pvZ1ZqUnVWRGh3V2paUllRPT0=",
    "YVdRNklEWXhOVGt5T0RNM05EWXdNVGt5TnpRNE16QUtjR0Z6Y3pvZ1NEbDNVak5yVEcwM1dBPT0=",
    "YVdRNklEY3lPRE0yTkRreE1EVTNNamd6TmpReE9UVUtjR0Z6Y3pvZ1VUSnpXVGQyVG1NMFVBPT0=",
    "YVdRNklERTRORGN6TmpJNU5UQXhPRFEzTXpZeU9UUUtjR0Z6Y3pvZ1RUWjRTemx5VkdJeVZ3PT0="
];

const u = u´.map(x => atob(atob(x)));
console.log(u);
