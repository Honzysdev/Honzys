const e = [
    "YVdRNklEZzBOekk1TVRZek5URXdORGN5T0RNNU1UWUtjR0Z6Y3pvZ1N6ZHRVVEo0T1V4d1VnPT0=",
    "YVdRNklETTVNamd4TnpRMkU0TXpjME5qVUtjR0Z6Y3pvZ1ZqUnVWRGh3V2paUllRPT0=",
    "YVdRNklEWXhOVGt5T0RNM05EWXdNVGt5TnpRNE16QUtjR0Z6Y3pvZ1NEbDNVak5yVEcwM1dBPT0=",
    "YVdRNklEY3lPRE0yTkRreE1EVTNNamd6TmpReE9UVUtjR0Z6Y3pvZ1VUSnpXVGQyVG1NMFVBPT0=",
    "YVdRNklERTRORGN6TmpJNU5UQXhPRFEzTXpZeVZqUnVWRGh3V2paUllRPT0="
];

const a = e.map(x => atob(atob(x)));

window.addEventListener("load", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    alert("Sign in with your unique ID given by developer to access Beta Testing");

    let loggedIn = false;

    do {
        const Id = window.prompt("Id:");
        const password = window.prompt("Password:");

        if (!Id || !password) {
            alert("Incorrect login, please contact developer if you are having troubles logging in.");
            await new Promise(resolve => setTimeout(resolve, 3000));
            continue;
        }

        const attempt = `id: ${Id} pass: ${password}`;

        console.log("Attempt:", attempt);
        console.log("Stored:", a);

        if (a.includes(attempt)) {
            loggedIn = true;
            console.log("Login successful:", Id);
            alert("Login successful!");
        } else {
            alert("Incorrect login, please contact developer if you are having troubles logging in.");
            await new Promise(resolve => setTimeout(resolve, 3000));
        }

    } while (!loggedIn);

    console.log("Logged in:", loggedIn);
});
