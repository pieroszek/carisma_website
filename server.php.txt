<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail->SMTPDebug = SMTP::DEBUG_SERVER;


try {
       
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                                           
        $mail->Host       = 'smtp.gmail.com';                    
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'm4ksyn@gmail.com';                 
        $mail->Password   = 'M4xmaxmax';                           
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;        
        $mail->Port       = 587;                                    

        //Recipients
        $mail->setFrom('m4ksyn@gmail.com', 'Sender');
        $mail->addAddress('max@altramanera.app', 'Recipient');     

        // Content
        $mail->isHTML(true);                                 
        $mail->Subject = 'Subject Here';
        $mail->Body    = 'Body of the email here';

        $mail->send();
        echo 'Email has been sent successfully';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }


} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$e->getMessage()}";
}



?>
