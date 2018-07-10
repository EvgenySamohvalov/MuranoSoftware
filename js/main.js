//main.js

$(document).ready (function() {
    $(".city").change( function() {
        $.ajax ({
            url: ('http://api.openweathermap.org/data/2.5/weather?q='+$('#city').val())+'&units=metric&appid=8f84c6384082a9d113b368606382d436',
            dataType: 'json',
            type: 'get',
            cache: false,
            error: function (xhr, ajaxOptions, thrownError) {
                console.log('Статус: ' + xhr.status + ' / ' + 'Ошибка: ' + thrownError)
            },
            success: function(data) {
                if(data == "Fail") {
                    alert("Сервер погоды не доступен!")
                }else{
                    let tem = (data.main.temp),
                    hum = (data.main.humidity),
                    windSpeed = (data.wind.speed);
                    $("#show-weather").text('T ' + tem + '°C, ' + 'Влажность ' + hum + '%, ' + 'Скорость ветра ' + windSpeed + 'м.с.');
                }
            }
        });
    });
});