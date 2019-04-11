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
  console.log('data is success!')
  $('#user-message').text('You have successfully added an account!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const onCreateAccountFailure = () => {
  $('#user-message').text('Failed to create an account! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const getAccountSuccess = function (responseData) {
  console.log('get account success is activated')
  store.accounts = responseData.accounts
  const formattedListItems = formatAccounts({accounts: store.accounts})
  $('#get-accounts').html(formattedListItems)
  $('form').trigger('reset')
  showOwnership()
}

// const getListItemsFailure = () => {
//   $('#user-message').text('Failed to get Bucket list Items! :( Please try again.')
//   setTimeout(function () {
//     $('#user-message').text('')
//   }, 2000)
//   $('form').trigger('reset')
// }
//
// const updateListItemSuccess = function (responseData) {
//   $('#user-message').html('You have successfully updated your Bucket List')
//   $('.list-item').trigger('reset')
//   setTimeout(function () {
//     $('#user-message').text('')
//   }, 2000)
// }
//
// const updateListItemFailure = () => {
//   $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
//   $('.list-item').trigger('reset')
//   setTimeout(function () {
//     $('#user-message').text('')
//   }, 2000)
// }
//
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
  getAccountSuccess
}
