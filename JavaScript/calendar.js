var titleAry=['일', '월', '화', '수', '목', '금', '토'];

document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<titleAry.length; i++){
    document.write('<th>'+titleAry[i]+'</th>');
}
document.write('</tr>');


// for(var i=0; i<5;i++){
//     document.write('<tr>');
//     for(var j=0; j<7; j++){
//         var num=((7*i) + j);
//         // if(j==0){
//         //     document.write('<td style="background-color:red;"></td>');
//         //     j++;
//         }
//         if(num%7==0){
//             document.write('<td style="background-color:red;">' + num + '</td>');
//         }else if(num%7==6){
//             document.write('<td style="background-color:aqua">' + num + '</td>');
//         }else{
//             if((num>0)&&(num<31)){
//                 document.write('<td>'+num +'</td>');
//             }else{
//                 document.write('<td></td>');
//             }
//         }
//     }
//     document.write('</tr>');
// }

for(var i=0;i<35; i++){
    if(i==0){
        document.write('<tr><td style="background-color:red;"></td>');
    }
    if(i%7==0)
        document.write('<tr>');
    if((i>0)&&(i<31))
        document.write('<td>'+ i + '</td>');
    else
        document.write('<td></td>');
    if(i%7==6)
        document.write('</tr>');
    
}

////덧씌우는 게 아니라 새로 만드네.

document.write('</table>');