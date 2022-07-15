// Số nguyên : 1 2 3 999 33 4444 
// số thập phân : 3,4 4,8  - 3.4 ,6.5
console.log(5+7);
console.log(typeof 10);
const number1 = "10";
const number2 = "10.5";
console.log(parseInt(number1));// chuyển đổi chuỗi thành số nguyên
console.log(parseFloat(number2));// chuyển dổi chuỗi thành số thực
const number3 = -10;
// math.abs(value)  Chuyển số âm thành số dương 
console.log(Math.abs(number3));
// math.floor(value) làm tròn xuống ví dụ như 3.4 - 3
console.log(Math.floor(4.3));
// math.ceil(value) - làm tròn lên : 4.3 - 5
console.log(Math.ceil(4.3));
// Math.round(value) - làm tròn gần nhất 
console.log(Math.round(4.3)); // 4.5 - 5 , dưới 4.5 - 4
// toFixed(number) ví dụ : 0.3333333 - 0.3
// toFixed(2)
console.log( parseFloat((1/3).toFixed(2)));
// Math.random()// chạy từ 0-1
console.log(Math.ceil (Math.random()*10));
// Math.max(1,3,-5,400); - trả ra con số lớn nhất
console.log(`Max : ${Math.max(1,2,3)}`)
// Math.min(1,3,-5,400); - trả ra con số bé nhất
console.log(`Min : ${Math.min(1,2,3)}`)
// Math.pow(number1,number2); Math.pow(3,2)- 3^2 - 9
console.log(`mũ : ${Math.pow(3,5)}`);

console.log(isNaN("this is a String")); // true 
console.log(isNaN("12345")); // -> isNan(12345) ->false


// Undefined -> khai báo nhưng chưa gán giá trị 
let a; 
console.log(a); // undefined
let b;
b=100;
console.log(b)
// Null -> notting
let d = null;
console.log(d);
// Boolean -> true or false
// falsy values vs truthy values
// falsy values : "",0,false,undefined,null
// truthy value:"abc",1,true,100,1000


