
function positive(numbers){
let total_sum = 0;
for (num of numbers){
if(num > 0){
total_sum= total_sum + num;
}
}
return total_sum;
}
const numbers = [2,-5,10,-3,7];
console.log(positive(numbers));
