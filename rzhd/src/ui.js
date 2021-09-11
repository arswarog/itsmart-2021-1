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
    const ul = document.getElementById('stationsSuggestList');
    const form = document.getElementById('findReises');
    const input = form.elements['start'];
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
    /**
     * 
     */
    function displayStationSuggestList(stations) {
        const ul = document.getElementById('stationsSuggestList');
      
        while (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }
      
        stations.forEach(station => {
            const li = stationsSuggestItem.cloneNode(true);
            ul.appendChild(li);
            applyData(li, station);
        });
    }




})




