// String (Chuỗi)
"Hello";
"Bình";
`I Am Bình`
// double quotes,Single quote,backticks(template literal)


const name = "BinhNX"
// console.log(name);
// console.log(typeof name);// typeof check kiểu dữ liệu
const newStr = "My name BINHNX";
const newStr2 = "My name is" + name;
// console.log(newStr);
// ${varilable}
const newStr3 = `${name}`;
console.log(newStr3);
// .length (check độ dài) 
// index là vị trí của từng kí tự trong chuỗi,(bao gồm cả khoảng trắng)
console.log(newStr3.length);

/* split tách chữ */
const mystr = "         Binh Fullstack            "
console.log(mystr.split(" ")) // ['Binh', 'Fullstack']
console.log(mystr.split("")) // ['B', 'i', 'n', 'h', ' ', 'f', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k']
console.log(mystr.split("/"))// ['Binh Fullstack']
/** toLowerCase chuyển thành chữ thường */
console.log(mystr.toLowerCase()) // binh fullstack
/** toUpperCase : Chuyển thành viết hoa  */
console.log(mystr.toUpperCase()) // BINH FULLSTACK
/** startsWith : Chữ có bắt đầu bằng từ ... không (JS thì có phân biệt chữ hoa và chữ thường) */
console.log(mystr.startsWith("Binh")) // true
/** startsWith : Chữ có kết thúc bằng từ ..  không (JS thì có phân biệt chữ hoa và chữ thường) */
console.log(mystr.endsWith("fullstack")) // true
/** includes : Trong chuỗi có từ ck không nếu có thì sẽ trả về là true còn không thì false */
console.log(mystr.includes("ck")) // true
console.log(mystr.includes("abc")) // false
/** indexOf: Tìm kiếm sự xuất hiện đầu tiền của l  */
console.log(mystr.indexOf("l"))
/** lastIndexOf */
/** indexOf: Tìm kiếm sự xuất hiện cuối cùng của l  */
console.log(mystr.lastIndexOf("l"))
/** replace : thay thế  */
console.log(mystr.replace("Binh","Bình"))
/** repeat: lặp laij */
console.log(mystr.repeat(5));
/** slice : cắt chuỗi   */
console.log(mystr.slice(0,5));
console.log(mystr.slice(-3));
/** trim : loại bỏ khoảng trống*/
console.log(mystr.trim());
console.log(mystr.trimStart());
console.log(mystr.trimEnd());
/** Charat : trả vể một kí tự trong 1 chuỗi  */
const myStr2 = "Bình 1102";
console.log(myStr2.charAt(0));
/** substr : lấy ra 1 phần của chuỗi(String)
  - substr(index,length) - index : vị trí. length: số lượng kí tự bạn muốn lấy
 * substring : lấy ra các kí tự của chuỗi 
 */
console.log(myStr2.substr(0,5));
const myStr3 = "    Frontend Developer D   "
// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ 'Developer D' thành chữ 'Bình PRO' sau đó repeat 2 lần


console.log(
  ` Result mystr3 : ${
    myStr3
    .trim()
    .replace("Developer D" ," Bình Pro ")
    .toUpperCase()
    .repeat(2)
  }`
);












