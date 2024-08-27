// Variáveis globais
let numbers = JSON.parse(localStorage.getItem('numbers')) || [];

// Tela 1: Armazenar os números e ordená-los
if (document.getElementById('storeNumbersBtn')) {
    document.getElementById('storeNumbersBtn').addEventListener('click', function() {
        numbers = [
            parseInt(document.getElementById('num1').value),
            parseInt(document.getElementById('num2').value),
            parseInt(document.getElementById('num3').value),
            parseInt(document.getElementById('num4').value),
            parseInt(document.getElementById('num5').value),
            parseInt(document.getElementById('num6').value),
            parseInt(document.getElementById('num7').value),
            parseInt(document.getElementById('num8').value)
        ];

        if (numbers.includes(NaN)) {
            alert("Por favor, insira todos os 8 números.");
        } else {
            numbers.sort((a, b) => a - b);
            localStorage.setItem('numbers', JSON.stringify(numbers));
            alert("Números armazenados e ordenados com sucesso!");
            window.location.href = "Tela2.html";
        }
    });
}

// Tela 2: Buscar o número na lista ordenada
if (document.getElementById('searchBtn')) {
    document.getElementById('searchBtn').addEventListener('click', function() {
        const searchKey = parseInt(document.getElementById('searchKey').value);

        if (isNaN(searchKey)) {
            alert("Por favor, insira uma chave de busca válida.");
        } else {
            const position = numbers.indexOf(searchKey);
            if (position !== -1) {
                localStorage.setItem('position', position + 1);
            } else {
                localStorage.setItem('position', -1);
            }
            window.location.href = "Tela3.html";
        }
    });
}

// Tela 3: Exibir o resultado e reiniciar a aplicação
if (document.getElementById('restartBtn')) {
    const position = localStorage.getItem('position');
    const resultMessage = position != -1 
        ? `Número encontrado na posição ${position}` 
        : "Chave não encontrada.";

    document.getElementById('resultMessage').innerText = resultMessage;

    document.getElementById('restartBtn').addEventListener('click', function() {
        localStorage.clear();
        window.location.href = "Tela1.html";
    });
}
