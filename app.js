var cars = ["audi", "toyota", "lexus", "porsche", "bmw"]
function carspark(string, array){
    for(let i = 0; i < array.length; i ++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
    }  
}
console.log(carspark[3]) 