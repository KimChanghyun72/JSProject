var jsonData=[{"id":1,"first_name":"Daisey","last_name":"Ragsdale","email":"dragsdale0@loc.gov","gender":"Female"},
{"id":2,"first_name":"Teressa","last_name":"Mathy","email":"tmathy1@elegantthemes.com","gender":"Female"},
{"id":3,"first_name":"Courtnay","last_name":"Thurber","email":"cthurber2@feedburner.com","gender":"Male"},
{"id":4,"first_name":"Kit","last_name":"Jeannaud","email":"kjeannaud3@bizjournals.com","gender":"Female"},
{"id":5,"first_name":"Kalindi","last_name":"Lowth","email":"klowth4@epa.gov","gender":"Female"},
{"id":6,"first_name":"Emmanuel","last_name":"Speeding","email":"espeeding5@twitter.com","gender":"Male"},
{"id":7,"first_name":"Doy","last_name":"Lukacs","email":"dlukacs6@eepurl.com","gender":"Male"},
{"id":8,"first_name":"Germain","last_name":"Nutley","email":"gnutley7@myspace.com","gender":"Male"},
{"id":9,"first_name":"Vannie","last_name":"Summerside","email":"vsummerside8@cmu.edu","gender":"Female"},
{"id":10,"first_name":"Gar","last_name":"Balchin","email":"gbalchin9@shareasale.com","gender":"Male"},
{"id":11,"first_name":"Darrick","last_name":"Whitsey","email":"dwhitseya@hhs.gov","gender":"Male"},
{"id":12,"first_name":"Augustus","last_name":"Audley","email":"aaudleyb@apache.org","gender":"Male"},
{"id":13,"first_name":"Alfredo","last_name":"Brinded","email":"abrindedc@tmall.com","gender":"Male"},
{"id":14,"first_name":"Fin","last_name":"Henker","email":"fhenkerd@hostgator.com","gender":"Male"},
{"id":15,"first_name":"Gertrud","last_name":"Rozzell","email":"grozzelle@huffingtonpost.com","gender":"Female"}];

var titles = ['id', 'first_name','last_name','gender'];

$(document).ready(function(){
    var $table = $('<table />').attr('border','1');
    var $tr = $('<tr />');
    titles.forEach(function(o){
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);

    //데이터 영역
    jsonData.forEach(function(o){
        var $tr = $('<tr />').mouseenter(mouseenterFunc)
                             .mouseout(mouseoutFunc);
        titles.forEach(function(f){ //왜 titles 대신 o를 쓰면 안 되지?
            $tr.append($('<td />').text(o[f]));
        });
        $tr.append($('<button />').text('Click').click(mouseClickFunc));
        $table.append($tr);
    });
    $('#show').append($table);
});

function mouseenterFunc(){
    $(this).css('background','yellow');
}
function mouseoutFunc(){
    $(this).css('background','');
}
function mouseClickFunc(){
    $(this).remove();
}