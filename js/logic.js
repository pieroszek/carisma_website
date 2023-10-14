// this is the main js file, im not one for syntactic sugar

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
    const button = document.getElementById("your-button-id"); // Replace "your-button-id" with the actual ID of your button
    const innerDiv = document.getElementById("your-inner-div-id"); // Replace "your-inner-div-id" with the actual ID of your inner div

    let isActive = false; // Variable to track the active state

    button.addEventListener("click", function() {
        isActive = !isActive; // Toggle the state
        alert("This is an alert message.");
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



// for the about us section append

document.getElementById("See_More").addEventListener("click", function() {
    var section = document.getElementById("AboutUsAppend");
    section.classList.toggle("Frame5-More");
});







let scrollPosition = 0;

function disableScroll() {
    // Get the current scroll position
    scrollPosition = window.scrollY;

    // Add styles to body to fix it in place
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollPosition}px`;
}

function enableScroll() {
    // Remove styles to revert to original state
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    
    // Scroll to the previous position
    window.scrollTo(0, scrollPosition);
}



  
// Get the dialog element and the button to close it
const myModal = document.getElementById('Modal');
const closeModalButton = document.getElementById('closeModal');

// Show the modal
function showModal() {
    myModal.showModal();
    disableScroll();
    document.body.classList.add('modal-open');

}

// Close the modal
function closeModal() {
    myModal.close();
    enableScroll();
    document.body.classList.remove('modal-open');

}

// Add an event listener to the close button
closeModalButton.addEventListener('click', closeModal);

openModalButton.addEventListener('click', showModal);


// 
// 
//   


document.getElementById('Store').addEventListener('click', function() {
    document.getElementById('Frame2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Volunteer').addEventListener('click', function() {
    document.getElementById('Frame3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Donate').addEventListener('click', function() {
    document.getElementById('Frame4').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('About').addEventListener('click', function() {
    document.getElementById('Frame5').scrollIntoView({ behavior: 'smooth' });
});


// vol button on landing page
document.getElementById('Landing_Sign_Up').addEventListener('click', function() {
    document.getElementById('Frame3').scrollIntoView({ behavior: 'smooth' });
});
