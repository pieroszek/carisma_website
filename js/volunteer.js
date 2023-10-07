let selectedOption = null;
let inputData = {};

// Event listeners for option buttons
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        selectedOption = this.parentElement.id;
        alert(`Option "${selectedOption}" selected!`);
    });
});

// Event listener for the "Submit Data" button
document.getElementById('submitData').addEventListener('click', function() {
    if (selectedOption) {
        const inputField = document.querySelector(`#${selectedOption} .option-input`);
        const inputValue = inputField.value;
        inputData[selectedOption] = inputValue;
        alert(`Data for Option "${selectedOption}": ${inputValue}`);
    } else {
        alert('Please select an option before submitting.');
    }
});
