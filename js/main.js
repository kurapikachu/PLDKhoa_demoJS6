// BÀI TẬP 1:

var ketQua = document.getElementById("ketQua");

var calSumEven = function (soN) {
    var sumEven = 0;
    for (var i = 0; i <= soN; i += 2) {
        sumEven += i;
    }
    return sumEven
}

ketQua.addEventListener("click", function () {
    var soN = parseInt(document.getElementById("soN").value)

    var sumEven = calSumEven(soN)

    document.getElementById("tbKQ").innerHTML = "Tổng các số chẵn là: " + sumEven;

})


// BÀI TẬP 2

document.getElementById("ketQua2").addEventListener("click", function () {
    var count = 0;
    for (var i = 0; i < 1001; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    document.getElementById("tbKQ2").innerHTML = "Số các chữ số chia hết cho 3 từ 0 - 1000 là: " + count;
})

//BÀI TẬP 3

document.getElementById("ketQua3").addEventListener("click", function () {
    var sum = 0;
    for (var i = 1; sum <= 5; i++) {
        sum += i;
    }
    console.log(i)
    document.getElementById("tbKQ3").innerHTML = "Số nguyên dương nhỏ nhất là: " + (i - 1);
})

//BÀI TẬP 4

var calSumVarNAndX = function (x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i)
    }
    return sum;
}

document.getElementById("ketQua4").addEventListener("click", function () {
    var x = parseInt(document.getElementById("numX").value)
    var n = parseInt(document.getElementById("numN").value)

    var sum = calSumVarNAndX(x, n);

    document.getElementById("tbKQ4").innerHTML = "Tổng của S(n) là: " + sum;
})

//BÀI TẬP 5

document.getElementById("ketQua5").addEventListener("click", function () {
    var n = parseInt(document.getElementById("numN2").value)
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    document.getElementById("tbKQ5").innerHTML = "Giai thừa của " + n + " số là: " + giaiThua;
})
