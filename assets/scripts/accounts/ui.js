'use strict'

const store = require('../store.js')
const formatAccounts = require('../templates/accounts.handlebars')

const showOwnership = () => {
  $(`.my-account[data-owner=${store.user._id}]`).show()
}

const onCreateAccountSuccess = (responseData) => {
  $('#user-message').text('You have successfully added an account!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onCreateAccountFailure = () => {
  $('#user-message').text('Failed to create an account! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onGetAccountSuccess = (responseData) => {
  store.accounts = responseData.accounts
  const formattedAccounts = formatAccounts({accounts: store.accounts})
  $('#get-accounts').html(formattedAccounts)
  $('form').trigger('reset')
  showOwnership()
}

const onGetAccountsFailure = () => {
  $('#user-message').text('Failed to get Bucket list Items! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateAccountSuccess = (responseData) => {
  console.log('Update my accounts $$$$')
  $('#user-message').html('Account Updated!')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateAccountFailure = () => {
  console.log('my accounts are loading...')
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onDeleteAccountSuccess = () => {
  $('#user-message').html('ENTRY DELETED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const onDeleteAccountFailure = () => {
  $('#user-message').text('Failed to delete Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

module.exports = {
  onCreateAccountSuccess,
  onCreateAccountFailure,
  onGetAccountSuccess,
  onGetAccountsFailure,
  onUpdateAccountSuccess,
  onUpdateAccountFailure,
  onDeleteAccountSuccess,
  onDeleteAccountFailure
}
