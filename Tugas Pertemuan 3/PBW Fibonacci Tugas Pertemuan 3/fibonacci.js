function cetakFibonacci() {
    const jumlah = document.getElementById("inputNumber").value;
    let a = 0, b = 1, c;
    let fibonacciSeries = "0, 1";
    
    if (jumlah <= 0) {
        document.getElementById("result").innerText = "Silakan masukkan angka lebih besar dari 0.";
        return;
    }
    
    for (let i = 2; i < jumlah; i++) {
        c = a + b;
        fibonacciSeries += ", " + c;
        a = b;
        b = c;
    }
    document.getElementById("result").innerText = "Deret Fibonacci: " + fibonacciSeries;
}
