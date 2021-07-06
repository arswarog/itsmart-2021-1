console.log(`Всего студентов в базе: ${allStudents.length}`);
console.log(`Всего оценок в базе: ${allMarks.length}`);

console.log(
    'Количество оценок у каждого студента:',
    allStudents
        .map((student) => {
            const markCount = allMarks.filter(markByStudent(student)).length;
            const fio = getFIOShort(student);
            return `${fio}: ${markCount}`;
        })
);
