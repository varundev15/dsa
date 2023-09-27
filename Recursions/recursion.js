// to add sum of all n numbers
// let sumN = (n)=>{
//     if(n==0){
//         return 0;
//     }else{
//         return n + sumN(n-1);
//     }
// }
// console.log("sum of n numbers :"+sumN(4));


//factorial of n
// let fact = (n)=>{
//     if(n === 0 ){
//       return 1;
//     }else{
//       return n*fact(n-1);
//     }
//  }
//  console.log("factorial of n :"+fact(6));


//fibonacci series
// let fibonacci = (n)=>{
//     if(n === 0 || n === 1 ){
//       return 1;
//     }else{
//       return fibonacci(n-1) + fibonacci(n-2);
//     }
//  }
//  console.log("fibonacci series of n:"+fibonacci(4));


// to mutliply all numbers of an array
// let mulArr = (arr)=>{
//    if(arr.length <= 0){
//      return 0;
//    }else{
//      return arr[arr.length -1] * mulArr(arr.slice(0,arr.length -1))
//    }
// }
// console.log("multiply of all numbers in array :"+mulArr([]));


// t0 create a sequential array btw range numbers 
// let rangedArray = (startNum,endNum)=>{
//    if(endNum < startNum){
//      return [];
//    }else{
//      const numbers = rangedArray(startNum ,endNum -1);
//      numbers.push(endNum);
//      return numbers;
//    }
// }
// console.log("multiply of all numbers in array :"+rangedArray(1,5));


// to check array is sorted 
// let isSortedArray = (arr,n)=>{
//    if(n == 1){
//      return true;
//    }
//    if(arr[n-1] < arr[n-2]) return false;
//    return isSortedArray(arr,n-1)
// }
// console.log("sorted array :"+isSortedArray([1,3,4],3));


//to print numbers till n
// function incOrder(n) {
//     if(n==1){
//         console.log(1)
//     }else{
//         incOrder(n-1);
//         console.log(n)
//     }
// }
// function decOrder(n) {
//     if(n==1){
//         console.log(1)
//     }else{
//         console.log(n);
//         decOrder(n-1);
//     }
// }
// console.log("inc & dec order :"+incOrder(4));
