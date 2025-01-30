---
layout: post
title: Profile Settings
permalink: /profilejava
menu: nav/homejava.html
search_exclude: true
show_reading_time: false
---
<div class="profile-container">
 <div class="card">
   <form>
     <div>
       <label for="newUid">Enter New UID:</label>
       <input type="text" id="newUid" placeholder="New Uid">
     </div>
     <div>
       <label for="newUid">Enter New Email:</label>
       <input type="text" id="newEmail" placeholder="New Email">
     </div>
     <div>
       <label for="newName">Enter New Name:</label>
       <input type="text" id="newName" placeholder="New Name">
     </div>
     <div>
        <label for="newStudentID">Enter New Student ID: </label>
        <input type="number" id="newStudentId" placeholder="NewStudentID">
    </div>
      <div>
       <label for="newPassword">Enter New Password:</label>
       <input type="text" id="newPassword" placeholder="New Password">
     </div>
     <br>
     <div>
       <label for="kasmServerNeeded">Kasm Server Needed:
       <input type="checkbox" id="kasmServerNeeded" onclick="toggleKasmServerNeeded()">
       </label>
     </div>
     <br>
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
     <label for="profilePicture" class="file-icon"> Upload Profile Picture <i class="fas fa-upload"></i> <!-- Replace this with your desired icon -->
     </label>
     <input type="file" id="profilePicture" accept="image/*" onchange="saveProfilePicture()">
     <div class="image-container" id="profileImageBox">
         <!-- Profile picture will be displayed here -->
     </div>
     <p id="profile-message" style="color: red;"></p>
   </form>
 </div>
</div>
<script type="module">
// Import fetchOptions from config.js
import {javaURI, fetchOptions} from '{{site.baseurl}}/assets/js/api/config.js';
// Import functions from config.js
import {putUpdate, postUpdate, deleteData, logoutUserJava } from "{{site.baseurl}}/assets/js/api/profile.js";
// Function to fetch user profile data
async function fetchUserProfile() {
    const URL = javaURI + "/api/person/get"; // Endpoint to fetch user profile data
    try {
        const response = await fetch(URL, fetchOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch user profile: ${response.status}`);
        }
        const profileData = await response.json();
        // Pass the full profile data to display function
        displayUserProfile(profileData);
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        // Display fallback or error message
        const profileImageBox = document.getElementById('profileImageBox');
        profileImageBox.innerHTML = '<p>Error loading profile picture.</p>';
    }
}
function displayUserProfile(profileData) {
    const profileImageBox = document.getElementById('profileImageBox');
    profileImageBox.innerHTML = ''; // Clear existing content
    if (profileData.pfp) {
        const img = document.createElement('img');
        // Construct full URL for the image
        img.src = `${javaURI}${profileData.pfp}`;
        img.alt = 'Profile Picture';
        img.style.width = '150px'; // Example size
        img.style.height = '150px'; // Example size
        profileImageBox.appendChild(img);
    } else {
        profileImageBox.innerHTML = '<p>No profile picture available.</p>';
    }
    // Example: Update other profile fields
}
// Function to save profile picture
window.saveProfilePicture = async function () {
    const fileInput = document.getElementById('profilePicture');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
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
        reader.onload = () => resolve(reader.result.split(',')[1]); // Remove the prefix part of the result
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}
// Function to send profile picture to server
async function sendProfilePicture(base64String) {
   const URL = javaURI + "/api/person/update"; // Adjust endpoint as needed
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
       await postUpdate(options);
   } catch (error) {
       console.error('Error uploading profile picture:', error.message);
   }
}
  // Function to update UI with new UID and change placeholder
window.updateEmailField = function(newEmail) {
  const emailInput = document.getElementById('newEmail');
  emailInput.value = newEmail;
  emailInput.placeholder = newEmail;
}
window.updateUidField = function(newEmail) {
  const uidInput = document.getElementById('newUid');
  uidInput.value = newUid;
  uidInput.placeholder = newUid;
}
// Function to update UI with new Name and change placeholder
window.updateNameField = function(newName) {
  const nameInput = document.getElementById('newName');
  nameInput.value = newName;
  nameInput.placeholder = newName;
}
// Function to update UI with new Student ID and change to a placeholder
window.updateStudentIdField = function(newStudentId) {
  const studentIdInput = document.getElementById('newStudentId');
  studentIdInput.value = newStudentId;
  studentIdInput.placeholder = newStudentId;
}
// Function to change UID
window.changeEmail = async function(email) {
   if (email) {
       const URL = javaURI + "/api/person/update"; // Adjusted endpoint
       const options = {
           URL,
           body: { email },// Adjust the message area as needed
           callback: () => {
               console.log('Email updated successfully!');
               window.updateEmailField(email);
           }
       };
       try {
           await postUpdate(options);
       } catch (error) {
           console.error('Error updating Email:', error.message);
       }
   }
}
window.changeUid = async function(uid) {
   if (uid) {
       const URL = javaURI + "/api/person/update"; // Adjusted endpoint
       const options = {
           URL,
           body: { uid },// Adjust the message area as needed
           callback: () => {
               alert("You updated your uid, so you will automatically be logged out. Be sure to remember your new github id to log in!");
               console.log('Uid updated successfully!');
               window.updateUidField(uid);
           }
       };
       try {
           await postUpdate(options);
           await logoutUserJava();
           window.location.href = '/portfolio_2025/toolkit-login'
       } catch (error) {
           console.error('Error updating  UId:', error.message);
       }
   }
}
window.changePassword = async function(password) {
   if (password) {
       const URL = javaURI + "/api/person/update"; // Adjusted endpoint
       const options = {
           URL,
           body: { password }, // Adjust the message area as needed
           callback: () => {
               console.log('Password updated successfully!');
               window.location.href = '/portfolio_2025/toolkit-login'      
           }
       };
     try {
            alert("You updated your password, so you will automatically be logged out. Be sure to remember your password!");
           await postUpdate(options);
           await logoutUserJava();
       } catch (error) {
           console.error('Error updating password:', error.message);
       }
   }
}
// Function to change Name
window.changeName = async function(name) {
   if (name) {
       const URL = javaURI + "/api/person/update";
       const options = {
           URL,
           body: { name },
           callback: () => {
               console.log('Name updated successfully!');
               window.updateNameField(name);
           }
       };
       try {
           await postUpdate(options);
        } catch (error) {
           console.error('Error updating Name:', error.message);
       }
   }
}
window.changeStudentId = async function(sid) {
   if (sid) {
       alert('Student ID set to' + sid);
       const URL = javaURI + "/api/person/update";
       const options = {
           URL,
           body: { sid: parseInt(sid, 10) }, // Use the correct property name
           callback: () => {
               console.log('Student ID updated successfully!');
               window.updateStudentIdField(sid);
               alert('Student ID updated successfully!');
           }
       };
       try {
           await postUpdate(options);
       } catch (error) {
           console.error('Error updating Student ID:', error.message);
       }
   }
}
// Event listener to trigger updateEmail function when Email field is changed
document.getElementById('newEmail').addEventListener('change', function() {
    const email = this.value;
    window.changeEmail(email);
});
// Event listener to trigger updateUid function when UID field is changed
document.getElementById('newUid').addEventListener('change', function() {
    const uid = this.value;
    window.changeUid(uid);
});
// Event listener to trigger updateName function when Name field is changed
document.getElementById('newName').addEventListener('change', function() {
    const name = this.value;
    window.changeName(name);
});
// Event listener to trigger updatePassword function when Password field is changed
document.getElementById('newPassword').addEventListener('change', function() {
    const password = this.value;
    window.changePassword(password);
});
// Event listener to trigger updateStudentId function when Student ID field is changed
document.getElementById('newStudentId').addEventListener('change', function() {
    const sid = this.value;
    window.changeStudentId(sid);
});
window.fetchKasmServerNeeded = async function() {
 const URL = javaURI + "/api/person/get"; // Adjusted endpoint
 try {
     const response = await fetch(URL, fetchOptions);
     if (!response.ok) {
         throw new Error(`Failed to fetch kasm_server_needed: ${response.status}`);
     }
     const userData = await response.json();
     const kasmServerNeeded = userData.kasmServerNeeded
     // Update checkbox state based on fetched value
     const checkbox = document.getElementById('kasmServerNeeded');
     checkbox.checked = kasmServerNeeded;
 } catch (error) {
     console.error('Error fetching kasm_server_needed:', error.message);
     // Handle error display or fallback mechanism
 }
};
// Function to toggle kasm_server_needed attribute on checkbox change
window.toggleKasmServerNeeded = async function() {
   const checkbox = document.getElementById('kasmServerNeeded');
   const newKasmServerNeeded = checkbox.checked;
   const URL = javaURI + "/api/person/update"; // Adjusted endpoint
   const options = {
       URL,
       body: { kasmServerNeeded: newKasmServerNeeded },
       callback: () => {
           console.log('Kasm Server Needed updated successfully!');
       }
   };
   try {
       await postUpdate(options);
   } catch (error) {
       console.error('Error updating kasm_server_needed:', error.message);
   }
}
   window.fetchEmail = async function() {
    const URL = javaURI + "/api/person/get"; // Adjusted endpoint
    try {
        const response = await fetch(URL, fetchOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch UID: ${response.status}`);
        }
        const data = await response.json();
        return data.email;
    } catch (error) {
        console.error('Error fetching UID:', error.message);
        return null;
    }
};
// Function to fetch Name from backend
window.fetchName = async function() {
    const URL = javaURI + "/api/person/get"; // Adjusted endpoint
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
window.fetchUid = async function() {
    const URL = javaURI + "/api/person/get"; // Adjusted endpoint
    try {
        const response = await fetch(URL, fetchOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch Name: ${response.status}`);
        }
        const data = await response.json();
        return data.uid;
    } catch (error) {
        console.error('Error fetching Name:', error.message);
        return null;
    }
};
// Function to fetch Student ID from backend
window.fetchStudentId = async function() {
    const URL = javaURI + "/api/person/get"; // Adjusted endpoint
    try {
        const response = await fetch(URL, fetchOptions);
        if (!response.ok) {
            throw new Error(`Failed to fetch Student ID: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Student ID:', data.sid);
        return data.sid;
    } catch (error) {
        console.error('Error fetching Student ID:', error.message);
        return null;
    }
};
// Function to set placeholders for email and Name
window.setPlaceholders = async function() {
    const emailInput = document.getElementById('newEmail');
    const nameInput = document.getElementById('newName');
    const uidInput = document.getElementById('newUid');
    const studentIdInput = document.getElementById('newStudentId');
    try {
        const email = await window.fetchEmail();
        const name = await window.fetchName();
        const uid = await window.fetchUid();
        const sid = await window.fetchStudentId();
        if (uid !== null) {
            uidInput.placeholder = uid;
        }
        if (email !== null) {
            emailInput.placeholder = email;
        }
        if (name !== null) {
            nameInput.placeholder = name;
        }
        if (sid !== null) {
            studentIdInput.placeholder = sid;
        }
    } catch (error) {
        console.error('Error setting placeholders:', error.message);
    }
};
// Call fetchPredefinedSections and initializeProfileSetup when DOM content is loaded
document.addEventListener('DOMContentLoaded', async function () {
    try {
        await fetchUserProfile(); // Fetch user profile data
        await fetchKasmServerNeeded();
        await setPlaceholders();
    } catch (error) {
        console.error('Initialization error:', error.message);
        // Handle initialization error gracefully
    }
});
