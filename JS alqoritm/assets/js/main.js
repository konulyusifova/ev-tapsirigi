var n = prompt("Ədəd daxil edin:");
if (n > 99 && n < 1000) {
    var a = n % 10;
    var b = ((n - a) / 10) % 10;
    var c = ((((n - a) / 10) - b) / 10) % 10;
    if (a == b && b == c && a == c) {
        console.log("Ədədlər bir-birinə bərabərdir!");
    }
    else {
        console.log("Bütün rəqəmlər bərabər deyil!");
    }
}

else {
    console.log("Yazdığınız ədəd düzgün deyil!");
}