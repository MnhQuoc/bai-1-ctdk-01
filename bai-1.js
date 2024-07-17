function tinh() {
    let a = +document.getElementById("a").value
    let b = +document.getElementById("b").value
    if (a % b === 0) {
        document.getElementById("result").innerHTML = a + " chia hết cho " + b;
    } else {
        document.getElementById("result").innerHTML = a + " không chia hết cho " + b;
    }
}

