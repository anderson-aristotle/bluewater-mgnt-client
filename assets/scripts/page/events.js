'use strict'
const events = require('../accounts/ui.js')
const api = require('../accounts/api.js')

const onClickToggleAcctPg = () => {
  $('#bucket-list-page').toggleClass('d-none')
  $('#accounts-page').toggleClass('d-none')
  api.onGetAccounts()
  events.showOwnership()
}

const addHandlers = () => {
  $('#acct-pg-btn').on('click', onClickToggleAcctPg)
}

module.exports = {
  addHandlers
}
