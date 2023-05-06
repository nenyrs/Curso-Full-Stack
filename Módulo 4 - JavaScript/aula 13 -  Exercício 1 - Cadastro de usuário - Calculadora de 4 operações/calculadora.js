const valor1 = prompt ("Informe o primeiro número:")
const valor2 = prompt ("Informe o segundo número:")

const x = parseFloat(valor1)
const y = parseFloat(valor2)

const soma = x + y
const subtração = x - y
const multiplicação = x * y
const divisão = x / y

alert (
  "Resultados: \n"+
  "\nSoma: " + soma +
  "\nSubtração: " + subtração +
  "\nMultiplicação: " + multiplicação +
  "\nDivisão: " + divisão
)