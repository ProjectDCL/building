$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        var dataform = $(this).serialize();
        $.ajax({
            url: "js/form.php",
            data: dataform,
            type: "POST"
        }).done(function(msg){
            //Что то выполняет при получении ответа от сервер
            var result = $.parseJSON(msg);
            if(!result.error){
                //С сервера все окей. Отображаем окно что все окей.

            alert('Спасибо! Мы скоро с Вами свяжемся.');

            }else{
                alert(result.error);
            }
        })
    });
});