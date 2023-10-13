// let selectedOption = null;
// let inputData = {};

// // Event listeners for option buttons
// document.querySelectorAll('.option-button').forEach(button => {
//     button.addEventListener('click', function() {
//         selectedOption = this.parentElement.id;
//         alert(`Option "${selectedOption}" selected!`);
//     });
// });

// // Event listener for the "Submit Data" button
// document.getElementById('submitData').addEventListener('click', function() {
//     if (selectedOption) {
//         const inputField = document.querySelector(`#${selectedOption} .option-input`);
//         const inputValue = inputField.value;
//         inputData[selectedOption] = inputValue;
//         alert(`Data for Option "${selectedOption}": ${inputValue}`);
//     } else {
//         alert('Please select an option before submitting.');
//     }
// });

// document.getElementById('submitData').addEventListener('click', function() {
//     if (selectedOption) {
//         const inputField = document.querySelector(`#${selectedOption} .option-input`);
//         const inputValue = inputField.value;

//         // Send the data to the PHP file
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "server.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 400) {
//                 alert(xhr.responseText);
//             } else {
//                 alert("Error: Unable to submit data.");
//             }
//         };
//         xhr.onerror = function () {
//             alert("Error: Unable to submit data.");
//         };
//         xhr.send(`selectedOption=${selectedOption}&inputValue=${inputValue}`);
//     } else {
//         alert('Please select an option before submitting.');
//     }
// });

        // document.addEventListener("DOMContentLoaded", function() {
        //     const button1 = document.getElementById("btn-box");
        //     const button2 = document.getElementById("btn-txt");
        //     const submitButton = document.getElementById("submitButton");

        //     let button1State = false; // Variable to track the state of button1

        //     button1.addEventListener("click", function() {
        //         button1State = !button1State; // Toggle the state
        //         button1.classList.toggle("clickedButton");
        //     });

        //     button2.addEventListener("click", function() {
        //         button1State = !button1State; // Toggle the state
        //         button1.classList.toggle("clickedButton");
        //     });

        //     submitButton.addEventListener("click", function() {
        //         // Send button1State to the server
        //         sendToServer(button1State);
        //     });


        //     function sendToServer(clickedButtonId) {
        //         fetch('server.php', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 buttonClicked: clickedButtonId
        //             }),
        //         })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log('Success:', data);
        //             console.log('Response from server:', data); // This line was moved here
        //         })
        //         .catch((error) => {
        //             console.error('Error:', error);
        //         });
        //     }
        //     console.log('Response:', response)

        // });


// let selectedOption = null;

// document.querySelectorAll('.option-button').forEach(button => {
//     button.addEventListener('click', function() {
//         selectedOption = this.parentElement.id;
//         alert(`Option "${selectedOption}" selected!`);
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const buttons = document.querySelectorAll(".clickableButton");

//     buttons.forEach(button => {
//         button.addEventListener("click", function() {
//             buttons.forEach(btn => {
//                 btn.classList.remove("clickedButton");
//             });
//             this.classList.add("clickedButton");

//             // Send information to PHP server
//             const clickedButtonId = this.id;
//             sendToServer(clickedButtonId);
//         });
//     });

//     function sendToServer(clickedButtonId) {
//         // You can use JavaScript's fetch API to send data to the server
//         fetch('server.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 buttonClicked: clickedButtonId
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }
// });

// document.getElementById('submitData').addEventListener('click', function() {
//     if (selectedOption) {
//         const inputField = document.querySelector(`#${selectedOption} .option-input`);
//         const inputValue = inputField.value;

//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "server.php", true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 400) {
//                 alert(xhr.responseText);
//             } else {
//                 alert("Error: Unable to submit data. line 71");
//             }
//         };
//         xhr.onerror = function () {
//             alert("Error: Unable to submit data. line 75");
//         };
//         xhr.send(`selectedOption=${selectedOption}&inputValue=${inputValue}`);
//     } else {
//         alert('Please select an option before submitting.');
//     }
// });
