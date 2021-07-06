console.log(`Всего студентов в базе: ${allStudents.length}`);
console.log(`Всего оценок в базе: ${allMarks.length}`);

console.log('0. Количество оценок у каждого студента:');
console.table(marksCountPerStudent(allStudents, allMarks));

function marksCountPerStudent(students, marks) {
    return students
        .map((student) => {
            const count = marks.filter(markByStudent(student)).length;
            const fio = getFIOShort(student);
            return {
                fio,
                count,
            };
        });
}
