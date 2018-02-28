const _ = require('lodash')

module.exports.isNatural = function(value) {
    return (value >= 0.0) && (Math.floor(value) === value) && value !== Infinity;
}

module.exports.getSalesTotal = function (subTotal, state) {
    // Setup look up table for tax percentage
    var taxesByState = {
        HI: 4.5,
        TX: 8.25,
        AL: 8.5,
        AK: 7.5,
        AR: 11.25,
        AZ: 10.9,
        CA: 10.25,
        CO: 11.2,
        CT: 6.4,
        DE: 0,
        FL: 8.0,
        GA: 8.9,
        ID: 9.0,
        IL: 11.0,
        IN: 7.0,
        IA: 7.0,
        KS: 10.6,
        KY: 11.66,
        LA: 12.0,
        ME: 5.5,
        MD: 6.0,
        MA: 14.88,
        MI: 6,
        MN: 6.9,
        MS: 7,
        MO: 5.475,
        MT: 0,
        NE: 7.5,
        NV: 4.6,
        NH: 0,
        NM: 7,
        NY: 4,
        NC: 4.8,
        ND: 5,
        OH: 5.8,
        OR: 0,
        PA: 6,
        RI: 7,
        SC: 6,
        SD: 4,
        TN: 7,
        UT: 4.7,
        VT: 6,
        VA: 6,
        WA: 6.5,
        WV: 6,
        WI: 4,
        WY: 5,
        SOJ: 100
    }
    // Validate arguments
    if ( ! taxesByState.hasOwnProperty(state)) {
        return 'Argument state as '+state+' is not supported'
    }
    // Use state to get tax percentage
    var taxPercent = taxesByState[state];
    // Run calculation using state tax percentage
    var taxAmount = subTotal * ( taxPercent / 100 );
    return _.round(subTotal + taxAmount, 2)
}