<?php

$status = array();
if($_POST['name']==""){
    $status['error']="Поле имя не заполнено.";
}

if($_POST['mail']==""){
    $status['error']="Поле телефон не заполнено.";
}

if($_POST['comment']==""){
    $status['error']="Напишите Ваш комментарий, пожалуйста.";
} 



echo json_encode($status);
?>