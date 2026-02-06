var txta = prompt("Enter number A: ");
var txtb = prompt("Enter number B: ");
if (txta == null || txta =="" || isNaN(txta)) {
    alert("Please enter a valid number for A.");
} else if (txtb == null || txtb =="" || isNaN(txtb)) {
    alert("Please enter a valid number for B.");
} else {
    var result = parseFloat(txta) + parseFloat(txtb);
    alert("Result: \n" + txta + " + " + txtb + " = " + result);
}