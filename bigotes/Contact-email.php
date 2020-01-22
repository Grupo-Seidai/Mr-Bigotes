<?php
	 $name = $_POST['Name'];
	 $from_email = $_POST['Email'];
	 $message = $_POST['msg'];

	 $to_email= 'afmorenosa@unal.edu.co';

	 $email_subject = "Mensaje de Bigotes";
	 
	 $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
	 
	 $headers = "From: $from_email \r\n";

	 @mail($to_mail,$email_subject,$email_body,$headers);
	 
	 ?>	