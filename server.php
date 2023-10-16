<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


// $userInput = json_decode(file_get_contents('php://input'), true);

// $name = $userInput['name'];
// $email = $userInput['email'];
// $message = $userInput['message'];

// // Construct the email message
// $to = 'recipient@example.com';
// $subject = 'Contact Form Submission';
// $body = "Name: $name\n";
// $body .= "Email: $email\n";
// $body .= "Message:\n$message";

// // Send the email
// $headers = "From: $email";
// $mailSent = mail($to, $subject, $body, $headers);

// if ($mailSent) {
//     echo json_encode(["message" => "Email sent successfully"]);
// } else {
//     echo json_encode(["error" => "Error sending email"]);
// }

$inputData = json_decode(file_get_contents('php://input'), true);


if (isset($_POST['Name']) && isset($_POST['Surname']) && isset($_POST['Phone'])) {
    $name = $_POST['Name'];
    $surname = $_POST['Surname'];
    $phone = $_POST['Phone'];

    // Process the data (e.g., send it in an email, save to a database, etc.)

    echo json_encode(["message" => "Received user input: Name=$Name, Surname=$Surname, Phone=$Phone"]);
} else {
    echo json_encode(["error" => "Incomplete user input received."]);
}

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
file_put_contents(__DIR__ . '/input_data.log', print_r($inputData, true), FILE_APPEND);

// file_put_contents('input_data.log', print_r($inputData, true), FILE_APPEND);


// if (isset($_POST['userInput'])) {
//     $userInput = $_POST['userInput'];

//     // Do something with $userInput (e.g., send it in an email)
//     // For now, let's just send it back to JavaScript

//     echo json_encode(["message" => "Received user input: " . $userInput]);
// } else {
//     echo json_encode(["error" => "No user input received."]);
// }

?>
