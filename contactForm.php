<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'graceheven.herokuapp.com';

    $email_subject = "New form Submission";

    $email_body = "User Name': $name.\n",
                    "User Email: $visitor_email': $visitor.\n";

    $to = "bellooladepo@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply to: $visitor_email \r\n";
    mail($to, $email_subject, $email_body, $headers);

    headers("Location: index.html");

    ?>