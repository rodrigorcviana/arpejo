<?php

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = addslashes($_POST['name']);
$phone = addslashes($_POST['phone']);
$email = addslashes($_POST['email']);
$instrument = addslashes($_POST['instrument']);
$mensagem = addslashes($_POST['message']);

$body = "Nome: ".$name."\r\n
  Telefone: ".$phone."\r\n
  Email: ".$email."\r\n
  Instrumento: ".$instrument."\r\n
  Mensagem: ".$mensagem;

if ($instrument === "Não") {
  $subject = "Mensagem do Site";
} else {
  $subject = "Agendamento Aula Experimental";
}

$mail = new PHPMailer(true);

try {
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'rodrigorcviana@gmail.com';
  $mail->Password = 'senha';
  $mail->Port=587;

  $mail->setFrom('rodrigorcviana@gmail.com');
  $mail->addAddress('rodrigorcviana@gmail.com');

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = $body;
  $mail->AltBody = "Chegou o email";

  if($mail->send()){
    echo 'Email enviado com sucesso';
  } else {
    echo 'Email não enviado';
  }

} catch (Exception $e) {
  echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}
