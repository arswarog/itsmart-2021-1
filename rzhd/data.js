/**
 * Список станций
 * @type {Station[]}
 */
 const stations = [
    stationFactory('Москва'),
    stationFactory('Новосибирск'),
    stationFactory('Екатеринбург'),
    stationFactory('Кисловодск'),
    stationFactory('Н. Новгород'),
    stationFactory('Пермь'),
    stationFactory('Воркута'),
];

/**
 * Список маршрутов
 * @type {Route[]}
 */
const routes = [
    routeFactory("MV", [1, 3, 4, 7]),
    routeFactory("VM", [7, 4, 3, 1]),
    routeFactory("MP", [1, 2, 3, 5, 6]),
    routeFactory("PM", [6, 5, 3, 2, 1]),
    routeFactory("KNN", [4, 1, 2, 5])
];

/**
 * Список рейсов
 * @type {Reis[]}
 */
const allReises = [
];
