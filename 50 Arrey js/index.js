let arr = [1,2,3,4,5,6];
console.log(arr);
console.log(arr.length);
arr[1] = 8;
console.log(arr);
arr[0] = "M";
console.log(arr);
arr[2] = "Mohd";
console.log(arr);
arr[3] = 0.4;
console.log(arr);
arr[4] = "@";
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

let str = "Mohd";

console.log(typeof(arr));
console.log(typeof(str));

console.log(arr.toString());

console.log(arr.join(" :--> "));

console.log(arr);
arr.pop();
console.log(arr);

arr.push(6);
console.log(arr);


arr.shift();
console.log(arr);

arr.unshift("Z");
console.log(arr);

delete arr[2];

console.log(arr);
console.log(arr[2]);

let arr2 = ["a","b","c","d"];
let arr3 = [];
arr3 = arr3.concat(arr,arr2);
console.log(arr3);

let nums = [9,5,3,2,8,2,0,22,77,99];

console.log(nums);

nums.sort();

console.log(nums);

nums.splice(1,5);

console.log(nums);


nums.splice(1,2,88,100,101);
console.log(nums);

let num2 = [1,2,3,4,5];
console.log(num2);
console.log(num2.slice(2));

