const primeiroNome = prompt("Insira o seu primeiro nome:")
const sobrenome = prompt("Insira o seu sobrenome:")
const campoDeEstudo = prompt("Insira o seu campo de estudo:")
const anoDoNascimento = prompt("Insira seu ano de nascimento:")

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome completo: " + primeiroNome + " " + sobrenome +
  "\nCampo de estudo: " + campoDeEstudo +
  "\nIdade: " + (2023 - anoDoNascimento)
  )