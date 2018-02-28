const expect = require('chai').expect
const Exposure = require('../index')

describe('Exposure', function() {
    describe('isNatural()', function() {
        it('returns true', function () {
            expect(Exposure.isNatural(2)).to.be.true
            expect(Exposure.isNatural(0)).to.be.true
        })
        it('returns false()', function() {
            expect(Exposure.isNatural(-2)).to.be.false
            expect(Exposure.isNatural(2.4)).to.be.false
            expect(Exposure.isNatural('')).to.be.false
            expect(Exposure.isNatural(3/4)).to.be.false
            expect(Exposure.isNatural(null)).to.be.false
            expect(Exposure.isNatural()).to.be.false
        })

    })
    describe('getSalesTax()', function () {
        it('returns a number for all supported states', function() {
            [ 
                "SOJ",
                "AK",
                "AL",
                "AR",
                "AZ",
                "CA",
                "CO",
                "CT",
                "DE",
                "FL",
                "GA",
                "HI",
                "IA",
                "ID",
                "IL",
                "IN",
                "KS",
                "KY",
                "LA",
                "MA",
                "MD",
                "ME",
                "MI",
                "MN",
                "MO",
                "MS",
                "MT",
                "NC",
                "ND",
                "NE",
                "NH",
                "NM",
                "NV",
                "NY",
                "OH",
                "OR",
                "PA",
                "RI",
                "SC",
                "SD",
                "TN",
                "TX",
                "UT",
                "VA",
                "VT",
                "WA",
                "WI",
                "WV",
                "WY"].forEach(function(state){
                    var result = Exposure.getSalesTotal(47, state)
                    expect(result).to.be.a('number')
                })
            
        })

        it('returns error message for unsupported state', function () {
            var result = Exposure.getSalesTotal(47, '')
            expect(result).to.be.equal('Argument state as  is not supported')
            result = Exposure.getSalesTotal(47, 'LL')
            expect(result).to.be.equal('Argument state as LL is not supported')
            var unsupported = ['GG', 'Jjohn', null, 342, 47, 'Exon']
            unsupported.forEach(function(value){
                result = Exposure.getSalesTotal(500, value)
                expect(result).to.be.equal('Argument state as '+value+' is not supported')
            })
        });
        it('returns total for Hawaii', function () {
            var result = Exposure.getSalesTotal(47, 'HI')
            expect(result).to.be.equal(49.12)
            result = Exposure.getSalesTotal(72, 'HI')
            expect(result).to.be.equal(75.24)
        })
        it('returns total for Texas', function () {
            var result = Exposure.getSalesTotal(47, 'TX')
            expect(result).to.be.equal(50.88)
        })
        it('returns total for Alabama', function () {
            var result = Exposure.getSalesTotal(56, 'AL')
            expect(result).to.be.equal(60.76)
        })
        it('return total for Alaska', function () {
            var result = Exposure.getSalesTotal(12, 'AK')
            expect(result).to.be.equal(12.90)
        })
        it('return total for Arizona', function () {
            var result = Exposure.getSalesTotal(12, 'AZ')
            expect(result).to.be.equal(13.31)
        })
        it('return total for Arkansas', function () {
            var result = Exposure.getSalesTotal(90, 'AR')
            expect(result).to.be.equal(100.13)
        })
        it('return total for California', function () {
            var result = Exposure.getSalesTotal(1, 'CA')
            expect(result).to.be.equal(1.10)
        })
        it('return total for Colorado', function () {
            var result = Exposure.getSalesTotal(2, 'CO')
            expect(result).to.be.equal(2.22)
        })
        it('return total for Connecticut', function () {
            var result = Exposure.getSalesTotal(3, 'CT')
            expect(result).to.be.equal(3.19)
        })
        it('return total for Delaware', function () {
            var result = Exposure.getSalesTotal(4, 'DE')
            expect(result).to.be.equal(4.00)
        })
        it('return total for Florida', function () {
            var result = Exposure.getSalesTotal(4, 'FL')
            expect(result).to.be.equal(4.32)
        })
        it('return total for Georgia', function () {
            var result = Exposure.getSalesTotal(5, 'GA')
            expect(result).to.be.equal(5.45)
        })
        it('return total for Idaho', function () {
            var result = Exposure.getSalesTotal(6, 'ID')
            expect(result).to.be.equal(6.54)
        })
        it('return total for Illinois', function () {
            var result = Exposure.getSalesTotal(7, 'IL')
            expect(result).to.be.equal(7.77)
        })
        it('return total for Indiana', function () {
            var result = Exposure.getSalesTotal(8, 'IN')
            expect(result).to.be.equal(8.56)
        })
        it('return total for Iowa', function () {
            var result = Exposure.getSalesTotal(9, 'IA')
            expect(result).to.be.equal(9.63)
        })
        it('return total for Kansas', function () {
            var result = Exposure.getSalesTotal(10, 'KS')
            expect(result).to.be.equal(11.06)
        })
        it('return total for Kentucky', function () {
            var result = Exposure.getSalesTotal(11, 'KY')
            expect(result).to.be.equal(12.28)
        })
        it('return total for Louisiana', function () {
            var result = Exposure.getSalesTotal(12, 'LA')
            expect(result).to.be.equal(13.44)
        })
        it('return total for Maine', function () {
            var result = Exposure.getSalesTotal(13, 'ME')
            expect(result).to.be.equal(13.72)
        })
        it('return total for Massachusetts', function () {
            var result = Exposure.getSalesTotal(14, 'MA')
            expect(result).to.be.equal(16.08)
        })
        it('return total for Michigan', function () {
            var result = Exposure.getSalesTotal(15, 'MI')
            expect(result).to.be.equal(15.90)
        })
        it('return total for Minnesota', function () {
            var result = Exposure.getSalesTotal(16, 'MN')
            expect(result).to.be.equal(17.10)
        })
        it('return total for Mississippi', function () {
            var result = Exposure.getSalesTotal(17, 'MS')
            expect(result).to.be.equal(18.19)
        })
        it('return total for Missouri', function () {
            var result = Exposure.getSalesTotal(18, 'MO')
            expect(result).to.be.equal(18.99)
        })
        it('return total for Montana', function () {
            var result = Exposure.getSalesTotal(19, 'MT')
            expect(result).to.be.equal(19.00)
        })
        it('return total for Nebraska', function () {
            var result = Exposure.getSalesTotal(20, 'NE')
            expect(result).to.be.equal(21.50)
        })
        it('return total for Nevada', function () {
            var result = Exposure.getSalesTotal(21, 'NV')
            expect(result).to.be.equal(21.97)
        })
        it('return total for New Hampshire', function () {
            var result = Exposure.getSalesTotal(22, 'NH')
            expect(result).to.be.equal(22.00)
        })
        it('return total for New Mexico', function () {
            var result = Exposure.getSalesTotal(23, 'NM')
            expect(result).to.be.equal(24.61)
        })
        it('return total for New York', function () {
            var result = Exposure.getSalesTotal(24, 'NY')
            expect(result).to.be.equal(24.96)
        })
        it('return total for North Carolina', function () {
            var result = Exposure.getSalesTotal(25, 'NC')
            expect(result).to.be.equal(26.20)
        })
        it('return total for North Dakota', function () {
            var result = Exposure.getSalesTotal(26, 'ND')
            expect(result).to.be.equal(27.30)
        })
        it('return total for Ohio', function () {
            var result = Exposure.getSalesTotal(27, 'OH')
            expect(result).to.be.equal(28.57)
        })
        it('return total for Oregon', function () {
            var result = Exposure.getSalesTotal(28, 'OR')
            expect(result).to.be.equal(28.00)
        })
        it('return total for Pennsylvania', function () {
            var result = Exposure.getSalesTotal(29, 'PA')
            expect(result).to.be.equal(30.74)
        })
        it('return total for Rhode Island', function () {
            var result = Exposure.getSalesTotal(30, 'RI')
            expect(result).to.be.equal(32.10)
        })
        it('return total for South Carolina', function () {
            var result = Exposure.getSalesTotal(31, 'SC')
            expect(result).to.be.equal(32.86)
        })
        it('return total for South Dakota', function () {
            var result = Exposure.getSalesTotal(32, 'SD')
            expect(result).to.be.equal(33.28)
        })
        it('return total for Tennessee', function () {
            var result = Exposure.getSalesTotal(33, 'TN')
            expect(result).to.be.equal(35.31)
        })
        it('return total for Utah', function () {
            var result = Exposure.getSalesTotal(34, 'UT')
            expect(result).to.be.equal(35.60)
        })
        it('return total for Vermont', function () {
            var result = Exposure.getSalesTotal(35, 'VT')
            expect(result).to.be.equal(37.10)
        })
        it('return total for Virginia', function () {
            var result = Exposure.getSalesTotal(36, 'VA')
            expect(result).to.be.equal(38.16)
        })
        it('return total for Washington', function () {
            var result = Exposure.getSalesTotal(37, 'WA')
            expect(result).to.be.equal(39.41)
        })
        it('return total for West Virginia', function () {
            var result = Exposure.getSalesTotal(38, 'WV')
            expect(result).to.be.equal(40.28)
        })
        it('return total for Wisconsin', function () {
            var result = Exposure.getSalesTotal(39, 'WI')
            expect(result).to.be.equal(40.56)
        })
        it('return total for Wyoming', function () {
            var result = Exposure.getSalesTotal(40, 'WY')
            expect(result).to.be.equal(42.00)
        })
        it('return total for STATE OF JOHN. I am missing a state, so I made you one :D ', function () {
            var result = Exposure.getSalesTotal(40, 'SOJ')
            expect(result).to.be.equal(80.00)
        })
    })
})

