<?php
// phpinfo();

// error_reporting(E_ALL);
// ini_set('display_errors', 'on');


require 'lib/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;

print_r($_GET);

// echo "Vabalabadubdub";
// var_dump ($mail);
$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'justasdambrauskasg@gmail.com';                 // SMTP username
$mail->Password = '';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('Putin@fsb.ru', 'Mailer');
$mail->addAddress('justasdambrauskasg@gmail.com', 'Justas');     // Add a recipient
$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('info@example.com', 'Whut');
$mail->addCC('cc@cc.com');
$mail->addBCC('bcc@cc.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'rush b';
$mail->Body    = '<table> \
<th> Buy ak for rush </th> \
<tr> \
<td>rush</td> \
<td>rush b</td> \
<td>rush b s*ka</td> \
</tr> \
</table> <b>Putin</b>';
$mail->AltBody = 'How to rush';

if(!$mail->send()) {
    echo 'You Efd up.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Mail sent';
}

?>