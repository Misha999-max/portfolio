<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru','/language/') ;
$mail->IsHTML(true);


$mail->addAddress('mihailkalacev9@gmail.com');

// тема письма

$mail-> Subject = 'Привет, это письмо из Portfolio';

// тело письма
$body = '<h1>Привет это из формы<h1>';
$body.='<p><strong>Name:</strong>'. $_POST['name'] . '</p>';
$body.='<p><strong>Email:</strong>'. $_POST['email'] . '</p>';
$body.='<p><strong>message:</strong>'. $_POST['msg'] . '</p>';

$mail->Body = $body;


// отправка

if(!$mail->send()){
  $massege = 'error';
}else{
  $massege = 'all good';
}

$response = ['massege' => $massege];

header('Content-type: application/json');
echo json_encode($response);
