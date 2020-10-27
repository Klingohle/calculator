const $ = elem => document.querySelector(elem)
const $$ = () => document.querySelectorAll(elem)
const DISPLAY = $('input[type="text"]')

const init = () => {
    addButtonEventListeners()
}

const calculate = () => {
    DISPLAY.value = eval(DISPLAY.value)
}

function pi() {
    DISPLAY.value += Math.PI.toFixed(2)
}

function euler() {
    DISPLAY.value += Math.E.toFixed(2)
}

const addButtonEventListeners = () => {
    $('input[id="1"]').addEventListener('click', () => (DISPLAY.value += '1'))
    $('input[id="2"]').addEventListener('click', () => (DISPLAY.value += '2'))
    $('input[id="3"]').addEventListener('click', () => (DISPLAY.value += '3'))
    $('input[id="4"]').addEventListener('click', () => (DISPLAY.value += '4'))
    $('input[id="5"]').addEventListener('click', () => (DISPLAY.value += '5'))
    $('input[id="6"]').addEventListener('click', () => (DISPLAY.value += '6'))
    $('input[id="7"]').addEventListener('click', () => (DISPLAY.value += '7'))
    $('input[id="8"]').addEventListener('click', () => (DISPLAY.value += '8'))
    $('input[id="9"]').addEventListener('click', () => (DISPLAY.value += '9'))
    $('input[id="0"]').addEventListener('click', () => (DISPLAY.value += '0'))

    $('input[id="Del"]').addEventListener('click', () => (DISPLAY.value = ''))
    $('input[id="+"]').addEventListener('click', () => (DISPLAY.value += '+'))
    $('input[id="-"]').addEventListener('click', () => (DISPLAY.value += '-'))
    $('input[id="*"]').addEventListener('click', () => (DISPLAY.value += '*'))
    $('input[id="/"]').addEventListener('click', () => (DISPLAY.value += '/'))
    $('input[id="("]').addEventListener('click', () => (DISPLAY.value += '('))
    $('input[id=")"]').addEventListener('click', () => (DISPLAY.value += ')'))
    $('input[id="."]').addEventListener('click', () => (DISPLAY.value += '.'))
    $('input[id="%"]').addEventListener('click', () => (DISPLAY.value += '%'))
    $('input[id="PI"]').addEventListener('click', () => pi())
    $('input[id="euler"]').addEventListener('click', () => euler())

    $('input[id="sqrt"]').addEventListener('click', () => (DISPLAY.value = Math.sqrt(DISPLAY.value).toFixed(2)))
}

init()
