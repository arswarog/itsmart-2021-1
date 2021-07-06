/**
 * Проверка принадлежности оценки студенту
 * @param {Student} student
 */
function markByStudent(student) {
    /**
     * @param {Mark} mark
     */
    return (mark) => mark.studentId === student.id;
}

/**
 * Получение фамилии и инициалов студента
 * @param {Student} student
 * @return {string}
 */
function getFIOShort(student) {
    return `${student.lastname} ${student.firstname.substr(0, 1)}. ${student.patronymic.substr(0, 1)}.`;
}

/**
 * Вычисление среднего арифметического
 * @param {Array<number>} data массив чисел
 * @return {number} среднее арифметическое
 */
function average(data) {
    const sum = data.reduce((acc, item) => acc + item);
    return sum / data.length;
}

/**
 * Округляет до одного знака после запятой
 * @param  {number} value значение для округления
 * @return {number} результат округления
 */
function prettyRound(value) {
    return Math.round(value * 10) / 10;
}
