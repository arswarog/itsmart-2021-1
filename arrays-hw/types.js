/**
 * Информация о студенте
 * @typedef {Object} Student
 * @property {number} id Первичный ключ
 * @property {string} firstname Имя
 * @property {string} lastname Фамилия
 * @property {string} patronymic Отчество
 * @property {string} gender Пол
 * @property {string} group Группа
 */

/**
 * Информация об оценке
 * @typedef {Object} Mark
 * @property {number} id Первичный ключ
 * @property {number} studentId ID студента (внешний ключ на Student)
 * @property {string} date Дата выставления оценки
 * @property {number} mark Оценка
 */
