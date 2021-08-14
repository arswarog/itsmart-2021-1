/**
 * Список станций
 * @type {Station[]}
 */
const allStations = [
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
const allRoutes = [
    routeFactory('118', [1, 3, 4, 7]),
    routeFactory('119', [7, 4, 3, 1]),
    routeFactory('100', [1, 2, 3, 5, 6]),
    routeFactory('101', [6, 5, 3, 2, 1]),
    routeFactory('203', [4, 1, 2, 5]),
];

/**
 * Список рейсов
 * @type {Reis[]}
 */
const allReises = [
    {
        id: 1,
        trainId: 1,
        routeId: '101',
        date: '11/10/2010'
    },
    {
        id: 2,
        trainId: 2,
        routeId: '100',
        date: '12/10/2010'
    },
];
