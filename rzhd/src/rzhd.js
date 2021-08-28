let _stationId = 1;
let _reiseId = 1;

/**
 * Фабрика станций
 * @param {string} name Название станции
 * @returns {Station}
 */
function stationFactory(name) {
    return {
        id: _stationId++,
        name
    };
}

/**
 * Создает объект маршрута
 * @param {string} id Номер маршрута
 * @param {number[]} stations
 * @returns Route
 */
function routeFactory(id, stations) {
    stations.forEach(id => {
        if (!findStationById(id))
            throw new Error(`Станции ${id} не существует`);
    });

    const firstStation = findStationById(stations[0]);
    const lastStation = findStationById(stations[stations.length - 1]);

    return {
        id,
        name: `${firstStation.name} - ${lastStation.name}`,
        stations
    };
}

/**
 * Создает объект рейса
 * @param {string} routeId
 * @param {string} date
 * @param {number} trainId
 * @return {Reis}
 */
function reisFactory(routeId, date, trainId = 0) {
    return {
        id: _reiseId++,
        trainId,
        routeId,
        date,
    };
}

/**
 * Выводим на экран весь маршрут
 * @param {Route} route
 *
 */
function printRoute(route) {
    console.log(`Route #${route.id} ${route.name}`);
    console.table(route.stations.map(
        (id) => allStations.find(item => item.id === id)
    ));
}

/**
 * Поиск маршрутов
 *
 * @param {number} start Станция отправления
 * @param {number} end Станция прибытия
 * @returns {Route[]}
 */
function findRoutes(start, end) {
    return allRoutes
        .filter(
            route => route.stations.includes(start) && route.stations.includes(end)
        )
        .filter(
            route => route.stations.indexOf(start) < route.stations.indexOf(end)
        );
}

/**
 * Поиск рейсов
 * @param {number} start
 * @param {number} end
 * @param {string} date
 */
function findReises(start, end, date) {
    try {
        const routes = findRoutes(start, end);
        return allReises
            .filter(filterByRoutes(routes))
            .filter(filterByDate(date));
    } catch (e) {
        throw new Error('Ошибка при поиске рейса\n' + e.message);
    }
}

/**
 * Поиск рейсов (для отображения пользователю)
 * @param {string} start Название станции отправления
 * @param {string} end Название станции прибытия
 * @param {string} date Дата отправления
 */
function findReisesForPassengers(start, end, date) {
    try {
        const startStation = findStation(start);
        if (!startStation)
            throw new Error('Неверная станция отправления');

        const endStation = findStation(end);
        if (!endStation)
            throw new Error('Неверная станция прибытия');

        const reises = findReises(startStation.id, endStation.id, date);

        if (reises.length) {
            const results = reises
                .map((reis) => {
                    return {
                        reisId: reis.id,
                        routeId: reis.routeId,
                        route: findRouteById(reis.routeId),
                        date: reis.date,
                        start: startStation.name,
                        end: startStation.name,
                        trainId: reis.trainId,
                    };
                });
            console.log(`На ${date} вы можете уехать из ${startStation.name} в ${endStation.name} на следующих поездах:`);
            console.log(results.map((info, index) => ` ${index+1}: Маршрут ${info.route.id} сообщением ${info.route.name}`).join('\n'));
            return results;
        } else {
            console.log(`На ${date} из ${startStation.name} в ${endStation.name} ничего не найдено`);
        }
        return reises;
    } catch (error) {
        alert('Извините, что-то пошло не так\n' + error.message);
        return [];
    }
}

/**
 * Возвращает объект из массива stotions по имени станции
 * @param {string} stationName
 * @returns {Station}
 */
function findStation(stationName) {
    stationName = stationName.toLowerCase().trim();
    return allStations.find((station) => station.name.toLowerCase() === stationName);
}

/**
 * Возвращает станцию по id
 * @param {number} stationId
 * @returns {Station} station
 */
function findStationById(stationId) {
    return allStations
        .find((item) => stationId === item.id);

}

/**
 * Возвращает маршрут по id
 * @param {string} routeId
 * @returns {Route} route
 */
function findRouteById(routeId) {
    return allRoutes
        .find((item) => routeId === item.id);

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
