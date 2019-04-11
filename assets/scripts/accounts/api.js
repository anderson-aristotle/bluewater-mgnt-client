'use strict'

const config = require('../config.js')
const store = require('../store.js')

const onCreateAccount = function (formData) {
  console.log('api create account')
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
  console.log('check status on get accounts')
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const updateAccount = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + `/accounts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  updateAccount,
  deleteAccount
}
