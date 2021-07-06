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
