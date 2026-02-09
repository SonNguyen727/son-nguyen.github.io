var txta = prompt("Enter any Integer: ");
var txtb = prompt("Enter another Integer: ");
if (txta == null || txta =="" || isNaN(txta) || txtb == null || txtb =="" || isNaN(txtb)) {
    document.write("<font color='red'>Please enter valid numbers.</font>");
} else {
    var perimeter = 2 * txta + 2 *txtb;
    var area = txta * txtb;
    document.write("<b>Perimeter:</b> " + perimeter + "<br/>");
    document.write("<b>Area:</b> " + area + "<br/>");
}