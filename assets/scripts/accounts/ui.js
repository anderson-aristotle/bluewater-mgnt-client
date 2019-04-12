'use strict'

const store = require('../store.js')
const formatAccounts = require('../templates/accounts.handlebars')

const showOwnership = () => {
  $(`.list-item[data-owner=${store.user._id}]`).show()
  $('.form-update').hide()
  for (let i = 0; i < store.accounts.length; i++) {
    if (store.accounts[i].boolean === true) {
      const target = store.accounts[i]._id
      $('#title' + target).css('text-decoration', 'line-through')
      $('#description' + target).css('text-decoration', 'line-through')
    }
  }
}

const onCreateAccountSuccess = (responseData) => {
  $('#user-message').text('You have successfully added an account!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  if (name === 1) {
    return 'Private Equity'
  } else {
    if (name === 2) {
      return 'Investment Fund'
    } else {
      if (name === 3) {
        return 'Foundation Donation'
      }
    }
  }
}

const onCreateAccountFailure = () => {
  $('#user-message').text('Failed to create an account! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onGetAccountSuccess = function (responseData) {
  console.log('works fine')
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

const onUpdateAccountSuccess = function (responseData) {
  console.log('Update my accounts $$$$')
  $('#user-message').html('Account Updated!')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const onUpdateAccountFailure = () => {
  console.log('my accounts are loading...')
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

// const deleteListItemSuccess = function () {
//   $('#user-message').html('ENTRY DELETED')
//   setTimeout(function () {
//     $('#user-message').text('')
//   }, 2000)
// }
//
// const deleteListItemFailure = () => {
//   $('#user-message').text('Failed to delete Bucket list Item! :( Please try again.')
//   setTimeout(function () {
//     $('#user-message').text('')
//   }, 2000)
// }

module.exports = {
  onCreateAccountSuccess,
  onCreateAccountFailure,
  onGetAccountSuccess,
  onGetAccountsFailure,
  onUpdateAccountSuccess,
  onUpdateAccountFailure
}
