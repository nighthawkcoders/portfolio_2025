---
layout: post
title: Profile Settings
permalink: /profile
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

    .login-card {
        margin-top: 0;
        /* remove the top margin */
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
        overflow-x: auto;
        background-color: #2c3e50;
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

    .your-profile-container {
        justify-content: center;
        align-items: center'
    }
</style>

<div class="your-profile-container">
    <div class="login-card">
        <form>
            <!-- New UID -->
            <div class="form-group">
                <input type="text" class="form-input" id="newUid" placeholder="Enter New UID">
                <ion-icon name="id-card-outline"></ion-icon>
            </div>
            <!-- New Name -->
            <div class="form-group">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" class="form-input" id="newName" placeholder="Enter New Name">
            </div>
            <!-- New Password -->
            <div class="form-group">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="text" class="form-input" id="newPassword" placeholder="New Password">
            </div>
            <hr>
            <!-- kasm server -->
            <div>
                <label for="kasmServerNeeded">Kasm Server Needed:
                    <input type="checkbox" id="kasmServerNeeded" onclick="toggleKasmServerNeeded()">
                </label>
            </div>
            <hr>
            <div>
                <label for="sectionDropdown">Select and Add Section:</label>
                <div class="icon-container">
                    <select id="sectionDropdown">
                        <!-- Options will be dynamically populated -->
                    </select>
                    <i class="fas fa-plus" onclick="addSection()"></i>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Abbreviation</th>
                        <th>Name</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody id="profileResult">
                    <!-- Table rows will be dynamically populated -->
                </tbody>
            </table>
            <label for="profilePicture" class="file-icon"> Upload Profile Picture <i class="fas fa-upload"></i>
                <!-- Replace this with your desired icon -->
            </label>
            <input type="file" id="profilePicture" accept="image/*" onchange="saveProfilePicture()">
            <div class="image-container" id="profileImageBox">
                <!-- Profile picture will be displayed here -->
            </div>
            <p id="profile-message" style="color: red;"></p>
        </form>
    </div>
</div>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

<script type="module">
    // Import fetchOptions from config.js
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    // Import functions from config.js
    import { putUpdate, postUpdate, deleteData, logoutUser } from "{{site.baseurl}}/assets/js/api/profile.js";

    // Global variable to hold predefined sections
    let predefinedSections = [];

    // Function to fetch  sections from kasm2_backend
    async function fetchPredefinedSections() {
        const URL = pythonURI + "/api/section";

        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch predefined sections: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching predefined sections:', error.message);
            return []; // Return empty array on error
        }
    }

    // Function to populate section dropdown menu
    function populateSectionDropdown(predefinedSections) {
        const sectionDropdown = document.getElementById('sectionDropdown');
        sectionDropdown.innerHTML = ''; // Clear existing options

        predefinedSections.forEach(section => {
            const option = document.createElement('option');
            option.value = section.abbreviation;
            option.textContent = `${section.abbreviation} - ${section.name}`;
            sectionDropdown.appendChild(option);
        });

        // Display sections in the table
        displayProfileSections();
    }

    // Global variable to hold user sections
    let userSections = [];

    // Function to add a section
    window.addSection = async function () {
        const dropdown = document.getElementById('sectionDropdown');
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const abbreviation = selectedOption.value;
        const name = selectedOption.textContent.split(' ').slice(1).join(' ');

        if (!abbreviation || !name) {
            document.getElementById('profile-message').textContent = 'Please select a section from the dropdown.';
            return;
        }

        // Clear error message
        document.getElementById('profile-message').textContent = '';

        // Add section to userSections array if not already added
        const sectionExists = userSections.some(section => section.abbreviation === abbreviation && section.name === name);
        if (!sectionExists) {
            userSections.push({ abbreviation, name });

            // Display added section in the table
            displayProfileSections();

            // Save sections immediately
            await saveSections();
        }
    }

    // Function to display added sections in the table
    function displayProfileSections() {
        const tableBody = document.getElementById('profileResult');
        tableBody.innerHTML = ''; // Clear existing rows

        // Create a new row and cell for each section
        userSections.forEach(section => {
            const tr = document.createElement('tr');
            const abbreviationCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const yearCell = document.createElement('td');

            // Fill in the corresponding cells with data
            abbreviationCell.textContent = section.abbreviation;
            nameCell.textContent = section.name;
            yearCell.textContent = section.year;

            tr.appendChild(abbreviationCell);
            tr.appendChild(nameCell);
            tr.appendChild(yearCell);

            // Add the row to table
            tableBody.appendChild(tr);
        });
    }

    // Function to save sections in the specified format
    async function saveSections() {
        const sectionAbbreviations = userSections.map(section => section.abbreviation);

        const sectionsData = {
            sections: sectionAbbreviations
        };

        const URL = pythonURI + "/api/user/section";

        const options = {
            URL,
            body: sectionsData,
            message: 'profile-message',
            callback: async () => {
                console.log('Sections saved successfully!');
                await fetchDataAndPopulateTable();
            }
        };

        try {
            await postUpdate(options);
        } catch (error) {
            console.error('Error saving sections:', error.message);
            document.getElementById('profile-message').textContent = 'Error saving sections: ' + error.message;
        }
    }

    // Function to fetch data from the backend and populate the table
    async function fetchDataAndPopulateTable() {
        const URL = pythonURI + "/api/user/section"; // Endpoint to fetch sections data

        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch sections: ${response.status}`);
            }

            const sectionsData = await response.json();
            updateTableWithData(sectionsData); // Call function to update table with fetched data
        } catch (error) {
            console.error('Error fetching sections:', error.message);
            // Handle error display or fallback mechanism
        }
    }

    // Function to update table with fetched data
    function updateTableWithData(data) {
        const tableBody = document.getElementById('profileResult');
        tableBody.innerHTML = '';

        data.sections.forEach((section, index) => {
            const tr = document.createElement('tr');
            const abbreviationCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const yearCell = document.createElement('td');

            abbreviationCell.textContent = section.abbreviation;
            nameCell.textContent = section.name;
            yearCell.textContent = section.year;

            const trashIcon = document.createElement('i');
            trashIcon.className = 'fas fa-trash-alt trash-icon';
            trashIcon.style.marginLeft = '10px';
            abbreviationCell.appendChild(trashIcon);

            trashIcon.addEventListener('click', async function (event) {
                event.preventDefault();
                const URL = pythonURI + "/api/user/section";

                // Remove the row from the table
                tr.remove();

                const options = {
                    URL,
                    body: { sections: [section.abbreviation] },
                    message: 'profile-message',
                    callback: async () => {
                        console.log('Section deleted successfully!');
                        await fetchDataAndPopulateTable();
                    }
                };

                try {
                    await deleteData(options);
                } catch (error) {
                    console.error('Error deleting section:', error.message);
                    document.getElementById('profile-message').textContent = 'Error deleting section: ' + error.message;
                }
            });

            yearCell.classList.add('editable'); // Make year cell editable
            yearCell.innerHTML = `${section.year} <i class="fas fa-pencil-alt edit-icon" style="margin-left: 10px;"></i>`;

            // Make the year cell editable
            yearCell.addEventListener('click', function () {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = section.year;
                input.className = 'edit-input';
                yearCell.innerHTML = '';
                yearCell.appendChild(input);

                input.focus();

                input.addEventListener('blur', async function () {
                    const newYear = input.value;
                    const URL = pythonURI + "/api/user/section";
                    const options = {
                        URL,
                        body: { section: { abbreviation: section.abbreviation, year: newYear } },
                        message: 'profile-message',
                        callback: async () => {
                            console.log('Year updated successfully!');
                            await fetchDataAndPopulateTable();
                        }
                    };

                    try {
                        await putUpdate(options);
                    } catch (error) {
                        console.error('Error updating year:', error.message);
                        document.getElementById('profile-message').textContent = 'Error updating year: ' + error.message;
                    }

                    yearCell.textContent = newYear;
                });

                input.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {
                        input.blur();
                    }
                });
            });
            tr.appendChild(abbreviationCell);
            tr.appendChild(nameCell);
            tr.appendChild(yearCell);

            tableBody.appendChild(tr);
        });

    }

    // Function to fetch user profile data
    async function fetchUserProfile() {
        const URL = pythonURI + "/api/id/pfp"; // Endpoint to fetch user profile data

        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch user profile: ${response.status}`);
            }

            const profileData = await response.json();
            displayUserProfile(profileData);
        } catch (error) {
            console.error('Error fetching user profile:', error.message);
            // Handle error display or fallback mechanism
        }
    }

    // Function to display user profile data
    function displayUserProfile(profileData) {
        const profileImageBox = document.getElementById('profileImageBox');
        if (profileData.pfp) {
            const img = document.createElement('img');
            img.src = `data:image/jpeg;base64,${profileData.pfp}`;
            img.alt = 'Profile Picture';
            profileImageBox.innerHTML = ''; // Clear existing content
            profileImageBox.appendChild(img); // Append new image element
        } else {
            profileImageBox.innerHTML = '<p>No profile picture available.</p>';
        }

        // Display other profile information as needed
        // Example: Update HTML elements with profileData.username, profileData.email
    }

    // Function to save profile picture
    window.saveProfilePicture = async function () {

        const fileInput = document.getElementById('profilePicture');
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const profileImageBox = document.getElementById('profileImageBox');
                profileImageBox.innerHTML = `<img src="${reader.result}" alt="Profile Picture">`;
            };
            reader.readAsDataURL(file);
        }

        if (!file) return;

        try {
            const base64String = await convertToBase64(file);
            await sendProfilePicture(base64String);
            console.log('Profile picture uploaded successfully!');

        } catch (error) {
            console.error('Error uploading profile picture:', error.message);
            // Handle error display or fallback mechanism
        }
    }

    // Function to convert file to base64
    async function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split[','](1)); // Remove the prefix part of the result
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    // Function to send profile picture to server
    async function sendProfilePicture(base64String) {
        const URL = pythonURI + "/api/id/pfp"; // Adjust endpoint as needed

        // Create options object for PUT request
        const options = {
            URL,
            body: { pfp: base64String },
            message: 'profile-message', // Adjust the message area as needed
            callback: () => {
                console.log('Profile picture uploaded successfully!');
                // Handle success response as needed
            }
        };

        try {
            await putUpdate(options);
        } catch (error) {
            console.error('Error uploading profile picture:', error.message);
            document.getElementById('profile-message').textContent = 'Error uploading profile picture: ' + error.message;
        }
    }
    // Function to update UI with new UID and change placeholder
    window.updateUidField = function (newUid) {
        const uidInput = document.getElementById('newUid');
        uidInput.value = newUid;
        uidInput.placeholder = newUid;
    }

    // Function to update UI with new Name and change placeholder
    window.updateNameField = function (newName) {
        const nameInput = document.getElementById('newName');
        nameInput.value = newName;
        nameInput.placeholder = newName;
    }

    // Function to change UID
    window.changeUid = async function (uid) {
        if (uid) {
            const URL = pythonURI + "/api/user"; // Adjusted endpoint

            const options = {
                URL,
                body: { uid },
                message: 'uid-message', // Adjust the message area as needed
                callback: () => {
                    alert("You updated your Github ID, so you will automatically be logged out. Be sure to remember your new github id to log in!");
                    console.log('UID updated successfully!');
                    window.updateUidField(uid);
                    window.location.href = '{{site.baseurl}}/duallogin'
                }
            };

            try {
                await putUpdate(options);
            } catch (error) {
                console.error('Error updating UID:', error.message);
                document.getElementById('uid-message').textContent = 'Error updating UID: ' + error.message;
            }
        }
    }

    window.changePassword = async function (password) {
        if (password) {
            const URL = pythonURI + "/api/user"; // Adjusted endpoint

            const options = {
                URL,
                body: { password },
                message: 'password-message', // Adjust the message area as needed
                callback: () => {
                    console.log('Password updated successfully!');
                    window.location.href = '{{site.baseurl}}/duallogin'

                }
            };

            try {
                alert("You updated your password, so you will automatically be logged out. Be sure to remember your password!");
                await putUpdate(options);
                await logoutUser();
            } catch (error) {
                console.error('Error updating password:', error.message);
                document.getElementById('password-message').textContent = 'Error updating password: ' + error.message;
            }
        }
    }

    // Function to change Name
    window.changeName = async function (name) {
        if (name) {
            const URL = pythonURI + "/api/user";
            const options = {
                URL,
                body: { name },
                message: 'name-message',
                callback: () => {
                    console.log('Name updated successfully!');
                    window.updateNameField(name);
                }
            };
            try {
                await putUpdate(options);
            } catch (error) {
                console.error('Error updating Name:', error.message);
                document.getElementById('name-message').textContent = 'Error updating Name: ' + error.message;
            }
        }
    }

    // Event listener to trigger updateUid function when UID field is changed
    document.getElementById('newUid').addEventListener('change', function () {
        const uid = this.value;
        window.changeUid(uid);

    });

    // Event listener to trigger updateName function when Name field is changed
    document.getElementById('newName').addEventListener('change', function () {
        const name = this.value;
        window.changeName(name);

    });

    document.getElementById('newPassword').addEventListener('change', function () {
        const password = this.value;
        window.changePassword(password);

    });

    window.fetchKasmServerNeeded = async function () {
        const URL = pythonURI + "/api/id"; // Adjusted endpoint
        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch kasm_server_needed: ${response.status}`);
            }
            const userData = await response.json();
            const kasmServerNeeded = userData.kasm_server_needed
            // Update checkbox state based on fetched value
            const checkbox = document.getElementById('kasmServerNeeded');
            checkbox.checked = kasmServerNeeded;
        } catch (error) {
            console.error('Error fetching kasm_server_needed:', error.message);
            // Handle error display or fallback mechanism
        }
    };

    // Function to toggle kasm_server_needed attribute on checkbox change
    window.toggleKasmServerNeeded = async function () {
        const checkbox = document.getElementById('kasmServerNeeded');
        const newKasmServerNeeded = checkbox.checked;
        const URL = pythonURI + "/api/user"; // Adjusted endpoint
        const options = {
            URL,
            body: { kasm_server_needed: newKasmServerNeeded },
            message: 'kasm-server-message', // Adjust the message area as needed
            callback: () => {
                console.log('Kasm Server Needed updated successfully!');
            }
        };

        try {
            await putUpdate(options);
        } catch (error) {
            console.error('Error updating kasm_server_needed:', error.message);
            document.getElementById('kasm-server-message').textContent = 'Error updating kasm_server_needed: ' + error.message;
        }
    }
    window.fetchUid = async function () {
        const URL = pythonURI + "/api/id"; // Adjusted endpoint

        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch UID: ${response.status}`);
            }

            const data = await response.json();
            return data.uid;
        } catch (error) {
            console.error('Error fetching UID:', error.message);
            return null;
        }
    };

    // Function to fetch Name from backend
    window.fetchName = async function () {
        const URL = pythonURI + "/api/id"; // Adjusted endpoint

        try {
            const response = await fetch(URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to fetch Name: ${response.status}`);
            }

            const data = await response.json();
            return data.name;
        } catch (error) {
            console.error('Error fetching Name:', error.message);
            return null;
        }
    };

    // Function to set placeholders for UID and Name
    window.setPlaceholders = async function () {
        const uidInput = document.getElementById('newUid');
        const nameInput = document.getElementById('newName');

        try {
            const uid = await window.fetchUid();
            const name = await window.fetchName();

            if (uid !== null) {
                uidInput.placeholder = uid;
            }
            if (name !== null) {
                nameInput.placeholder = name;
            }
        } catch (error) {
            console.error('Error setting placeholders:', error.message);
        }
    };

    // Call fetchPredefinedSections and initializeProfileSetup when DOM content is loaded
    document.addEventListener('DOMContentLoaded', async function () {
        try {
            predefinedSections = await fetchPredefinedSections();
            console.log('Predefined Sections:', predefinedSections);
            populateSectionDropdown(predefinedSections); // Populate dropdown with fetched sections
            await fetchUserProfile(); // Fetch user profile data
            await fetchDataAndPopulateTable(); // Fetch and populate table with user sections
            await fetchKasmServerNeeded();
            await setPlaceholders();
        } catch (error) {
            console.error('Initialization error:', error.message);
            // Handle initialization error gracefully
        }
    });

</script>
