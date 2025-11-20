document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, insira valores válidos.</p>';
        return;
    }

    const imc = weight / (height * height);

    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else if (imc < 34.9) {
        classification = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classification = 'Obesidade grau 2';
    } else {
        classification = 'Obesidade grau 3';
    }
    resultDiv.innerHTML = `
        <h3>Seu Resultado:</h3>
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Classificação:</strong> ${classification}</p>
    `;
});