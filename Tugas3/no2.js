let nilai1 = 90
let nilai2 ='A'
let status1
let status2
let hasil
if(nilai1 >80){
    status1 ='LOLOS'
}else if(nilai1 >= 60 && nilai1<=80){
    status1 ='DIPERTIMBANGKAN'
}else{
    status1 = 'GAGAL'
}
console.log(status1);
if(nilai2 == 'A' || nilai2 == 'B'){
    status2 = 'LOLOS'
}else {
    status2 = 'GAGAL'
}
console.log(status2);
if (nilai1 >80 || nilai1 >=60 && nilai1<=80 ){
    if(nilai2 == 'A' || nilai2 == 'B'){
        hasil ='Selamat Kamu Berhasil Menjadi Calon Programmer'
    }
    else{
        hasil ='Maaf Kamu Belum Berhasil Menjadi Calon Programmer'
    }
}
else{
    hasil ='Maaf Kamu Belum Berhasil Menjadi Calon Programmer'
}
console.log(hasil);