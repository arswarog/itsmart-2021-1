const arr = [1, 8, 5, 9, 2, 11, 12, 0];

const root = document.getElementById('list')
const list = init(root, arr);

run(sort(arr));

function* sort(arr) {
    yield arr;
    yield [1, 5, 8, 9, 2, 11, 12, 0];
    yield [1, 5, 8, 2, 9, 11, 12, 0];
    yield [1, 5, 8, 2, 9, 11, 0, 12];
}

function run(h) {
    const timer = setInterval(() => {
        const result = h.next();
        console.log(result);
        view(list, result.value);
        if (result.done) {
            clearInterval(timer);
        }
    }, 1000);
}

function init(root, arr) {
    const list = [];
    for (let item of arr) {
        const el = document.createElement('li');
        root.appendChild(el);
        el.innerHTML = `${item}`;
        el.className = 'item';
        el.dataset.value = item;
        el.style.top = '0px';
        list.push(el);
    }
    return list;
}

function view(list, arr) {
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        const el = list.find(e => e.dataset.value == item);
        const top = `${index * 20 + 20}px`
        if (top !== el.style.top)
            el.classList.add('focus');
        el.style.top = top;

        setTimeout(() => {
            el.classList.remove('focus');
        }, 900);
    }
}
