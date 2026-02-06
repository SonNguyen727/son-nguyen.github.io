var txta = prompt("Enter any Integer: ");
if (txta == null || txta =="" || isNaN(txta)) {
    document.write("<font color='red'>Please enter a number.</font>");
} else if (txta % 2 == 0) {
    document.write("<font color='green'><b>" + txta + " is an even number.</b></font>");
} else {
    document.write("<font color='blue'><i>" + txta + " is an odd number.</i></font>");
}