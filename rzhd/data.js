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
    {
      id: 1,
      trainId: 1,
      routeId: 'PM',
      date:'11/10/2010'  
    },
    {
      id: 2,
      trainId: 2,
      routeId: 'MP',
      date:'12/10/2010'  
    },
];
