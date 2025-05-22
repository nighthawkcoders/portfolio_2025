import { baseurl, pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("Base URL:", baseurl); // Debugging line
    getCredentials(baseurl) // Call the function to get credentials
        .then(data => {
            console.log("Credentials data:", data); // Debugging line
            const loginArea = document.getElementById('loginArea');
            if (data) { // Update the login area based on the data
                // User is authenticated, replace "Login" with User's name
                loginArea.innerHTML = `
                    <div class="dropdown">
                        <button class="dropbtn">${data.name}</button>
                        <div class="dropdown-content">
                            <a href="${baseurl}/logout">Logout</a>
                            <a href="${baseurl}/profile">Profile</a>
                            <a href="${baseurl}/gamify/fortuneFinders">Gamify</a>
                        </div>
                    </div>
                `;
            } else {
                // User is not authenticated, then "Login" link is shown
                loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
            }
        })
        .catch(err => {
            console.error("Error fetching credentials: ", err);
            // Show login link on error
            const loginArea = document.getElementById('loginArea');
            if (loginArea) {
                loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
            }
        });
});

function getCredentials(baseurl) {
    const URL = pythonURI + '/api/id';
    return fetch(URL, {
        ...fetchOptions,
        credentials: 'include' // Add this to include cookies
    })
    .then(response => {
        if (!response.ok) {
            console.warn("HTTP status code: " + response.status);
            return null;
        }
        return response.json();
    })
    .then(data => {
        if (data === null) return null;
        console.log("User data:", data);
        return data;
    })
    .catch(err => {
        console.error("Fetch error: ", err);
        // Return null instead of throwing to handle the error gracefully
        return null;
    });
}
