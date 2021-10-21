function palindrome(str) {

    let pali = str.length;

    for ( let i = pali -1; i >=0 ; i-- ) {
        if (str[i] !== str[pali - 1 - i]) {
            return "bukan palindrome";
        }
    }

    return "palindrome";
}


let hasil = palindrome("kamar")
console.log(hasil);
