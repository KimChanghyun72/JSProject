function showCal(){

var titleAry=['일', '월', '화', '수', '목', '금', '토'];

document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<titleAry.length; i++){
    document.write('<th>'+titleAry[i]+'</th>');
}
document.write('</tr>');

for(var i=0;i<35; i++){
//     if(i%7==0)
//         document.write('<tr>');
//     if((i>0)&&(i<31))
//         document.write('<td>'+ i + '</td>');
//     else
//         document.write('<td></td>');
//     if(i%7==6)
//         document.write('</tr>');
// }

if(i==0){
    document.write('<tr><td style="background-color:red"></td>');
} else if(i==34){
    document.write('<td style="background-color:aqua"></td></tr>');
} else if(i%7==0){
    document.write('<tr><td style="background-color:red">'+ i + '</td>');
} else if(i%7==6){
    document.write('<td style="background-color:aqua">'+ i +'</td></tr>')
} else if((i>0)&&(i<31)){
    document.write('<td>'+ i + '</td>');
} else{
    document.write('<td></td>');
}
}   
}
////덧씌우는 게 아니라 새로 만드네.

document.write('</table>');