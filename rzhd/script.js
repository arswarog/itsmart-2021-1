let _stationId = 1;

/**
 * Фабрика станций
 * @param {string} name Название станции
 * @returns {Station}
 */
function stationFactory(name) {
    return {
        id: _stationId++,
        name
    }
}

const stations = [
    stationFactory('Москва'),
    stationFactory('Новосибирск'),
    stationFactory('Екатеринбург'),
    stationFactory('Кисловодск'),
    stationFactory('Н. Новгород'),
    stationFactory('Пермь'),
    stationFactory('Воркута'),
];


const routes = [
    routeFactory("MV", [1, 3, 4, 7]),
    routeFactory("VM", [7, 4, 3, 1]),
    routeFactory("MP", [1, 2, 3, 5, 6]),
    routeFactory("PM", [6, 5, 3, 2, 1]),
    routeFactory("KNN", [4, 1, 2, 5])
];
console.log(routes);
/**
 * 
 * @param {string} name 
 * @param {number[]} stations 
 * @returns Route
 */
function routeFactory(name, stations) {
    return {
        name,
        stations
    }
}
/**
 * Выводим на экран весь маршрут
 * @param {Route} route 
 * 
 */
function printRoute(route) {
    console.log('Route: ', route.name)
    console.table(route.stations.map(
        (id) => stations.find(item => item.id === id)
    ))
}

printRoute(routes[2])
printRoute(routes[3])
printRoute(routes[4])

/**
 * Поиск маршрутов
 * @param {number} start 
 * @param {number} end 
 * @returns {Route[]}
 */
function findRoutes(start, end) {
    return routes
        .filter(
            route => route.stations.includes(start) && route.stations.includes(end)
        )
        .filter(
            route => route.stations.indexOf(start) < route.stations.indexOf(end)
        )
}

console.log(findRoutes(1, 5));