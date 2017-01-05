module.exports = () => {
  var input = document.getElementById('name')
  input.addEventListener('keypress', eventHandler, false)

  const message = {
    empty: 'The text field is empty. Please enter your name.',
    success: (input) => {
      return `Hello ${input}, nice to meet you!`
    }
  }

  function eventHandler (e) {
    if (e.keyCode === 13 || e.which === 13) {
      writeToDocument(e)
    }
  }

  function writeToDocument (e) {
    const container = document.getElementById('message')
    const p = document.createElement('p')
    if (input.value.length === 0) {
      p.innerHTML = message.empty
      p.classList.add('mui--text-danger')
    } else {
      p.innerHTML = message.success(input.value)
    }
    container.innerHTML = null
    container.appendChild(p)
    input.value = null
    e.preventDefault()
  }
}

