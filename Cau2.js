const numbers = [1, 25, 7, -7, -3, 12, -22, 0];

// 1.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
const sortedNumbers = quickSort(numbers);
console.log("1.");
console.log("Dãy số sau khi sắp xếp theo thứ tự tăng dần:");
console.log(sortedNumbers);

// 2.
function absoluteSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const pivotIndex = arr.indexOf(pivot);

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            const absPivot = pivot < 0 ? -pivot : pivot;
            const absCurrent = arr[i] < 0 ? -arr[i] : arr[i];
            if (absCurrent < absPivot || (absCurrent === absPivot && arr[i] < pivot)) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return [...absoluteSort(left), pivot, ...absoluteSort(right)];
}

const absoluteSortNumbers = absoluteSort(numbers);
console.log("\n");
console.log("2.");
console.log("Dãy số sau khi sắp xếp tăng dần theo giá trị tuyệt đối và ưu tiên số âm trước:");
console.log(absoluteSortNumbers);

