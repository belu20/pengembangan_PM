let nomor = 73
let POSISI
if(nomor %2 == 0){
    if(nomor >= 50 && nomor <= 100){
        POSISI = `${nomor} adalah ATTACKER dan berhak di pilih menjadi Kapten team`
    }else {
        POSISI = `${nomor} adalah ATTACKER`
    }
}else if(nomor %2 == 1){
    if(nomor >90){
        POSISI =`${nomor} adalah PLAYMAKER`
    }else if (((nomor % 3) == 0) && (nomor % 5) == 0){
        POSISI ="${nomor} Adalah KEEPER"
    }else{
        POSISI =`${nomor} Adalah DEFENDER`
    }
}
console.log(POSISI);