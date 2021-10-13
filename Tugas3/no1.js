let nama = "ujang"
let umur = 20
let tinggal = "boston"
let tabungan = 1000000
const pangkat = ["Don", "Underboss","Capo"]
let hasil
    //kondisi untuk don
    if (umur > 40) {
        if (tinggal == "Nevada" || tinggal == "New York" || tinggal == "Havana") {
            if (tabungan > 1000000) {
                hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat[0]}`
            }else{
                hasil = `${nama} tidak mencurigakan`
            }
        }else {
            hasil = `${nama} tidak mencurigakan`
        }
    //kondisi untuk Underboss    
    }else if (umur >= 25 && umur <= 40) {
        if (tinggal == "New Jersey" || tinggal == "Manhattan" || tinggal == "Nevada") {
            if (tabungan >= 1000000 && tabungan <= 2000000) {
                hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat[1]}`
            }else{
                hasil = `${nama} tidak mencurigakan`
            }
        }else{
            hasil = `${nama} tidak mencurigakan`
        }
    //kondisi untuk Capo
    }else if (umur >= 18 && umur <= 24 ) {
        if (tinggal == "California" || tinggal == "Detroit" || tinggal == "Boston" ) {
            if (tabungan < 1000000) {
                hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat[2]}`
            }else{
                hasil = `${nama} tidak mencurigakan`
            }
        }else{
            hasil = `${nama} tidak mencurigakan`
        }
    }else{
        hasil = `${nama} tidak mencurigakan`
    }

console.log(hasil)
