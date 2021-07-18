
const file = `Вася,Васильев,5,2б
Иван,Иванов,4,4в`;

console.log(file)

console.log(
    file
        .split('\n')
        .map((item) => item.split(','))
        .map((item) => {
            return {
                name: item[0],
                firstname: item[1],
                rate: item[2],
                group: item[3],
            }
        })
)

console.log(
    file
        .split('\n')
        .map((item) => item.split(','))
        .map((item) => ({
            name: item[0],
            firstname: item[1],
            rate: item[2],
            group: item[3],
        }))
)

console.log(
    file
        .split('\n')
        .map((item) => item.split(','))
        .map(([
            name,
            firstname,
            rate,
            group
        ]) => ({
            name,
            firstname,
            rate,
            group,
        }))
)