<?php 

	$first = $_POST['firstname'];
	$last = $_POST['lastname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$comment = $_POST['comment'];
	$date = $_POST['data'];

	$mailmessage = 'Vardas : '.$first. "\r\n"
	.'Pavardė : ' .$last. "\r\n"
	.'Telefonas : ' .$phone. "\r\n"
	.'Komentaras : ' .$comment. "\r\n"
	.'Adresas : ' .$email. "\r\n"
	.'Data : ' .$date. "\r\n";
	
	$to = 'info@zaliojivirtuve.lt';
	$subject = 'Regitracija i pamokeles';
	$headers = 'From: '.$email;

	$send = mail($to, $subject, $mailmessage, $headers);
	

	if($send) {	
		
		header('Location:index.html');

	} 

	else {
		echo "Operacija nepavyko...";
	 	header('Location:index.html');
	} 

 ?>