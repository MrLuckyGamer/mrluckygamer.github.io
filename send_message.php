<!--/////////////////////////////////////////////////////////////////////////////////////////////////

    Copyright (c) 2020 - 2024 - Lucky :: Special for LuckyDev.
    https://luckydev.xyz/
    
    Title: Personal Development Website for use by Lucky
    Format: HTML5 + Bootstrap v3.3.7
    
    This HTML & PHP Codes-work is licensed under:
    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
    https://creativecommons.org/licenses/by-nc-sa/4.0/

/////////////////////////////////////////////////////////////////////////////////////////////////-->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $to = "contactluckydevelopment@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, something went wrong and we couldn't send your message.";
    }
}
?>
