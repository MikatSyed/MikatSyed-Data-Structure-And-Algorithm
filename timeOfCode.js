//Time Complexity
// function sumOfAllNum(num){
//     let total = 0;
//     for(let i = 0; i <=num; i++){
//         total += i
//     }
//     return total;
// }
// let start = performance.now();
// console.log(sumOfAllNum(500));
// let end = performance.now();
// console.log(`your execution time : ${(end - start) / 1000 }`);

// function sumOfAll(num){
//    return num * (num+1) / 2;
// }
// let time1 = performance.now();
// console.log(sumOfAll(500));
// let time2 = performance.now();
// console.log(`your execution time : ${(time2 - time1) / 1000 }`);



// function multiArray(n){
//     for(let i = 0; i <=n; i++){ //O(n)
//         for(let j = 0; j <=n; j++){
//             console.log(i,j); //O(n)
//     }
//     }
// }
// multiArray(2)//O(n2)

// function min5Log(n){
//     for(let i = 0; i <= Math.max(5,n); i++){
//         console.log(i); //O(n)
//     }
// }
// min5Log(7)

// function max5Log(n){
//     for(let i = 0; i <= Math.min(5,n); i++){
//         console.log(i);//O(1) 
//     }
// }
// max5Log(7) //O(1) 

//Space Complexity
// function sum(arr){
//     let total = 0;
//  for(let i=0; i < arr.length; i++){

//      total += arr[i];
   
//  }
//  return total;
// }
// console.log(sum([2,5,6,3,7])); //O(1)

// function doubleArr(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2)
//     }
//     return newArr;
// }

// console.log(doubleArr([2,3,5,6,7,8])); //O(n)
