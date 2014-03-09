<?php


if(isset($_REQUEST["isvalid"])){
    
    $youremail = "camillelacan1@gmail.com";
    $usersemail = $_POST["usersemail"];
    $usersname = $_POST["usersname"];
    $userscomment = $_POST["userscomment"];
    $usersubject = 'Nouveau Message - Site du Yellowstone';
    
    
    $to      = $youremail;
    $subject = 'Contact Yellowstone';
    $message = $usersname . " vous a contacte : " . "\r\n" . "\r\n" . $userscomment;
    $headers = 'DE: ' . $usersemail . "\r\n" . 'Repondre a: ' . $usersemail . "\r\n";
    
    if(mail($to, $subject, $message, $headers)){
        echo "success";
    } else {
        echo "serverdown";
    }
    
} else {
    
    echo "failed";
    
}
