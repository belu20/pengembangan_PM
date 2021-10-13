let waktuLari = 4
let waktuPushup= 0
let waktuPlank=5

const lari = 60/5
const pushup = 200/30
const plank = 5

let aktivitas1 = 'lari'
let aktivitas2 = 'pushup'
let aktivitas3 = 'plank'
let kaloriyangdibakar = 0

if (aktivitas1=='lari' || aktivitas2 =='pushup' || aktivitas3 =='plank') {
    kaloriyangdibakar =  waktuLari * lari + waktuPushup * pushup + waktuPlank *plank
}else {
    
}
console.log(kaloriyangdibakar);