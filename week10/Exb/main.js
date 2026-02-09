var txta = prompt("Enter any Integer: ");
var pi = 3.14;
if (txta == null || txta =="" || isNaN(txta)) {
    document.write("<font color='red'>Please enter valid numbers.</font>");
} else {
    var perimeter = 2 * pi * txta;
    var area = pi * txta * txta;
    document.write("<b>Perimeter:</b> " + perimeter + "<br/>");
    document.write("<b>Area:</b> " + area + "<br/>");
}