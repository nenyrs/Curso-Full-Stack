const hc = prompt("Qual é o nome do seu personagem HC?")
const poderDeAtaque = prompt("Qual é o seu poder de ataque?")

const tank = prompt("Qual é o nome do seu personagem TANK?")
const poderDeDefesa = prompt("Qual é o seu poder de defesa?")
let pontosDeVida = prompt("Qual é a quantidade do seu HP?")
const possuiEscudo = prompt ("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert (hc + " causou " + danoCausado + " pontos de dano em " + tank)
alert (
    hc + "\n Poder de ataque: " + poderDeAtaque + "\n\n" +
    tank + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)