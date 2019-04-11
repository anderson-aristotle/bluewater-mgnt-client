const accountsEvents = require('./accounts/events.js')
const authEvents = require('./authentication/events.js')
const listItemsEvents = require('./list-items/events.js')
const pageEvents = require('./page/events.js')

$(() => {
  $('.post-login').hide()
  pageEvents.addHandlers()
  // authentication events
  $('.modal').on('hidden.bs.modal', function () { $(this).find('form').trigger('reset') })
  $('#form-sign-up').on('submit', authEvents.onSignUp)
  $('#form-sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#go-to-sign-up-button').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
  })
  $('#go-to-sign-in-button').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
    $('form').trigger('reset')
  })
  $('#btn-change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // bucketlist-resource
  $('#form-create-list-items').on('submit', listItemsEvents.onCreateListItem)
  $('#get-list-items').on('submit', '.form-update', listItemsEvents.onUpdateListItem)
  $('#get-list-items').on('click', '.delete-button', listItemsEvents.onDeleteListItem)
  $('#get-list-items').on('click', '.list-title', listItemsEvents.showUpdateForm)

  // account-resource
  $('#form-create-accounts').on('submit', accountsEvents.onCreateAccount)
  $('#account-button').on('submit', '.form-update', accountsEvents.onUpdateAccount)
  $('#get-accounts').on('click', '.delete-button', accountsEvents.onDeleteAccount)
  $('#get-accounts').on('click', '.list-title', accountsEvents.showUpdateForm)
})
