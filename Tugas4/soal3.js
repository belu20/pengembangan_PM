var s = 'a';
while(s !== 'z')
{
    console.log();("ini huruf " + s);
    s = String.fromCharCode(s.charCodeAt(0) + 1);
}