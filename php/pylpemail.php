<?php

  // diagnostic email:  use my own
  if ($_REQUEST["from"] == "") { print "invalid 'Email'\n"; exit; }
  $to = "support@sunnylam.ca";
  $from = "notify@" . $_SERVER["SERVER_NAME"];

  $body = "Sunny Lam,\n\nThe following request was just submitted:\n\n";
  $body .= "----------------------------------------------------\n";
  $body .= "Name: " . $_REQUEST["name"] . "\n";
  $body .= "Email: " . $_REQUEST["email"] . "\n";
  $body .= "Phone: " . $_REQUEST["phone"] . "\n";
  $body .= "Subject: " . $_REQUEST["subject"] . "\n";
  if ($_REQUEST["message"]) {
    $body .= $_REQUEST["message"] . "\n";
  }
  $body .= "----------------------------------------------------\n";

  mail($to,"[Sunny] Message from Golem Capricious Theme Form",$body,"From:$from");

?>

<html>
<head>
  <title>Request Submitted!</title>
  <meta http-equiv="refresh" content="10;URL='index.html'">
</head>
<body>
  <h1>Request Submitted!</h1>
  
  <p>Someone will contact you shortly.</p>

  <p>You will be redirected back to the previous page in 10 seconds.</p>


  
  
</body>
</html>