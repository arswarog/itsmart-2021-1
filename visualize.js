const root = document.getElementById('list');
let list = [];

const next = document.getElementById('next');

function run(h) {
    function nextHandler() {
        const result = h.next();
        if (result.done)
            return alert('The end');
    }

    next.addEventListener('click', nextHandler);
    window.addEventListener('keydown', event => {
        console.log(event);
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
    console.log(list);
}

function select(...items) {
    clean();
    for (let index = 0; index < items.length; index++) {
        list[items[index]].classList.add('focus');
    }
}

function clean() {
    for (let index = 0; index < list.length; index++) {
        list[index].classList.remove('focus');
    }
}
