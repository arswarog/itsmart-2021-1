const arr = [3, 8, 5, 9, 2, 11, 12, 1];

init(arr);

run(sort(arr));

function* sort(arr) {
    for (let j = 0; j < arr.length; j++) {
        bigLoop(arr);
        for (let i = 1; i < arr.length; i++) {
            yield select(i - 1, i);
            if (arr[i - 1] > arr[i]) {
                const t = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = t;
                yield view(arr);
            }
        }
    }
}
