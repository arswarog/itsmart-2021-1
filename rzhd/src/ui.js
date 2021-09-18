const stationItemTemplate = document
    .getElementById('stations-list-item')
    .content
    .querySelector('li');
const stationsSuggestItem = document
    .getElementById('stationsSuggestItem')
    .content
    .querySelector('li')
/**
 * Выводит список станций
 * @param {Station[]} stations 
 */
function displayStationList(stations) {
    const ul = document.getElementById('stations-list');

    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }

    stations.forEach(station => {
        const li = stationItemTemplate.cloneNode(true);
        ul.appendChild(li);
        applyData(li, station);
    });
}

/**
 * Применить данные к шаблону
 * @param {HTMLElement} element 
 * @param {object} data 
 */
function applyData(element, data) {
    Array.from(element.childNodes).forEach(el => {
        if (!el || !el.dataset) return;
        const dataName = el.dataset.name;
        if (!dataName)
            return;

        el.innerText = data[dataName];

        // здесь нужно обойти все вложенные элементы используя рекурсию
    })
}

loadRzhdData().then(data => {
    displayStationList(data.stations)
    displayStationList(data.stations)
    displayStationList(data.stations)
    const rzhd = createRzhdSystem(data)

    suggestForStationInput('end', 'stationsSuggestList_end', data)
    suggestForStationInput('start', 'stationsSuggestList_start', data)
    const form = document.getElementById('findReises');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = getFormData(form);

        console.log(formData)
        const errors = validate(formData)

        if (errors) {
            console.log(errors)
            showError(errors);
            return
        }

        try {
            const reises = rzhd.findReisesForPassengers(formData.start, formData.end, formData.date);
            console.log(reises);
        }
        catch (e) {
            showError(e.message);
        }

    });
})

function showError(message) {
    const container = document.getElementById('errors');
    container.classList.remove('hide');
    container.innerText = message;
}

function hideError() {
    const container = document.getElementById('errors');
    container.classList.add('hide');
    container.innerText = '';
}

function validate(formData) {
    if (!formData.date)
        return 'Введите пожалуйста дату отправления'

    const currentTimestamp = new Date().getTime();
    const targetTimestamp = new Date(formData.date).getTime();


    if (targetTimestamp < currentTimestamp)
        return "Поезда в прошлое уже не ходят. Но мы рабтаем над этим"

}

function getFormData(form) {
    const start = form.elements['start'].value;
    const end = form.elements['end'].value;
    const date = form.elements['date'].value;

    return { start, end, date };
}

function suggestForStationInput(name, id, data) {
    const ul = document.getElementById(id);
    const form = document.getElementById('findReises');
    const input = form.elements[name];
    input.addEventListener('input', () => {
        const inputValue = input.value.trim().toLowerCase();
        if (inputValue) {
            const result = data.stations.filter((station) => station.name.toLowerCase().includes(inputValue));
            displayStationSuggestList(result);
            // show ul
            ul.classList.remove('hide');
        }
        else {
            // hide ul
            ul.classList.add('hide');
        }
    });
    input.addEventListener('blur', () => {
        setTimeout(() => ul.classList.add('hide'), 300);
    });

    ul.addEventListener('click', (event) => {
        const suggest = event.target.innerText.trim();
        input.value = suggest;
        ul.classList.add('hide');

    })

    /**
     * 
     */
    function displayStationSuggestList(stations) {
        const ul = document.getElementById(id);

        while (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }

        stations.forEach(station => {
            const li = stationsSuggestItem.cloneNode(true);
            ul.appendChild(li);
            applyData(li, station);
        });
    }
}





