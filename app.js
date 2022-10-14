var color = ["audi", "toyota", "lexus", "porsche", "bmw"]
function carpark(string, array){
    for(let i = 0; i < array.length; i ++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
    }  
}
console.log(carpark[3]) 






















// var color = ["blue", "black", "pink", "aqua"]
// function colorpick(string, array){
//     for(let i = 0; i < array.length; i++){
//         if(string == array[i]){
//             return console.log(array[i], 'найден');
//         }
//     }  
// }
// console.log(colorpick[3]) 