function createRzhdSystem(rzhdData) {
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
     * Поиск рейсов
     * @param {number} start
     * @param {number} end
     * @param {string} date
     */
    function findReises(routes, reises, start, end, date) {
        try {
            const foundRoutes = findRoutes(routes, start, end);
            return reises
                .filter(filterByRoutes(foundRoutes))
                .filter(filterByDate(date));
        } catch (e) {
            throw new Error('Ошибка при поиске рейса\n' + e.message);
        }
    }

    let ticketId = 0;
    /**
     * Покупка билета
     * @param {string} start 
     * @param {string} end 
     * @param {string} date 
     * @param {string} routeId 
     * @param {string} fio 
     * @returns Ticket
     */
    function buyTicket(start, end, date, routeId, fio) {
        // проверить рейс и наличие места
        const availableReises = findReisesForPassengers(start, end, date);
        const reis = availableReises.find(item => item.routeId === routeId);
        if (!reis)
            throw new Error('Рейса не существует')

        // зарегестрировать пользователя

        // зарезервировать билет
        /**
         * @var Ticket
         */
        const ticket = {
            id: ++ticketId,
            reisId: reis.reisId,
            startStationId: reis.startId,
            endStationId: reis.endId,
            sitNumber: 0, // todo
            passengerId: fio, // todo
        }

        allTickets.push(ticket);

        return ticket;
    }

    /**
     * Поиск рейсов (для отображения пользователю)
     * @param {string} start Название станции отправления
     * @param {string} end Название станции прибытия
     * @param {string} date Дата отправления
     */
    function findReisesForPassengers(start, end, date) {
        const startStation = findStationByName(rzhdData.stations, start);
        if (!startStation)
            throw new Error('Неверная станция отправления');

        const endStation = findStationByName(rzhdData.stations, end);
        if (!endStation)
            throw new Error('Неверная станция прибытия');

        const reises = findReises(rzhdData.routes, rzhdData.reises,
            startStation.id, endStation.id, date);

        if (reises.length) {
            const results = reises
                .map((reis) => {
                    return {
                        reisId: reis.id,
                        routeId: reis.routeId,
                        route: findRouteById(rzhdData.routes, reis.routeId),
                        date: reis.date,
                        start: startStation.name,
                        end: endStation.name,
                        startId: startStation.id,
                        endId: endStation.id,
                        trainId: reis.trainId,
                    };
                });
            console.log(`На ${date} вы можете уехать из ${startStation.name} в ${endStation.name} на следующих поездах:`);
            console.log(results.map((info, index) => ` ${index + 1}: Маршрут ${info.route.id} сообщением ${info.route.name}`).join('\n'));
            return results;
        } else {
            console.log(`На ${date} из ${startStation.name} в ${endStation.name} ничего не найдено`);
        }
        return reises;
    }

    return {
        printRoute,
        findReises,
        findReisesForPassengers,
        buyTicket,
    }
}
