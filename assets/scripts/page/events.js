'use strict'

const onClickToggleAcctPg = () => {
  $('#bucket-list-page').toggleClass('d-none')
  $('#accounts-page').toggleClass('d-none')
}

const addHandlers = () => {
  $('#acct-pg-btn').on('click', onClickToggleAcctPg)
}

module.exports = {
  addHandlers
}
