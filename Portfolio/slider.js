var i = 0;
// Skapar en Array med 3st "lådor", en för varje bild.
var image = [];
image[0] = "ank1.jpg";
image[1] = "ank2.jpg";
image[2] = "ank3.jpg";

// window.onload = När sidan har laddats, kör funktionen.
window.onload = function swapImage() { 
    $("#section1").css("background-image", "url("+image[i] +")"); 
    setTimeout(swapImage,5000);
    // Så länge i(0) är mindre än arrayboxen plussar den på 1.
    if (i < image.length -1)
    {
        i++;
    }
    else {
        i = 0;
    }
};