<?php

  // Contact
  $to = 'alison.ingram926@gmail.com';
    $subject = 'Email from school';

  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
       $name    = $_POST['name'];
      $from    = $_POST['email'];
      $message = $_POST['message'];

    if (mail($to, $subject, $message, $from)) {
      $result = array(
        'message' => 'Thanks for the message, I will be in touch soon!',
        'sendstatus' => 1
        );
      echo json_encode($result);
    } else {
      $result = array(
        'message' => 'Sorry, something seems to be wrong. Please, email me directly at alison.ingram926@gmail.com',
        'sendstatus' => 1
        );
      echo json_encode($result);
    }
  }

?>
