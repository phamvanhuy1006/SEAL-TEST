const n = parseInt(process.argv[2]);

function sum(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}

if (!isNaN(n)) {
    const tong = sum(n);
    console.log("Tổng các số từ 1 đến " + n + " là: " + tong);
}