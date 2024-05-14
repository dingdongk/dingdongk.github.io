console.log('HELLO WORLD!');

// khai báo được biến -> let, const
// nên dùng const khi các dữ liệu (giá trị) là kết quả (đến cuối cùng không có sự thay đổi)
// từ khoá var mặc định bỏ
// nguyên thuỷ: string, number, null, undefined
let length = 10.2;
let width = 20.5;

// tính chu vi, diện tích
// CV: (dài + rộng) x 2 snipe
// hợp lý trong trường hợp đã có giá trị và biết công thức
// CT: (d + r) x 2
const area = (length + width) * 2;
console.log(area);