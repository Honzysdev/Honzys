const e = [
    "ODQ3MjkxNjM1MTA0NzI4MzkxNg==",
    "MzkyODE3NDY1MDI5MTgzNzQ2NQ==",
    "NjE1OTI4Mzc0NjAxOTI3NDgzMA==",
    "NzI4MzY0OTEwNTcyODM2NDE5NQ=="
];

async function startLogin() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    let allowedIds;

    try {
        allowedIds = e.map(encoded => atob(encoded));
        console.log("Allowed IDs:", allowedIds);

    } catch (error) {
        console.error("Failed to decode IDs:", error);
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

        const cleanId = id.trim();

        if (!cleanId) {
            alert("Please enter your ID.");
            continue;
        }

        console.log("Login attempt:", cleanId);
        if (allowedIds.includes(cleanId)) {
            loggedIn = true;
            console.log("Login successful:", cleanId);
            alert("Login successful!");
        } else {
            alert(
                "Incorrect ID. Please contact the developer if you are having trouble logging in."
            );
        }
    }

    console.log("Logged in:", loggedIn);
}

if (document.readyState === "loading") {
    window.addEventListener("load", startLogin);
} else {
    startLogin();
}
