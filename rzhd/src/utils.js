function makeStationFactory() {
    let _stationId = 1;
    /**
     * Фабрика станций
     * @param {string} name Название станции
     * @returns {Station}
     */
    return function stationFactory(name) {
        return {
            id: _stationId++,
            name
        };
    }
}


/**
 * Создает объект маршрута
 * @param {Station[]} stations
 * @param {string} id Номер маршрута
 * @param {number[]} routeStations
 * @returns Route
 */
function routeFactory(stations, id, routeStations) {
    routeStations.forEach(id => {
        if (!findStationById(stations, id))
            throw new Error(`Станции ${id} не существует`);
    });

    const firstStation = findStationById(stations, routeStations[0]);
    const lastStation = findStationById(stations, routeStations[routeStations.length - 1]);

    return {
        id,
        name: `${firstStation.name} - ${lastStation.name}`,
        stations: routeStations,
    };
}


function makeReisFactory() {
    let _reiseId = 1;

    /**
     * Создает объект рейса
     * @param {string} routeId
     * @param {string} date
     * @param {number} trainId
     * @return {Reis}
     */
    return function reisFactory(routeId, date, trainId = 0) {
        return {
            id: _reiseId++,
            trainId,
            routeId,
            date,
        };
    }
}

/**
 * Поиск маршрутов
 *
 * @param {number} start Станция отправления
 * @param {number} end Станция прибытия
 * @returns {Route[]}
 */
function findRoutes(routes, start, end) {
    return routes
        .filter(
            route => route.stations.includes(start) && route.stations.includes(end)
        )
        .filter(
            route => route.stations.indexOf(start) < route.stations.indexOf(end)
        );
}

/**
 * Возвращает объект из массива stotions по имени станции
 * @param {Station[]} stations Список всех станций
 * @param {string} stationName Имя искомой станции
 * @returns {Station}
 */
function findStationByName(stations, stationName) {
    stationName = stationName.toLowerCase().trim();
    return stations.find((station) => station.name.toLowerCase() === stationName);
}

/**
 * Возвращает станцию по id
 * @param {Station[]} stations Список всех станций
 * @param {number} stationId Идентификатор необходимой станции
 * @returns {Station} station
 */
function findStationById(stations, stationId) {
    return stations
        .find((item) => stationId === item.id);
}

/**
 * Возвращает функцию, которая фильтрует массив рейсов по маршрутам
 * @param {Route[]} routes
 * @returns {function}
 */
function filterByRoutes(routes) {
    /**
     * Функция проверяет, идет ли рейс по маршруту из routes
     */
    return (reise) => routes
        .find((route) => route.id === reise.routeId);
}

/**
 * Возвращает функцию, которая проверяет идет ли рейс в указанную дату
 * @param {string} date
 * @returns {function}
 */
function filterByDate(date) {
    return (reise) => reise.date === date;
}

/**
 * Возвращает маршрут по id
 * 
 * @param {Route[]} routes Список всех станций
 * @param {string} routeId
 * @returns {Route} route
 */
function findRouteById(routes, routeId) {
    return routes
        .find((item) => routeId === item.id);
}
