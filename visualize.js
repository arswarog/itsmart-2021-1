const root = document.getElementById('list');
let list = [];
let loops = 0;
let loopsEl = document.getElementById('loops');

const next = document.getElementById('next');

function run(h) {
    function nextHandler() {
        const result = h.next();
        if (result.done)
            return alert('The end');
    }

    next.addEventListener('click', nextHandler);
    window.addEventListener('keydown', event => {
        if (event.code === 'Space')
            nextHandler();
    });
}

function init(arr) {
    list = [];
    for (let item of arr) {
        const el = document.createElement('li');
        root.appendChild(el);
        el.innerHTML = `${item}`;
        el.className = 'item';
        el.dataset.value = item;
        el.style.top = '0px';
        el.style.left = '10px';
        list.push(el);
    }
    root.style.height = `${arr.length * 20 + 20}px`;
    view(arr);
    return list;
}

function view(arr) {
    const newList = [];
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        const elIndex = list.findIndex(e => {
            // console.log(e.dataset.value, item, e.dataset.value == item);
            return e.dataset.value == item;
        });
        const el = list[elIndex];
        if (elIndex < 0) {
            console.warn(`${item} not found`);
        }
        newList[index] = el;

        if (index !== elIndex)
            el.classList.add('focus');
        el.style.top = `${index * 20 + 60}px`;
    }
    list = newList;
}

function select(items) {
    clean();
    for (let index = 0; index < items.length; index++) {
        const value = items[index]
        const el = list.find(elItem => elItem.dataset.value == value)
        if (el)
            el.classList.add('focus');
        else
            console.warn(`${items[index]} not found`)
    }
}

function clean() {
    for (let index = 0; index < list.length; index++) {
        list[index].classList.remove('focus');
    }
}

function bigLoop(arr) {
    loops++;
    loopsEl.innerHTML = loops;
    clean();
    for (let index = 0; index < list.length; index++) {
        const item = list[index].cloneNode(true);
        list[index] = item;
        root.appendChild(item);
        item.style.left = `${loops * 50 + 10}px`;
    }
}
