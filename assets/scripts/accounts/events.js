'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAccounts = function () {
  api.onGetAccounts()
    .then(ui.onGetAccountSuccess)
    .catch(ui.onGetAccountFailure)
}

const onCreateAccount = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    .then(() => { onGetAccounts() })
    .catch(ui.onCreateAccountFailure)
}

const onUpdateAccount = function (event) {
  event.preventDefault()
  console.log('Money, Money, Money!')
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  console.log(formData)
  console.log(id)
  $('#all' + id).hide()
  api.onUpdateAccount(id, formData)
    .then(ui.onUpdateAccountSuccess)
    .then(onGetAccounts)
    .catch(ui.onUpdateAccountFailure)
}

const onDeleteAccount = function () {
  event.preventDefault()
  const accountId = $(event.target).data('id')
  $('#all' + accountId).hide()
  api.onDeleteAccount(accountId)
    .then(ui.onDeleteAccountSuccess)
    .catch(ui.onDeleteAccountFailure)
}

const showUpdateForm = function (event) {
  const accountId = $(event.target).data('id')
  $('#' + accountId).toggle()
}
module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount,
  onDeleteAccount,
  showUpdateForm
}
