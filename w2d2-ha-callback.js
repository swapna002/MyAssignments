// Global variable
let browser = "Chrome";

// Function that accepts a cb
function checkBrowserVersion(cb) {

    // Simulate a delay of 2 seconds
    setTimeout(function () {
        cb(browser); // Pass the browser value to the callback
    }, 2000);
}

// Callback function
function displayBrowserVersion(browserName) {
    console.log("Browser Version:", browserName);
}

// Function call
checkBrowserVersion(displayBrowserVersion);