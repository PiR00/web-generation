<?php
  header('Content-Type: application/json');

	$mail = $_POST['mail'];
	$msg = $_POST['msg'];
	$type = $_POST['type'];

	if($type == "contact"){
		mail('contact@web-generation.fr', 'Contact', $msg);
	}else{
		mail('contact@web-generation.fr', 'demande de devis', $msg);
	}
	echo json_encode('success');
?>
