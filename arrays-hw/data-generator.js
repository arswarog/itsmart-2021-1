const fios = [
    'М Беляков Аверкий Егорович',
    'М Муравьёв Нелли Максимович',
    'М Исаков Ростислав Святославович',
    'М Галкин Богдан Евгеньевич',
    'М Зыков Кондратий Георгиевич',
    'М Савин Зиновий Парфеньевич',
    'М Архипов Агафон Лаврентьевич',
    'М Киселёв Давид Львович',
    'М Чернов Мечеслав Пантелеймонович',
    'М Кузнецов Остап Матвеевич',
    'М Мухин Артур Протасьевич',
    'М Семёнов Тимофей Рудольфович',
    'М Дроздов Лавр Валентинович',
    'М Попов Терентий Александрович',
    'М Кабанов Людвиг Константинович',
    'М Никифоров Артем Алексеевич',
    'М Васильев Мирослав Ростиславович',
    'М Пестов Рубен Максович',
    'М Миронов Денис Якунович',
    'М Филатов Альфред Натанович',
    'М Козлов Ким Глебович',
    'М Одинцов Харитон Агафонович',
    'М Пономарёв Кирилл Евсеевич',
    'М Третьяков Владлен Антонович',
    'М Исаков Захар Валерьянович',
    'М Галкин Валерий Анатольевич',
    'М Ларионов Адольф Святославович',
    'М Кудряшов Климент Яковович',
    'М Дементьев Корнелий Степанович',
    'М Моисеев Гурий Романович',
    'М Веселов Даниил Мэлорович',
    'М Лыткин Геннадий Станиславович',
    'М Лихачёв Гавриил Вениаминович',
    'М Блинов Лука Федорович',
    'М Макаров Юстин Арсеньевич',
    'М Тетерин Флор Тимофеевич',
    'М Константинов Вячеслав Михаилович',
    'М Савельев Василий Эльдарович',
    'М Осипов Виктор Вадимович',
    'М Лыткин Эльдар Гордеевич',
    'М Смирнов Адриан Эдуардович',
    'М Зайцев Гарри Семёнович',
    'М Лыткин Августин Николаевич',
    'М Панов Никифор Дмитриевич',
    'М Воробьёв Клемент Антонинович',
    'М Панфилов Бенедикт Глебович',
    'М Панов Платон Вячеславович',
    'М Тихонов Вадим Тихонович',
    'М Красильников Александр Яковлевич',
    'М Петухов Максим Лаврентьевич',
    'М Новиков Устин Геласьевич',
    'М Попов Нинель Фролович',
    'М Рябов Исак Кириллович',
    'М Носов Гарри Лукьевич',
    'М Прохоров Эльдар Львович',
    'М Доронин Лука Давидович',
    'М Михайлов Тимофей Александрович',
    'М Шаров Панкратий Лукьянович',
    'М Пестов Демьян Эдуардович',
    'М Савин Августин Серапионович',
    'М Ильин Август Олегович',
    'М Крюков Евдоким Пётрович',
    'М Туров Давид Филатович',
    'М Кулаков Нинель Богданович',
    'М Горшков Натан Степанович',
    'М Кудряшов Артем Сергеевич',
    'М Белоусов Эльдар Михайлович',
    'М Самойлов Аввакум Святославович',
    'М Колесников Вилли Иосифович',
    'М Пономарёв Ермак Всеволодович',
    'М Титов Харитон Яковлевич',
    'М Молчанов Иосиф Борисович',
    'М Чернов Александр Якунович',
    'М Русаков Богдан Геннадьевич',
    'М Суворов Денис Пантелеймонович',
    'М Зиновьев Борис Евсеевич',
    'М Крюков Казимир Валерьянович',
    'М Миронов Аввакуум Робертович',
    'М Агафонов Юстин Михайлович',
    'М Гаврилов Мартин Рубенович',
    'Ж Богданова Жанна Константиновна',
    'Ж Ефимова Клара Александровна',
    'Ж Тетерина Фелиция Тимуровна',
    'Ж Никитина Арина Германовна',
    'Ж Голубева Сабина Мироновна',
    'Ж Самойлова Ветта Тимуровна',
    'Ж Лобанова Валентина Юлиановна',
    'Ж Белоусова Винетта Геннадьевна',
    'Ж Шашкова Муза Германновна',
    'Ж Крылова Оксана Евсеевна',
    'Ж Николаева Патрисия Макаровна',
    'Ж Козлова Алира Вениаминовна',
    'Ж Воронцова Христина Пётровна',
    'Ж Горбачёва Лика Альвиановна',
    'Ж Максимова Златослава Мэлсовна',
    'Ж Красильникова Юлиана Эльдаровна',
    'Ж Бобылёва Элиза Станиславовна',
    'Ж Дроздова Береслава Игоревна',
    'Ж Никитина Эмма Филипповна',
    'Ж Одинцова Милолика Федосеевна',
    'Ж Субботина Христина Александровна',
    'Ж Исаева Элла Романовна',
    'Ж Зуева Аза Прокловна',
    'Ж Емельянова Вилора Кимовна',
    'Ж Ситникова Лина Руслановна',
    'Ж Зуева Яна Пётровна',
    'Ж Петухова Элоиза Валерьяновна',
    'Ж Сазонова Элизабет Адольфовна',
    'Ж Максимова Арьяна Рубеновна',
    'Ж Голубева Сабрина Тимуровна',
    'Ж Симонова Ирэн Игоревна',
    'Ж Фомина Милослава Лукьяновна',
    'Ж Муравьёва Станислава Лукьевна',
    'Ж Сафонова Арьяна Альбертовна',
    'Ж Богданова Фаня Германовна',
    'Ж Федосеева Изольда Иринеевна',
    'Ж Виноградова Уля Макаровна',
    'Ж Симонова Властилина Михайловна',
    'Ж Кулакова Лира Львовна',
    'Ж Григорьева Иоланта Дмитриевна',
    'Ж Агафонова Лея Васильевна',
    'Ж Колесникова Франсуаза Митрофановна',
    'Ж Ефремова Виргиния Тихоновна',
    'Ж Попова Нелли Денисовна',
    'Ж Лазарева Муза Еремеевна',
    'Ж Капустина Феодосия Игоревна',
    'Ж Пономарёва Ландыш Антониновна',
    'Ж Пахомова Магда Лукьевна',
    'Ж Осипова Кармелитта Филипповна',
    'Ж Вишнякова Дарья Улебовна',
    'Ж Журавлёва Магдалина Наумовна',
    'Ж Лазарева Магдалина Рубеновна',
    'Ж Веселова Чеслава Степановна',
    'Ж Захарова Эллада Адольфовна',
    'Ж Калинина Регина Куприяновна',
    'Ж Артемьева Хана Гордеевна',
    'Ж Соловьёва Амелия Степановна',
    'Ж Голубева Ванда Пантелеймоновна',
    'Ж Королёва Ирина Германновна',
    'Ж Лыткина Глафира Борисовна',
    'Ж Кудрявцева Эллина Артемовна',
    'Ж Назарова Вера Якуновна',
    'Ж Ширяева Лея Степановна',
    'Ж Колесникова Аурелия Макаровна',
    'Ж Щукина Эрика Ярославовна',
    'Ж Кононова Келен Романовна',
    'Ж Бирюкова Альвина Вениаминовна',
    'Ж Галкина Радослава Тихоновна',
    'Ж Архипова Мария Станиславовна',
    'Ж Кондратьева Каторина Антоновна',
    'Ж Воронова Харитина Геннадьевна',
    'Ж Федотова Индира Степановна',
    'Ж Полякова Верона Митрофановна',
    'Ж Овчинникова Лилу Богуславовна',
    'Ж Кузнецова Элизабет Федоровна',
    'Ж Зиновьева Силика Романовна',
    'Ж Горшкова Милда Христофоровна',
    'Ж Селезнёва Эдита Германовна',
    'Ж Шашкова Марфа Геннадиевна',
    'Ж Смирнова Радослава Ярославовна',
];

const groups = [
    'АТП-071',
    'АТП-081',
    'УТС-071',
    'УТС-081',
    'ФК-071',
];

let ai = 1;
const students = fios
    .map((name) => {
        const parts = name.split(' ');
        return {
            gender: parts[0] === 'Ж' ? 'f' : 'm',
            lastname: parts[1],
            firstname: parts[2],
            patronymic: parts[3],
        };
    })
    .sort((a, b) => Math.random() - 0.5)
    .map((student, id) => {
        student.id = ai++;
        student.group = groups[Math.floor(Math.random() * groups.length)];
        return student;
    })
    .filter(() => Math.random() < 0.9)
    .map(
        ({
             id,
             firstname,
             lastname,
             patronymic,
             group,
             gender,
         }) => ({
            id,
            lastname,
            firstname,
            patronymic,
            gender,
            group,
        })
    );

console.log(students);
console.log(formatJSArray(students));

const marks = [];

students.forEach(student => {
    const studentMarksCount = Math.floor(Math.random() * 10);
    const createMark = markGenerator(new Date(), student.id);

    for (let i = 0; i < studentMarksCount; i++)
        marks.push(createMark(marks.length + 1));
});

console.log(marks);
console.log(formatJSArray(marks));

/**
 * Создать оценку
 * @param {Date} baseDate
 * @param {number} studentId
 */
function markGenerator(baseDate, studentId) {
    const baseTimestamp = baseDate.getTime();
    /**
     * Создать оценку
     * @param {number} id
     * @return Mark
     */
    return (id) => {
        const mark = Math.floor(Math.random() * 4 + 2);
        const date = new Date(baseTimestamp - Math.random() * 365 * 86_400_000);
        return {
            id,
            studentId,
            date: date.toLocaleDateString('ru'),
            mark,
        };
    };
}

/**
 * Отформатировать массив
 * @param data
 * @return {string}
 */
function formatJSArray(data) {
    return JSON
        .stringify(data, null, 2)
        .replaceAll(/"(\w+)":/g, '$1:')
        .replaceAll(/\s+/g, ' ')
        .replaceAll(/\[/g, '[\n')
        .replaceAll(/\]/g, '\n]')
        .replaceAll(/}, /gm, '},\n')
        .replaceAll(/\s+\{/gm, '\n  {');
}
