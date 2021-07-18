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


/**
 * Поиск маршрутов
 * 
 * @param {number} start Станция отправления
 * @param {number} end Станция прибытия
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

/**
 * Поиск рейсов
 * @param {number} start 
 * @param {number} end 
 * @param {string} date 
 */
function findReises(start, end, date) {
    const routes = findRoutes(start, end);
    return allReises
        .filter(filterByRoutes(routes))
        .filter(filterByDate(date));
}

/**
 * Поиск рейсов (для отображения пользователю)
 * @param {string} start Название станции отправления
 * @param {string} end Название станции прибытия 
 * @param {string} date Дата отправления
 */
function findReisesForPassengers(start, end, date) {
    const startStaion = findStation(start);
    const endStaion = findStation(end);
    const reises = findReises(startStaion.id, endStaion.id, date);
    return reises.map((reis) => {


        return {
            reisId,
            date,
            trainType,
            freeSits,
            start,
            end,
        }
    });
}
