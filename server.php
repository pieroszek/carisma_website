<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $selectedOption = $_POST["selectedOption"];
    $inputValue = $_POST["inputValue"];

    // Here, you can send an email using PHP's mail() function
    // Make sure to replace the placeholders below with actual email addresses
    $to = "max@altramanera.app";
    $subject = "Data from Modal";
    $message = "Selected Option: $selectedOption\nInput Value: $inputValue";
    $headers = "From: webmaster@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Data submitted successfully!";
    } else {
        echo "Error sending email. Please try again later.";
    }
} else {
    echo "Invalid request.";
}

?>
