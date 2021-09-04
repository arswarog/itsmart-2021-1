const stationItemTemplate = document
    .getElementById('stations-list-item')
    .content
    .querySelector('li');

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
})
