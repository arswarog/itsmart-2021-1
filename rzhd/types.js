/**
 * Информация о станции
 * @typedef {Object} Station
 * @property {number} id Первичный ключ
 * @property {string} name Название станции
 */

/**
 * Информация о маршруте
 * @typedef {Object} Route
 * @property {string} name Номер маршрута (Первичный ключ)
 * @property {number[]} stations Список станций
 */

/**
 * Информация о рейсе
 * @typedef {Object} Reis
 * @property {number} id Первичный ключ
 * @property {number} trainId ID поезда
 * @property {string} routeId ID маршрута
 * @property {string} date Дата отправления
 */

/**
 * Информация о поезде
 * @typedef {Object} Train
 * @property {number} id Первичный ключ
 * @property {string} type Тип поезда (standard, speed)
 * @property {number} sits Количество мест
 */

/**
 * Информация о билете
 * @typedef {Object} Ticket
 * @property {number} id Первичный ключ
 * @property {number} reisId ID рейса
 * @property {number} startStationId ID станции отправление
 * @property {number} endStationId ID станции прибытия
 * @property {number} sitNumber Номер места
 * @property {number} passengerId ID пассажира
 */

/**
 * Информация о пассажире
 * @typedef {Object} Passanger
 * @property {number} id Первичный ключ
 * @property {string} fio Ф.И.О.
 */
