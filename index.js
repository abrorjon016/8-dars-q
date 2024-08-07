// 1-misol
// let arr = ['salom', 'xayr'];
// function sum(arr) {
//     let num = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > num.length) {
//             num = arr[i];
//         }
//     }

//     return num;
// }
// let res = sum(arr)
// console.log(res);

// 3-misol
// let arr = ['salom', 'nima gaplar'];
// function toUpper(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toUpperCase());
//     }
//     return newArr;
// }
// let res = toUpper(arr);
// console.log(res);

// 5-misol
// let arr = [1, 2, 5, 8, 4, 3];
// function sum(arr) {
//     let newArr = arr.slice();
//     newArr.sort();
//     return newArr;
// }
// let res = sum(arr);
// console.log(res);

// 10-misol
// let arr = [1, 2, 3, -4, -5];
// function num(arr) {
//     let new1 = [];
//     let new2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             new1.push(arr[i]);
//         } else {
//             new2.push(arr[i]);
//         }
//     }
//     return {
//         new1,
//         new2
//     };
// }
// let res = num(arr);
// console.log(res);

// 12-misol
// let arr = [1, 2, 3, 4, 5];
// function sum(arr) {
//     return arr.map(function(v) {
//         return String(v);
//     });
// }
// let res = sum(arr);
// console.log(res);

// 14-misol

// let arr = [1, 2, 3, 4, 5];
// let res = arr.filter(function(v) {
//     return v % 2 == 1
// })
// console.log(res);

// 18-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr, num) {
//     return arr.map(function(v) {
//         return (v + num).toString();
//     });
// }
// let res = sum(arr, 3);
// console.log(res);

// 20-misol

// let arr = ['', 2, 3, 4, '', '']
// function sum(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == ""){
//             count++;
//         }
//     }
//     return count;
// }
// let res = sum(arr);
// console.log(res);

// 24-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr) {
//     let num1 = [];
//     let num2 = [];
//     for (const i of arr) {
//         if(i % 2 === 0){
//             num1.push(i);
//         } else (
//             num2.push(i)
//         )
//     }
//     return {num1, num2}
// }
// let res = sum(arr)
// console.log(res);

// ////////////////////////

// 2-misol

// let arr = ['salom', 'xayr', 'nima'];
// function connect(arr) {
//     let sum = '';
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (i < arr.length - 1) {
//             sum += ' ';
//         }
//     }
//     return sum;
// }
// let res = connect(arr);
// console.log(res);

// 4-misol

// let arr = [1, 2, 3, 4, 5];
// function max(arr) {
//     let sum = 1;
//     for (const i of arr) {
//         sum *= i;
//     }
//     return sum;
// }
// let res = max(arr);
// console.log(res);

// 6-misol

// let arr = [1, 2, 3, 4, 5]
// function revers(arr) {
//     let newArr = arr.slice();
//     newArr.reverse();

//     return newArr;
// }
// let res = revers(arr);
// console.log(res);

// 9-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr) {
//     let sum = 0;
//     let num = [];
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     num.push(sum)
//     return num;
// }
// let res = sum(arr);
// console.log(res);

// 11-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr, n) {
//     let newArr = [];
//     for (let i = 0; i < n; i++) {
//         newArr = newArr.concat(arr);
//     }
//     return newArr;
// }
// let res = sum(arr, 2);
// console.log(res);

// 13-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr) {
//     let num = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         num.push(arr[i]);
//     }
//     return num;
// }
// let res = sum(arr);
// console.log(res);

// 16-misol

// let arr = [1, 2, 3, 4, 5];
// function sum(arr) {
//     let num = [];
//     for (let i = 0; i < arr.length; i++) {
//         num.push(arr[i], arr[i]);
//     }
//     return num;
// }
// let res = sum(arr);
// console.log(res);

// 23-misol

// let arr = [1, 2, -3, -4, 5];
// function sum(arr) {
//     return arr.filter(n => n <= 0);
// }
// let res = sum(arr);
// console.log(res);
