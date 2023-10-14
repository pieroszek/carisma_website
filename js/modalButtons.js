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

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("MB1"); // Replace "your-button-id" with the actual ID of your button
    const innerDiv = document.getElementById("BB1"); // Replace "your-inner-div-id" with the actual ID of your inner div

    let isActive = false; // Variable to track the active state

    button.addEventListener("click", function() {
        isActive = !isActive; // Toggle the state
        // alert("This is an alert message.");
        if (isActive) {
            innerDiv.style.backgroundColor = "#808080"; // Set background color when active
        } else {
            innerDiv.style.backgroundColor = "#FFF"; // Set default background color
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("MB2"); // Replace "your-button-id" with the actual ID of your button
    const innerDiv = document.getElementById("BB2"); // Replace "your-inner-div-id" with the actual ID of your inner div

    let isActive = false; // Variable to track the active state

    button.addEventListener("click", function() {
        isActive = !isActive; // Toggle the state
        // alert("This is an alert message.");
        if (isActive) {
            innerDiv.style.backgroundColor = "#808080"; // Set background color when active
        } else {
            innerDiv.style.backgroundColor = "#FFF"; // Set default background color
        }
    });
});


// 


// document.addEventListener("DOMContentLoaded", function() {
//     const buttons = document.querySelectorAll(".content-option-button");

//     buttons.forEach(button => {
//         const innerDiv = button.querySelector(".option-box");
//         let isActive = false;

//         button.addEventListener("click", function() {
//             isActive = !isActive;
//             alert("This is an alert message.");

//             if (isActive) {
//                 innerDiv.style.backgroundColor = "#808080";
//             } else {
//                 innerDiv.style.backgroundColor = "#FFF";
//             }
//         });
//     });
// });

// // 

// document.addEventListener("DOMContentLoaded", function() {
//     const parentElement = document.querySelector(".content-option"); // Replace with the actual parent element that contains all buttons

//     parentElement.addEventListener("click", function(event) {
//         if (event.target.classList.contains("content-option-button")) {
//             const button = event.target;
//             const innerDiv = button.querySelector(".option-box");
//             let isActive = false;

//             isActive = !isActive;

//             if (isActive) {
//                 innerDiv.style.backgroundColor = "#808080";
//             } else {
//                 innerDiv.style.backgroundColor = "#FFF";
//             }
//         }
//     });
// });


// 
