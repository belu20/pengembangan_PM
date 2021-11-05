let fruits=["Apel","Pisang","Jambu","Anggur","Pepaya","Duku","Durian","Jeruk","Mangga","Manggis"];
let rak =[];
let rak2=[];
let rak3=[];
let rak4=[];
let rak5=[];
for(let i=0;i<fruits.length;i++){
    let huruf = (fruits[i].substring(0,1));
    if (huruf == "A"){
        rak.push(fruits[i]);
    }else if(huruf == "P"){
        rak2.push(fruits[i]);
    }else if(huruf == "J"){
        rak3.push(fruits[i]);
    }else if(huruf == "D"){
        rak4.push(fruits[i]);
    }else if(huruf == "M"){
        rak5.push(fruits[i]);
    }
}
console.log(rak);
console.log(rak2);
console.log(rak3);
console.log(rak4);
console.log(rak5);