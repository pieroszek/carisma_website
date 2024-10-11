// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelectorAny(".content-option-button");
//     const innerDiv = button.querySelectorAny(".option-box");

//     let isActive = false; // Variable to track the active state

//     button.addEventListener("click", function() {
//         isActive = !isActive; // Toggle the state
//         alert("This is an alert message.");
//         if (isActive) {
//             innerDiv.style.backgroundColor = "#808080"; // Set background color when active
//         } else {
//             innerDiv.style.backgroundColor = "#FFF"; // Set default background color
//         }
//     });
// });


// // Define a global object to hold button states
// const buttonStates = {
//     button1: false,
//     button2: false
// };

// // Function to toggle button state
// function toggleButtonState(buttonId) {
//     buttonStates[buttonId] = !buttonStates[buttonId];
//     console.log(buttonStates);
// }




// document.addEventListener("DOMContentLoaded", function() {
//     const textBox = document.getElementById("SuggestionsBox");

//     textBox.addEventListener("input", function() {
//         const userInput = textBox.value;
//         console.log(userInput);
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.getElementById("MB1"); // Replace "your-button-id" with the actual ID of your button
//     const innerDiv = document.getElementById("BB1"); // Replace "your-inner-div-id" with the actual ID of your inner div

//     let isActive = false; // Variable to track the active state

//     button.addEventListener("click", function() {
//         isActive = !isActive; // Toggle the state
//         // alert("This is an alert message.");
//         if (isActive) {
//             innerDiv.style.backgroundColor = "#808080"; // Set background color when active
//         } else {
//             innerDiv.style.backgroundColor = "#FFF"; // Set default background color
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.getElementById("MB2"); // Replace "your-button-id" with the actual ID of your button
//     const innerDiv = document.getElementById("BB2"); // Replace "your-inner-div-id" with the actual ID of your inner div

//     let isActive = false; // Variable to track the active state

//     button.addEventListener("click", function() {
//         isActive = !isActive; // Toggle the state
//         // alert("This is an alert message.");
//         if (isActive) {
//             innerDiv.style.backgroundColor = "#808080"; // Set background color when active
//         } else {
//             innerDiv.style.backgroundColor = "#FFF"; // Set default background color
//         }
//     });
// });


// // 


// // document.addEventListener("DOMContentLoaded", function() {
// //     const buttons = document.querySelectorAll(".content-option-button");

// //     buttons.forEach(button => {
// //         const innerDiv = button.querySelector(".option-box");
// //         let isActive = false;

// //         button.addEventListener("click", function() {
// //             isActive = !isActive;
// //             alert("This is an alert message.");

// //             if (isActive) {
// //                 innerDiv.style.backgroundColor = "#808080";
// //             } else {
// //                 innerDiv.style.backgroundColor = "#FFF";
// //             }
// //         });
// //     });
// // });

// // // 

// // document.addEventListener("DOMContentLoaded", function() {
// //     const parentElement = document.querySelector(".content-option"); // Replace with the actual parent element that contains all buttons

// //     parentElement.addEventListener("click", function(event) {
// //         if (event.target.classList.contains("content-option-button")) {
// //             const button = event.target;
// //             const innerDiv = button.querySelector(".option-box");
// //             let isActive = false;

// //             isActive = !isActive;

// //             if (isActive) {
// //                 innerDiv.style.backgroundColor = "#808080";
// //             } else {
// //                 innerDiv.style.backgroundColor = "#FFF";
// //             }
// //         }
// //     });
// // });




// // // // document.addEventListener("DOMContentLoaded", function() {
// // // //     const buttons = document.querySelectorAll("button");

// // // //     buttons.forEach(button => {
// // // //         button.addEventListener("click", function() {
// // // //             const buttonId = this.id;
// // // //             toggleButtonState(buttonId);
// // // //         });
// // // //     });

// // // //     const submitButton = document.getElementById("submitButton");

// // // //     submitButton.addEventListener("click", function() {
// // // //         const input1 = document.getElementById("input1").value;
// // // //         const input2 = document.getElementById("input2").value;

// // // //         const dataObject = {
// // // //             input1: input1,
// // // //             input2: input2,
// // // //             buttonStates: buttonStates
// // // //         };

// // // //         sendDataToPHP(dataObject);
// // // //     });
// // // // });


// // // // function sendDataToPHP(data) {
// // // //     // ...
// // // //     // (Rest of the sendDataToPHP function remains the same)
// // // //     // ...
// // // // }

//         // Define an object to store user input
//         const userInput = {};

//         // Function to toggle button state
//         function toggleButtonState(buttonId) {
//             userInput[buttonId] = !userInput[buttonId];
//             console.log(userInput);
//         }

//         // Function to handle form submission
//         function handleSubmit() {
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("email").value;
//             const message = document.getElementById("message").value;

//             userInput.name = name;
//             userInput.email = email;
//             userInput.message = message;

//             sendDataToPHP(userInput);
//         }

//         document.addEventListener("DOMContentLoaded", function() {
//             const buttons = document.querySelectorAll("button");

//             buttons.forEach(button => {
//                 button.addEventListener("click", function() {
//                     const buttonId = this.id;
//                     toggleButtonState(buttonId);
//                 });
//             });

//             const submitButton = document.getElementById("submitButton");
//             submitButton.addEventListener("click", handleSubmit);
//         });

//         function sendDataToPHP(data) {
//             const xhr = new XMLHttpRequest();
//             xhr.open("POST", "send_email.php", true);
//             xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

//             xhr.onload = function () {
//                 if (xhr.status >= 200 && xhr.status < 400) {
//                     console.log("Data sent successfully!");
//                 } else {
//                     console.error("Error sending data.");
//                 }
//             };

//             xhr.onerror = function () {
//                 console.error("Network error occurred.");
//             };

//             xhr.send(JSON.stringify(data));
//         }