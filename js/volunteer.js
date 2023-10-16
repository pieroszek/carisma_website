




// document.addEventListener("DOMContentLoaded", function() {
//     const submitButton = document.getElementById("submitButton");
//     submitButton.addEventListener("click", function() {
//         const userInput = document.getElementById("Name").value;
//         console.log("User Input:", userInput); // Check what is logged in the console
//         sendDataToPHP(userInput);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function() {
        const userInput = {
            name: document.getElementById("Name").value,
            surname: document.getElementById("Surname").value,
            phone: document.getElementById("Phone").value
            // Add more properties as needed
        };
        console.log("User Input:", userInput); // Check what is logged in the console
        sendDataToPHP(userInput);
    });
});




// function sendDataToPHP(userInput) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "server.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 400) {
//             const response = JSON.parse(xhr.responseText);
//             console.log(response.message); // This will log the message from PHP
//         } else {
//             console.error("Error sending data.");
//         }
//     };

//     xhr.onerror = function () {
//         console.error("Network error occurred.");
//     };

//     xhr.send("userInput=" + encodeURIComponent(userInput));
// }


function sendDataToPHP(userInput) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            const response = JSON.parse(xhr.responseText);
            console.log(response); // This will log the message from PHP
        } else {
            console.error("Error sending data.");
        }
    };

    xhr.onerror = function () {
        console.error("Network error occurred.");
    };

    xhr.send(JSON.stringify(userInput));
}