import {fetchOptions } from './config.js';



// Update User Data with "Put"
export function putUpdate(options) {
    // Modify the options to use the PUT method and include the request body.
    const requestOptions = {
        ...fetchOptions, // This will copy all properties from options
        method: 'PUT', // Override the method property
        cache: options.cache, // Set the cache property
        body: JSON.stringify(options.body)
    };

    // Clear the message area

    // Send PUT request
    fetch(options.URL, requestOptions)
        .then(response => {
            // Trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Call the callback function
            options.callback();
        })
        .catch(error => {
            // Handle network errors
            console.log('Possible CORS or Service Down error: ' + error);
           
        });
}
// Update User Data with "POST" 
export function postUpdate(options) {
    // Modify the options to use the POST method and include the request body.
    const requestOptions = {
        ...fetchOptions, // This will copy all properties from options
        method: 'POST', // Override the method property
        cache: options.cache, // Set the cache property
        body: JSON.stringify(options.body)
    };

    // Clear the message area
    document.getElementById(options.message).textContent = "";

    // Send POST request
    fetch(options.URL, requestOptions)
        .then(response => {
            // Trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Error: ' + response.status;
                console.log(errorMsg);
                document.getElementById(options.message).textContent = errorMsg;
                return;
            }
            // Success!!!
            // Call the callback function
            options.callback();
        })
        .catch(error => {
            // Handle network errors
            console.log('Possible CORS or Service Down error: ' + error);
           
        });
}

export function deleteData(options)  {
    // Modify the options to use the DELETE method and include the request body.
    const requestOptions = {
        ...fetchOptions, // This will copy all properties from options
        method: 'DELETE', // Override the method property
        cache: options.cache, // Set the cache property
        body: JSON.stringify(options.body) // Include the request body
    };

    // Clear the message area

    // Send DELETE request
    fetch(options.URL, requestOptions)
        .then(response => {
            // Trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Call the callback function
            options.callback();
        })
        .catch(error => {
            // Handle network errors
            console.log('Possible CORS or Service Down error: ' + error);
            
        });
}

// session
// asynchronous session response
//session call api----?
// then--> javascript promise
// data loaded
// screen establishes 5 different sessions
// talk about play
// iteration style ----> little pieces
// Your teacher likes to iterate -->