module.exports = () => {
  var input = document.getElementById('name')
  input.addEventListener('keypress', eventHandler, false)

  const message = {
    empty: 'The text field is empty. Please enter your name.',
    success: (input) => {
      return `Hello ${input}, nice to meet you!`
    }
  }

  function eventHandler (event) {
    if (event.keycode === 13 || event.which === 13) {
      writeToDocument(event)
    }
  }

  function writeToDocument (event) {
    const column = document.querySelector('.mui-col-md-6')
    const p = document.createElement('p')
    if (input.value.length === 0) {
      p.innerHTML = message.empty
      p.classList.add('mui--text-danger')
    } else {
      p.innerHTML = message.success(input.value)
    }
    column.appendChild(p)
    input.value = null
    event.preventDefault()
  }
}

