const e = [
    "YVdRNklEZzBOekk1TVRZek5URXdORGN5T0RNNU1UWWdjR0Z6Y3pvZ1N6ZHRVVEo0T1V4d1VnPT0=",
    "YVdRNklETTVNamd4TnpRMk5UQXlPVEU0TXpjME5qVWdjR0Z6Y3pvZ1ZqUnVWRGh3V2paUllRPT0=",
    "YVdRNklEWXhOVGt5T0RNM05EWXdNVGt5TnpRNE16QWdjR0Z6Y3pvZ1NEbDNVak5yVEcwM1dBPT0=",
    "YVdRNklEY3lPRE0yTkRreE1EVTNNamd6TmpReE9UVWdjR0Z6Y3pvZ1VUSnpXVGQyVG1NMFVBPT0=",
    "YVdRNklERTRORGN6TmpJNU5UQXhPRFEzTXpZeU9UUWdjR0Z6Y3pvZ1RUWjRTemx5VkdJeVZ3PT0="
];

console.log(a);

window.addEventListener("load", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));

    let a;

    try {
        a = e.map(x => atob(atob(x)));
        console.log("Decoded accounts:", a);
    } catch (error) {
        console.error("Failed to decode login data:", error);
        alert("Login system error. Please contact the developer.");
        return;
    }
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
