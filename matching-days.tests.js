describe('The Matching Days Function', function () {
    describe('Should return the day', function () {
        it('should return Friday', function () {
            let matchDays = matchingDays();
            assert.equal(matchDays.getDayOne('2021-01-01'), 'Friday');
        });
        it('should return Monday', function () {
            let matchDays = matchingDays();
            assert.equal(matchDays.getDayOne('2021-7-12'), 'Monday');
        });
        it('should return Tuesday', function () {
            let matchDays = matchingDays();
            assert.equal(matchDays.getDayTwo('2021-06-08'), 'Tuesday');
        });
        it('should return Sunday', function () {
            let matchDays = matchingDays();
            assert.equal(matchDays.getDayTwo('2021-10-10'), 'Sunday');
        });
    });
     describe('Should return the correct color', function () {
        it('should return firstColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('2010-05-02')
            matchDays.getDayTwo('2005-11-08')
            assert.equal(matchDays.sameDayOne('2010-05-02', '2005-11-08'), 'firstColor');
        });
        it('should return firstColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('1990-07-02')
            matchDays.getDayTwo('2015-11-08')
            assert.equal(matchDays.sameDayOne('1990-07-02', '2015-11-08'), 'firstColor');
        });
        it('should return matchColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('2012-05-02')
            matchDays.getDayTwo('2012-05-02')
            assert.equal(matchDays.sameDayOne('2012-05-02', '2012-05-02'), 'matchColor');
        });
        it('should return secondColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('2008-09-09')
            matchDays.getDayTwo('2014-12-08')
            assert.equal(matchDays.sameDayTwo('2008-09-09', '2014-12-08'), 'secondColor');
        });
        it('should return secondColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('2001-01-09')
            matchDays.getDayTwo('2025-12-08')
            assert.equal(matchDays.sameDayTwo('2001-01-09', '2025-12-08'), 'secondColor');
        });
        it('should return matchColor', function () {
            let matchDays = matchingDays();
            matchDays.getDayOne('2011-07-02')
            matchDays.getDayTwo('2011-07-02')
            assert.equal(matchDays.sameDayOne('2011-07-02', '2011-07-02'), 'matchColor');
        });
    });
});