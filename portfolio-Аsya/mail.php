<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['email'];
$message= $_POST['Messages'];
$to = "bebodesi@ruso.superhosting.bg";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@bebodesigns.eu" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>