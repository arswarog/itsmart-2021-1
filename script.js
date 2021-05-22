const arr = [1, 8, 5, 9, 2, 11, 12, 0];

const root = document.getElementById('list')
const list = init(root, arr);

function* sort(arr) {
    yield arr;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 1; i < arr.length; i++) {
            yield [i - 1, i];
            if (arr[i - 1] > arr[i]) {
                const t = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = t;
            }
            yield arr;
        }
    }
}

const next = document.getElementById('next');
next.addEventListener('click', run(sort(arr)));

function run(h) {
    function next() {
        const result = h.next();
        if (result.done)
            return alert('The end');

        if (result.value.length === 2)
            compare(list, result.value[0], result.value[1]);
        else
            view(list, result.value);
    }
    return next;
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
    root.style.height = `${arr.length * 20 + 20}px`;
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

function compare(list, a, b) {
    for (let index = 0; index < list.length; index++) {
        list[index].classList.remove('focus');
    }
    list[a].classList.add('focus');
    list[b].classList.add('focus');
}

function view(list, arr) {
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        const el = list.find(e => e.dataset.value == item);
        const top = `${index * 20 + 20}px`;
        if (top !== el.style.top)
            el.classList.add('focus');
        else
            el.classList.remove('focus');
        el.style.top = top;

        setTimeout(() => {
            el.classList.remove('focus');
        }, 900);
    }
}
