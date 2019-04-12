// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const types = ['Private Equity', 'Investment Fund', 'Foundation Donation']

// this function will output the value account string type
// the '-1' helps locate an index value
const investmentType = value => types[+value - 1]

// investmentType(3)
// what will it output
// a string -

module.exports = investmentType
