// this is the main js file, im not one for syntactic sugar




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
