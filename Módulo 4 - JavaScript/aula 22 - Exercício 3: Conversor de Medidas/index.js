const valor = prompt("Insira uma medida em metros:")

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. milímetro (mm)" +
    "\n2. centímetro (cm)" +
    "\n3. decímetro (dm)" +
    "\n4. decâmetro (dam)" +
    "\n5. hectômetro (hm)" +
    "\n6. quilômetro (km)"
    )

switch (unidade) {
    case "1": 
        alert("Resultado: " + unidade + "m = " + valor * 1000 + "mm")
        break
    case "2": 
        alert("Resultado: " + unidade + "m = " + valor * 100 + "cm")
        break
    case "3": 
        alert("Resultado: " + unidade + "m = " + valor * 10 + "dm")
        break
    case "4": 
        alert("Resultado: " + unidade + "m = " + valor / 10 + "dam")
        break
    case "5": 
        alert("Resultado: " + unidade + "m = " + valor / 100 + "hm")
        break
    case "6": 
        alert("Resultado: " + unidade + "m = " + valor / 1000 + "km")
        break
    default: alert("Opção inválida")
}