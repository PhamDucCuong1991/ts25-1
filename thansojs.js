let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ten = prompt("Nhập tên(không dấu)")
let ngaySinh = prompt("Nhập ngày sinh(viết liền nhau)")

ten = ten.toUpperCase();
let tenHienThi = ten.trim();
ten = ten.trim();
removeAccents(ten);

ngaySinh = ngaySinh.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");

let arr = [];
let arr2 = [];//so ngay sinh
let arrTen = []; // so trong Ho va ten
let arrSoCanBang = []; //là dãy số chứa chữ cái đầu tiên Ho Va tên

document.write(" Xin chào: " + tenHienThi + "<br>" + "Ngày sinh: " + ngaySinh + "<br>")

function removeAccents() {
    var dauTiengViet = [
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ", "DĐ", "EÈẺẼÉẸÊỀỂỄẾỆ", "IÌỈĨÍỊ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ", "UÙỦŨÚỤƯỪỬỮỨỰ", "YỲỶỸÝỴ" ];
    for (var i = 0; i < dauTiengViet.length; i++) {

        var re = new RegExp('[' + dauTiengViet[i].substr(1) + ']', 'g');
        var char = dauTiengViet[i][0];

        ten = ten.replace(re, char);
    }
    return ten;
}


function loaiBoSo0(a) {

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            a.splice(i, 1)
        }
    }
}

function daySoHoVaTen() {
    for (let i = 0; i < ten.length; i++) {
        if (ten[i] !== ' ') {
            arr.push(str.indexOf(ten[i]) % 9 + 1);
        }
    }
}

daySoHoVaTen()
document.write(" Dãy số Họ và tên của bạn là: " + "<br>" + arr + "<br>");


let soThieuTrongHoVaTen = [];

function soThieu() {
    for (let i = 1; i < 10; i++) {
        let kiemtra = true;
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                kiemtra = false
                break;
            }
        }
        if (kiemtra === true) {
            soThieuTrongHoVaTen.push(i);
        }
    }
}

soThieu()
document.write(" Số còn thiếu là: " + soThieuTrongHoVaTen + "<br>")

let arrChuCaiDau = [];

function layChuCaiDau(a) {
    arrChuCaiDau.push(a[0])
    for (let i = 0; i < a.length; i++) {
        if (a[i] === ' ') {
            arrChuCaiDau.push(a[i + 1])
        }
    }
}

layChuCaiDau(ten)
document.write("Chữ cái đầu trong họ và tên: " + arrChuCaiDau); //mảng sau khi đã cắt chữ cái đầu rồi(sothu10)

function daySoCanBang() {

    for (let i = 0; i < arrChuCaiDau.length; i++) {

        arrSoCanBang.push(str.indexOf(arrChuCaiDau[i]) % 9 + 1);

    }
}

daySoCanBang()
document.write("(" + arrSoCanBang + ")" + "<br>");

function daySoTen() {
    for (let i = ten.length - 1; i > 0; i--) {
        arrTen.unshift(str.indexOf(ten[i]) % 9 + 1);
        if (ten[i] === ' ') {
            break
        }
    }
}

daySoTen()

loaiBoSo0(arrTen)
document.write(" Chữ số trong Tên của bạn là :" + "<br>" + arrTen + "<br>")


function daySoNgaySinh() {
    let bienphu;
    for (let i = 0; i < ngaySinh.length; i++) {
        if (ngaySinh[i] !== ' ' || ngaySinh[i] !== "/") {
            bienphu = Number(ngaySinh[i])
            arr2.push(bienphu);
        }
    }
}

daySoNgaySinh();
// document.write(" Dãy số ngày sinh của bạn là: " + "<br>" + arr2 + "<br>");


let arrNa = [];
let arrPa = [];

function nguyenPhuAm() {
    for (let i = 0; i < ten.length; i++) {
        if (ten[i] === "A" || ten[i] === "E" || ten[i] === "I" || ten[i] === "O" || ten[i] === "U") {
            arrNa.push(str.indexOf(ten[i]) % 9 + 1);
        } else {
            arrPa.push(str.indexOf(ten[i]) % 9 + 1);
        }
    }
}

nguyenPhuAm()

loaiBoSo0(arrPa);
document.write(" Các nguyên âm trong tên của bạn là: " + "<br>" + arrNa + "<br>");
document.write(" Các phụ âm trong tên của bạn là: " + "<br>" + arrPa + "<br>");

function duongDoi() {
    let tong = arr2[0];
    for (let i = 1; i < arr2.length; i++) {
        tong += arr2[i];
        if (tong > 9) {
            tong -= 9;
        }
    }
    return tong;
}

function duongDoi1() {
    let count =0;
    let tong = arr2[0];
    for (let i = 1; i < arr2.length; i++) {
        tong += arr2[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write(" 1. Số đường đời của bạn là: " +(tong+9) +"/"+tong + "<br>") ;
    }else {
        document.write(" 1. Số đường đời của bạn là: " +tong + "<br>");
    }
    return tong;
}
duongDoi1();

function soSuMenh() {
    let count = 0;
    let tong = arr[0];
    for (let i = 1; i < arr.length; i++) {
        tong += arr[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    return tong;
}
function soSuMenh1() {
    let count =0;
    let tong = arr[0];
    for (let i = 1; i < arr.length; i++) {
        tong += arr[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write( " 2. Số sứ mệnh của bạn là : " + (tong+9) +"/"+tong + "<br>");
    }else {
        document.write( " 2. Số sứ mệnh của bạn là : " + tong + "<br>");
    }
}
soSuMenh1();

function soLinhHon() {
    let count=0;
    let tong = arrNa[0];
    for (let i = 1; i < arrNa.length; i++) {
        tong += arrNa[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write(" 3. Số linh hồn của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 3. Số linh hồn của bạn là : " + tong + "<br>");
    }
    return (tong)
}
soLinhHon();


function soNhanCach() {
    let count=0;
    let tong = arrPa[0];
    for (let i = 1; i < arrPa.length; i++) {
        tong += arrPa[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write(" 4. Số nhân cách của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 4. Số nhân cách của bạn là : " + tong + "<br>");
    }
    return (tong)
}

soNhanCach();

function soCanBang() {
    let count=0;
    let tong = arrSoCanBang[0];
    for (let i = 1; i < arrSoCanBang.length; i++) {
        tong += arrSoCanBang[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write(" 5. Số cân bằng của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 5. Số cân bằng của bạn là : " + tong + "<br>");
    }
    return (tong)
}
soCanBang();

function soTruongThanh(a, b) {
    let count = 0;
    let tong = a + b;
    if (tong > 9) {
        tong -= 9;
        count++
    }
    if(count>0){
        document.write(" 6. Số Trưởng thành của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 6. Số Trưởng thành của bạn là : " + tong + "<br>");
    }
    return (tong)
}

soTruongThanh(duongDoi(),soSuMenh());

function soNgaySinh() {
    let tong = arr2[0] + arr2[1];
    if (tong > 9) {
        tong -= 9;
    }
    return (tong)
}

function soNgaySinh1() {
    let count =0;
    let tong = arr2[0] + arr2[1];
    if (tong > 9) {
        tong -= 9;
        count++
    }
    if(count>0){
        document.write(" 7. Số ngày sinh của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 7. Số ngày sinh của bạn là : " + tong + "<br>");
    }

}
soNgaySinh1();

function soThaiDo() {
    let count = 0;
    let tong = arr2[0] + arr2[1] + arr2[2] + arr2[3];
    if (tong > 9) {
        tong -= 9;
        count++
    }
    if(count>0){
        document.write(" 8. Số Thái độ của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 8. Số Thái độ của bạn là : " + tong + "<br>");
    }
    return (tong)
}

soThaiDo();

function soTuDuyLyTri() {
    let count = 0;
    let tong = soNgaySinh() + soVanMenh();
    if (tong > 9) {
        tong -= 9;
        count++
    }
    if(count>0){
        document.write(" 9. Số Tư duy lý trí của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 9. Số Tư duy lý trí của bạn là : " + tong + "<br>");
    }
    return (tong)
}

soTuDuyLyTri();


function soVanMenh() {

    let tong = arrTen[0];
    for (let i = 1; i < arrTen.length; i++) {
        tong += arrTen[i];
        if (tong > 9) {
            tong -= 9;
        }
    }
    return (tong)
}

function soVanMenh1() {
    let count =0;
    let tong = arrTen[0];
    for (let i = 1; i < arrTen.length; i++) {
        tong += arrTen[i];
        if (tong > 9) {
            tong -= 9;
            count++
        }
    }
    if(count>0){
        document.write(" 10. Số vận mệnh của bạn là : " + (tong+9) +"/"+ tong + "<br>");
    }else {
        document.write(" 10. Số vận mệnh của bạn là : " + tong + "<br>");
    }
}
soVanMenh1();





