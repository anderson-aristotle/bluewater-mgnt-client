'use strict'

const config = require('../config.js')
const store = require('../store.js')

const onCreateAccount = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const onGetAccounts = function () {
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateAccount = function (id, formData) {
  console.log('Update API is working!')
  return $.ajax({
    url: config.apiUrl + `/accounts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteAccount = function (id) {
  return $.ajax({
    url: config.apiUrl + '/accounts/' + `${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount,
  deleteAccount
}
