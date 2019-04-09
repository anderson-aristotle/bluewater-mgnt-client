'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createAccount(formData)
    .then(ui.createAccountSuccess)
    .catch(ui.createAccountFailure)
}

const addHandlers = function () {
  $('#create-acct-btn').on('click', onCreateAccount)
}
module.exports = {

  addHandlers
}
