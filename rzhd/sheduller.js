/**
 * Генерация расписания для отдельного маршрута
 * @param {number} freq Периодичность следования
 * @param {Route} routeTo Маршрут в одну сторону
 * @param {Route} routeBack Маршрут назад
 * @param {string} month Месяц планирования
 * @param {number} delta День старта маршрутов
 * @returns {Reis[]}
 */
function reiseSheduller(freq, routeTo, routeBack, month, delta) {
    if (routeTo.stations[0] !== routeBack.stations[routeBack.stations.length - 1] || routeTo.stations[routeTo.stations.length - 1] !== routeBack.stations[0])
        throw new Error('Маршруты не совместимы');

    const days = [...routeTo.stations.slice(1), ...routeBack.stations.slice(1)]
        .map(stationId => Math.ceil(Math.ceil(stationId / 10) * 0.2))
        .reduce((acc, item) => acc + item, 0);

    console.log(routeTo.stations[0], routeBack.stations[0], days);

    delta = delta % freq + 1;
    const backDelta = days % freq;

    const reises = [];

    for (let day = delta; day <= 31; day += freq) {
        /**
         * Рейс туда
         * @type {Reis}
         */
        const reisTo = {
            id: 0,
            routeId: routeTo.id,
            date: day + month,
            trainId: 0,
        };
        /**
         * Рейс обратно
         * @type {Reis}
         */
        const reisBack = {
            id: 0,
            routeId: routeBack.id,
            date: (day + backDelta) % 31 + month,
            trainId: 0,
        };
        reises.push(reisTo, reisBack);
    }

    return reises;
}

/**
 * Запуск генерации расписания для всех перечисленных маршрутов
 * @param {Route[]} routes
 */
function runSheduler(routes) {
    /**
     * @type {Reis[]}
     */
    const reises = [];
    for (let i = 0; i < routes.length; i += 2) {
        let freq = 2;
        if (i >= 6) freq = 3;
        if (i >= 12) freq = 5;
        const result = reiseSheduller(freq, routes[i], routes[i + 1], '.08.2021', i / 2);
        console.log(result);
        reises.push(...result);
    }

    console.log(reises.length);
    console.log(reises.map(reis => `reisFactory('${reis.routeId}', '${reis.date}'),`).join('\n'));
}

runSheduler(allRoutes);
