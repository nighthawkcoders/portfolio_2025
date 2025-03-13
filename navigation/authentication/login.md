---
layout: page
title: Login
permalink: /login
search_exclude: true
show_reading_time: false
---


<style>
    .submit-button {
        width: 100%;
        padding: 1rem;
        color: black;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        padding: 1rem;
    }

    .login-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        /* allows the cards to wrap onto the next line if the screen is too small */
    }

    .login-card {
        margin-top: 0;
        /* remove the top margin */
        width: 45%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
        overflow-x: auto;
        /* Enable horizontal scrolling */
    }

    .login-card h1 {
        margin-bottom: 20px;
    }

    .signup-card {
        margin-top: 0;
        /* remove the top margin */
        width: 45%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
        overflow-x: auto;
        /* Enable horizontal scrolling */
    }

    .signup-card h1 {
        margin-bottom: 20px;
    }

    .form-group {
        position: relative;
        margin-bottom: 1.5rem;
    }

    .form-group ion-icon {
        position: absolute;
        top: 50%;
        left: 10px;
        /* Adjust based on desired spacing */
        transform: translateY(-50%);
        font-size: 1.5rem;
        /* Adjust the size of the icon */
        color: rgba(255, 255, 255, 0.4);
        pointer-events: none;
        /* Ensure the icon does not interfere with input focus */
    }

    .form-input {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem;
        /* Add left padding to make room for the icon */
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        font-size: 1rem;
        color: white;
        transition: all 0.3s ease;
    }

    .form-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    .form-input:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.05);
    }

    .form-input:-webkit-autofill,
    .form-input:-webkit-autofill:hover,
    .form-input:-webkit-autofill:focus,
    .form-input:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #ffffff;
        transition: background-color 5000s ease-in-out 0s;
        box-shadow: inset 0 0 20px 20px #23232329;

    }

    .glow-on-hover-search {
        //this makes it actually glow
        border: none;
        outline: none;
        color: #fff;
        background: #1e1e1e;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 10px;
    }

    .glow-on-hover-search:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .glow-on-hover-search:hover:before {
        opacity: 1;
    }

    .glow-on-hover-search:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #1e1e1e;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }

        50% {
            background-position: 400% 0;
        }

        100% {
            background-position: 0 0;
        }
    }
</style>
<br>
<div class="login-container">
    <!-- Python Login Form -->
    <div class="login-card">
        <h1 id="pythonTitle">User Login (Python/Flask)</h1>
        <hr>
        <form id="pythonForm" onsubmit="loginBoth(); return false;">
            <div class="form-group">
                <input type="text" class="form-input" id="uid" placeholder="GitHub ID" required>
                <ion-icon name="id-card-outline"></ion-icon>
            </div>
            <div class="form-group">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" class="form-input" id="password" placeholder="Password" required>
            </div>
            <p>
                <button type="submit" class="glow-on-hover-search submit-button">Login</button>
            </p>
            <p id="message" style="color: red;"></p>
        </form>
    </div>
    <div class="signup-card">
        <h1 id="signupTitle">Sign Up</h1>
        <hr>
        <form id="signupForm" onsubmit="signup(); return false;">
            <div class="form-group">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" class="form-input" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input type="text" class="form-input" id="signupUid" placeholder="GitHub ID" required>
                <ion-icon name="id-card-outline"></ion-icon>
            </div>
            <div class="form-group">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" class="form-input" id="signupPassword" placeholder="Password" required>
            </div>
            <p>
                <label>
                    <input type="checkbox" name="kasmNeeded" id="kasmNeeded">
                    Kasm Server Needed
                </label>
            </p>
            <p>
                <button type="submit" class="glow-on-hover-search submit-button">Sign Up</button>
            </p>
            <p id="signupMessage" style="color: green;"></p>
        </form>
    </div>
</div>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script type="module">
    import { login, pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    // Function to handle both Python and Java login simultaneously
    window.loginBoth = function () {
    javaLogin();  // Call Java login
    pythonLogin();
};
    // Function to handle Python login
    window.pythonLogin = function () {
        const options = {
            URL: `${pythonURI}/api/authenticate`,
            callback: pythonDatabase,
            message: "message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            }
        };
        login(options);
    }
    // Function to handle Java login
    window.javaLogin = function () {
    const loginURL = `${javaURI}/authenticate`;
    const databaseURL = `${javaURI}/api/person/get`;
    const signupURL = `${javaURI}/api/person/create`;

    const userCredentials = JSON.stringify({
        uid: document.getElementById("uid").value,
        password: document.getElementById("password").value,
    });

    const loginOptions = {
        ...fetchOptions,
        method: "POST",
        body: userCredentials,
    };

    console.log("Attempting Java login...");

    fetch(loginURL, loginOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid login");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login successful!", data);

            // Fetch database after login success using fetchOptions
            return fetch(databaseURL, fetchOptions);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Spring server response: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Java database response:", data);
        })
        .catch(error => {
            console.error("Login failed:", error.message);

            // If login fails, attempt account creation
            if (error.message === "Invalid login") {
                alert("Login for Spring failed. Creating a new Java account...");

                const signupData = JSON.stringify({
                    uid: document.getElementById("uid").value,
                    email: document.getElementById("uid").value + "@gmail.com",
                    dob: "11-01-2024", // Static date, can be modified
                    name: document.getElementById("uid").value,
                    password: document.getElementById("password").value,
                    kasmServerNeeded: false,
                });

                const signupOptions = {
                    ...fetchOptions,
                    method: "POST",
                    body: signupData,
                };

                fetch(signupURL, signupOptions)
                    .then(signupResponse => {
                        if (!signupResponse.ok) {
                            throw new Error("Account creation failed!");
                        }
                        return signupResponse.json();
                    })
                    .then(signupResult => {
                        console.log("Account creation successful!", signupResult);
                        alert("Account Creation Successful. Logging you into Flask/Spring!");

                        // Retry login after account creation
                        return fetch(loginURL, loginOptions);
                    })
                    .then(newLoginResponse => {
                        if (!newLoginResponse.ok) {
                            throw new Error("Login failed after account creation");
                        }
                        console.log("Login successful after account creation!");

                        // Fetch database after successful login
                        return fetch(databaseURL, fetchOptions);
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Spring server response: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Java database response:", data);
                    })
                    .catch(newLoginError => {
                        console.error("Error after account creation:", newLoginError.message);
                    });
            } else {
                console.log("Logged in!");
            }
        });
};

    // Function to fetch and display Python data
    function pythonDatabase() {
        const URL = `${pythonURI}/api/id`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Flask server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                window.location.href = '{{site.baseurl}}/profile';
            })
            .catch(error => {
                document.getElementById("message").textContent = `Error: ${error.message}`;
            });
    }

    window.signup = function () {
        const signupButton = document.querySelector(".signup-card button");
        // Disable the button and change its color
        signupButton.disabled = true;
        signupButton.style.backgroundColor = '#d3d3d3'; // Light gray to indicate disabled state
        const signupOptions = {
            URL: `${pythonURI}/api/user`,
            method: "POST",
            cache: "no-cache",
            body: {
                name: document.getElementById("name").value,
                uid: document.getElementById("signupUid").value,
                password: document.getElementById("signupPassword").value,
                kasm_server_needed: document.getElementById("kasmNeeded").checked,
            }
        };
        fetch(signupOptions.URL, {
            method: signupOptions.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupOptions.body)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Signup failed: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("signupMessage").textContent = "Signup successful!";
                // Optionally redirect to login page or handle as needed
                // window.location.href = '{{site.baseurl}}/profile';
            })
            .catch(error => {
                console.error("Signup Error:", error);
                document.getElementById("signupMessage").textContent = `Signup Error: ${error.message}`;
                // Re-enable the button if there is an error
                signupButton.disabled = false;
                signupButton.style.backgroundColor = ''; // Reset to default color
            });
    }

    function javaDatabase() {
        const URL = `${javaURI}/api/person/get`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }
</script>
