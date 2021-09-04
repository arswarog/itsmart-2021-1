describe('РЖД', () => {
    describe('findReisesForPassengers', () => {
        let rzhd;

        beforeEach(() => {
            return loadRzhdData()
                .then(data => rzhd = createRzhdSystem(data));
        })

        it('Москва в Новосибирск на 19.08.2021', () => {
            // act
            const result = rzhd.findReisesForPassengers(
                'Москва', 'Новосибирск', '19.08.2021',
                [makeStationFactory()('sdfdsf')]
            );

            // assert
            expect(result.length).to.eql(2);
            expect(result[0]).to.property('start', 'Москва')
            expect(result[0]).to.property('end', 'Новосибирск')
            expect(result[0]).to.property('routeId', '221')
        });

        it('Екатеринбург в Ростов-на-Дону 7.08.2021', () => {
            // act
            const result = rzhd.findReisesForPassengers(
                'Екатеринбург', 'Ростов-на-Дону', '7.08.2021'
            );

            // assert
            expect(result.length).to.eql(1);
            expect(result[0]).to.property('start', 'Екатеринбург')
            expect(result[0]).to.property('end', 'Ростов-на-Дону')
            expect(result[0]).to.property('routeId', '414')
        });

        it('Екатеринбург в Ростов-на-Дону 6.08.2021', () => {
            // act
            const result = rzhd.findReisesForPassengers(
                'Екатеринбург', 'Ростов-на-Дону', '6.08.2021'
            );

            // assert
            expect(result.length).to.eql(0);
        });
    });

    describe('buyTicket', () => {
        let rzhd;

        beforeEach(() => {
            return loadRzhdData()
                .then(data => rzhd = createRzhdSystem(data));
        })

        it('Москва в Новосибирск на 19.08.2021, маршрут 221', () => {
            // act
            const ticket = rzhd.buyTicket(
                'Москва', 'Новосибирск', '19.08.2021',
                '221',
                'Иванов Иван Иванович'
            );

            // assert
            expect(ticket).to.property('reisId', 81)
            expect(ticket).to.property('startStationId', 2)
            expect(ticket).to.property('endStationId', 29)
            expect(allTickets.length).to.eql(1)

        });
        it('Москва в Новосибирск на 19.08.2021, маршрут 222', () => {
            // act
            expect(() => rzhd.buyTicket(
                'Москва', 'Новосибирск', '19.08.2021',
                '222',
                'Иванов Иван Иванович'
            )).to.throw('Рейса не существует');

            // assert
            expect(allTickets.length).to.eql(0)
        });
    });
});
