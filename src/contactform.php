<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email settings
    $email_from = 'houseandgardening.online';
    $to = "serbanemanuel11@yahoo.com";
    $email_subject = "New Form Submission";

    // Compose email body
    $email_body =   "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "Subject: $subject.\n".
                    "User Message: $message.\n";

    // Set additional headers
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    // Send email
    $success = mail($to, $email_subject, $email_body, $headers);

    if ($success) {
        // Email sent successfully
        header("Location: contact.html");
        exit;
    } else {
        // Email sending failed
        $error_message = error_get_last()['message'] ?? 'Unknown error';
        echo "Failed to send email: $error_message";
    }
} else {
    // Redirect to contact page if accessed directly
    header("Location: contact.html");
    exit;
}
?>
