$(document).ready(function() {
  $('.submit').click(function(event) {
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusEln = $('.status')
    statusEln.empty()

    if(subject.length >= 1) {
      statusEln.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusEln.append('<div>Subject is not valid</div>')
    }

    if(message.length >= 1) {
      statusEln.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusEln.append('<div>Message is not valid</div>')
    }

  })
})
