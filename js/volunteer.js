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


let selectedOption = null;

document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        selectedOption = this.parentElement.id;
        alert(`Option "${selectedOption}" selected!`);
    });
});

document.getElementById('submitData').addEventListener('click', function() {
    if (selectedOption) {
        const inputField = document.querySelector(`#${selectedOption} .option-input`);
        const inputValue = inputField.value;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "server.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                alert(xhr.responseText);
            } else {
                alert("Error: Unable to submit data.");
            }
        };
        xhr.onerror = function () {
            alert("Error: Unable to submit data.");
        };
        xhr.send(`selectedOption=${selectedOption}&inputValue=${inputValue}`);
    } else {
        alert('Please select an option before submitting.');
    }
});
