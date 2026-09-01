const e = [
    "YVdRNklEZzBOekk1TVRZek5URXdORGN5T0RNNU1UWWdjR0Z6Y3pvZ1N6ZHRVVEo0T1V4d1VnPT0=",
    "YVdRNklETTVNamd4TnpRMk5UQXlPVEU0TXpjME5qVWdjR0Z6Y3pvZ1ZqUnVWRGh3V2paUllRPT0=",
    "YVdRNklEWXhOVGt5T0RNM05EWXdNVGt5TnpRNE16QWdjR0Z6Y3pvZ1NEbDNVak5yVEcwM1dBPT0=",
    "YVdRNklEY3lPRE0yTkRreE1EVTNNamd6TmpReE9UVWdjR0Z6Y3pvZ1VUSnpXVGQyVG1NMFVBPT0=",
    "YVdRNklERTRORGN6TmpJNU5UQXhPRFEzTXpZeU9UUWdjR0Z6Y3pvZ1RUWjRTemx5VkdJeVZ3PT0="
];

window.addEventListener("load", async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));

    let accounts;

    try {
        accounts = e.map(encoded => atob(atob(encoded)));
        console.log("Decoded accounts:", accounts);
    } catch (error) {
        console.error("Failed to decode login data:", error);
        alert("Login system error. Please contact the developer.");
        return;
    }
    alert(
        "Sign in with your unique ID given by the developer to access Beta Testing."
    );

    let loggedIn = false;
    while (!loggedIn) {

        const id = window.prompt("ID:");
        if (id === null) {
            continue;
        }

        const password = window.prompt("Password:");
        
        if (password === null) {
            continue;
        }
        
        const cleanId = id.trim();
        const cleanPassword = password.trim();

        if (!cleanId || !cleanPassword) {
            alert(
                "Incorrect login, please contact the developer if you are having trouble logging in."
            );
            continue;
        }

        const attempt = `id: ${cleanId} pass: ${cleanPassword}`;

        console.log("Login attempt:", attempt);

        if (accounts.includes(attempt)) {
            loggedIn = true;
            console.log("Login successful:", cleanId);
            alert("Login successful!");
        } else {
            console.log("Login failed:", cleanId);
            alert(
                "Incorrect login, please contact the developer if you are having trouble logging in."
            );
        }
    }

    console.log("Logged in:", loggedIn);
});
