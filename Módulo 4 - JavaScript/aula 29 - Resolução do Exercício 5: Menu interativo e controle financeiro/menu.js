let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma das opões abaixo:" +
        "\n1. Opcão Um" +
        "\n2. Opcão Dois" +
        "\n3. Opcão Três" +
        "\n4. Opcão Quatro" +
        "\n5. Encerrar"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break

        case "2":
            alert("Você escolheu a opção 2")
            break

        case "3":
            alert("Você escolheu a opção 3")
            break

        case "4":
            alert("Você escolheu a opção 4")
            break   

        case "5":
            alert("Você escolheu encerrou.")
            alert("Encerrando...")
            break
            default:
                alert("Opção inválida.")
    }

} while (opcao !== "5")