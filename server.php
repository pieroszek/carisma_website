<?php

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $selectedOption = $_POST["selectedOption"];
//     $inputValue = $_POST["inputValue"];

//     // Here, you can send an email using PHP's mail() function
//     // Make sure to replace the placeholders below with actual email addresses
//     $to = "m4ksyn@gmail.com";
//     $subject = "Data from Modal";
//     $message = "Selected Option: $selectedOption\nInput Value: $inputValue";
//     $headers = "From: webmaster@example.com";

//     if (mail($to, $subject, $message, $headers)) {
//         echo "Data submitted successfully!";
//     } else {
//         echo "Error sending email. Please try again later.";
//     }
// } else {
//     echo "Invalid request.";
// }



// if (mail($to, $subject, $message, $headers)) {
//     echo "Data submitted successfully!";
// } else {
//     echo "Error sending email. Please try again later. Error: " . error_get_last()['message'];
// }

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $clickedButtonId = $_POST['buttonClicked'];
//     // Now you have the ID of the clicked button, you can process it further.
//     // For example, you can save it to a database, perform some actions, etc.
//     // Then, you can send a response back to the JavaScript if needed.
//     echo json_encode(['message' => 'Button clicked successfully']);
// }
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $button1State = $_POST['button1State'];
//     echo json_encode(['button1State' => $button1State]);
// }
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $button1State = $_POST['button1State'];
    echo json_encode(['button1State' => $button1State]);
}

?>
