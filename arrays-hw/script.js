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

function mostPopularGenderStudents() {
    const fem = allStudents.filter((item) => item.gender === "f").length
    const man = allStudents.filter((item) => item.gender === "m").length
    if (fem > man) {
        return 'f';
    }
    else if (man > fem) {
        return 'm';
    }
    else {
        return '=';
    }

}

console.log(mostPopularGenderStudents());

function countOfStudent(group) {
    return allStudents.filter((item) => item.group === group).length
}

console.log(countOfStudent('АТП-071'));
console.log(countOfStudent('АТП-081'));

function numberOfFive(group) {
    const studIDs = allStudents
        .filter((item) => item.group === group)
        .map((item) => item.id);
    return allMarks
        .filter((item) => item.mark === 5)
        .filter((item) => studIDs.includes(item.studentId))
        .length
}
console.log(numberOfFive("ФК-071"))

/**
 * 
 * @param {Student[]} student 
 * @returns {string[]}
 */
function makeGroupList(student) {
    return allStudents
        .map(student => student.group)
        .reduce(
            (groups, item) => {
                if (!groups.includes(item))
                    groups.push(item)
                return groups;
            },
            []
        );
}

function averageMarkByStudent(student) {
    return average(
        allMarks
            .filter(markByStudent(student))
            .map(mark => mark.mark)
    )
}

console.log(averageMarkByStudent(allStudents[0]));

function findTheBestGroup() {
    const groupList = makeGroupList(allStudents)
    const tmp = groupList
        .map(group => {
            return {
                group: group,
                average: average(
                    allStudents
                        .filter(getStudentByGroup(group))
                        .map(student => averageMarkByStudent(student))
                )
            }
        })
        .sort((a, b) => b.average - a.average)
    console.log(tmp)
}


findTheBestGroup();