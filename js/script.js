import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const inputName = document.querySelector('#name')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const name = inputName.value

    const weighOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weighOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result, name)
}


function displayResultMessage(result, name) {
    const message = `${name}, o Seu IMC é de ${result} a sua classificação é ${classificacao}`

    Modal.message.innerText = message
    Modal.open();
}
