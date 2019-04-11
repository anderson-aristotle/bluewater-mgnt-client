'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  console.log('data is fun')
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    .then(onGetAccounts)
    .catch(ui.onCreateAccountFailure)
}

const onGetAccounts = function () {
  api.onGetAccounts()
    .then(ui.getAccountSuccess)
    .catch(ui.getAccountFailure)
}

module.exports = {

  onCreateAccount,
  onGetAccounts
}
