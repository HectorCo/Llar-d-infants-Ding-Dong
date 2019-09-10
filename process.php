<?php 

$nombre = strip_tags($_POST['name']);
$correo = strip_tags($_POST['mail']);
$comentario = strip_tags($_POST['comment']);

$fecha = time();$fechaFormateada = date("j/n/Y", $fecha);

//Headers del correo electrónico.
$headers =
	'From: ' . $correoFrom . "\r\n". 
	'Reply-To: ' . $correoDestino . "\r\n" . 
	'X-Mailer: PHP/' . phpversion() .
	'MIME-Version: 1.0\r\n'.
    'Content-type: text/html; charset=UTF-8\r\n';
    
//Correo de destino; donde se enviará el correo.
$correoDestino = "hcompanyortega@gmail.com";

//Formateo el asunto del correo
$asunto = "Contacto WEB_$nombre";
//Formateo el cuerpo del correo
$cuerpo = "Enviado por: " . $nombre . ",  a las " . $fechaFormateada . "";
$cuerpo .= "E-mail: " . $correo . "";
$cuerpo .= "Comentario: " . $comentario;

?> 