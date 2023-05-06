const car1 = prompt("Informe o nome do primeiro carro:")
const vel1 = prompt("Informe a velocidade dele")

const car2 = prompt("Informe o nome do segundo carro:")
const vel2 = prompt("Informe a velocidade dele")

if (vel1 > vel2) {
    alert(car1 + " é mais rápido do que " + car2)
} else if (vel2 > vel1) {
    alert(car2 + " é mais rápido do que " + car1)
} else {
    alert(car1 + " e " + car2 + " possuem velocidades iguais.")
}