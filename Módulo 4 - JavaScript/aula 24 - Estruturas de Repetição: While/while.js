let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20 km/h")

    /* Nesse exemplo você pode adicionar um IF também.
    if (velocidade === 40) Chegando a 40 ele já vai printa O carro parou.
    break
    */
}

alert("O carro parou.")