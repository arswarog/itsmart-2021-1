const arr = [3, 8, 5, 9, 2, 11, 12, 1];

init(arr);

run(mergeSort(arr));

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            return [
                arr[1],
                arr[0],
            ];
        } else {
            return arr;
        }
    }

    if (arr.length > 2) {
        const middle = arr.length / 2;
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        console.log('left', left);
        console.log('right', right);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        const result = merge(sortedLeft, sortedRight);

        console.log(result);
        return result;
    }
}

console.log(merge(
    [3, 8, 13, 18],
    [5, 9, 11, 12],
));


mergeSort(arr);

function merge(left, right) {
    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    if (leftIndex === left.length) {
        result.push(...right.slice(rightIndex));
    }

    if (rightIndex === right.length) {
        result.push(...left.slice(leftIndex));
    }

    return result;
}

function* mergeSort2(arr, start, end) {
    if (arr.length < 2)
        return arr;

    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            return [
                arr[1],
                arr[0],
            ];
        } else {
            return arr;
        }
    }

    if (arr.length > 2) {
        const middle = arr.length / 2;
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        console.log('left', left);
        console.log('right', right);

        yield select(left); /// выделяем элементы на экране
        yield select(right); /// выделяем элементы на экране

        // yield bigLoop(); /// отображаем новую итерацию

        yield select(left); /// выделяем элементы на экране
        yield* mergeSort(left);

        yield select(right); /// выделяем элементы на экране
        yield* mergeSort(right);
    }
}

function* bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        bigLoop(arr);
        for (let i = 1; i < arr.length; i++) {
            yield select([arr[i - 1], arr[i]]);
            if (arr[i - 1] > arr[i]) {
                const t = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = t;
                yield view(arr);
            }
        }
    }
}

function range(start, end) {
    const res = [];
    for (let i = Math.floor(start); i < end; i++) {
        res.push(i);
    }
    return res;
}
