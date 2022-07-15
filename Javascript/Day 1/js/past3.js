"4.5"// 4.5 parseFloat
"4"// parseInt
//Number(value)
console.log(Number("4.5"))
console.log(Number("4"));
console.log(Number("hello"));
//NaN là không phải số và là một giá trị
console.log(Number(undefined));//NaN
// Những giá trị chưa xác định sẽ chuyển sang NaN
console.log(Number(null));//0
console.log(Number(false))//0
console.log(Number(""))//0
console.log(Number(NaN))//NaN
// falsy values 
console.log(Number(true))//1
// String(value)
console.log(String(4.5));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));
console.log(String(false));
console.log(String(true));
// Boolean(value) -> true of false
console.log(` Boolean of zero: ${Boolean(0)}`)
console.log(` Boolean of " ": ${Boolean("")}`)
console.log(` Boolean of null: ${Boolean(null)}`)
console.log(` Boolean of undefined: ${Boolean(undefined)}`)
console.log(` Boolean of NaN: ${Boolean(NaN)}`)
console.log(` Boolean of false: ${Boolean(false)}`)

// type coercion: chuyển đổi kiểu dữ liệu
console.log(1+2);//3
console.log(10+10);//20
console.log(10+"10");//1010
console.log("10"+10);//1010
console.log("10"-10);//0
console.log(null+"");//null
console.log(null+undefined);//NaN
console.log(""-1);//-1
console.log(false-true);//-1
console.log(null+10);//10





