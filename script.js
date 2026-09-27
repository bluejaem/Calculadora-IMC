document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    resultDiv.style.display = 'block';

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.className = 'status-danger';
        resultDiv.innerHTML = '<p>Por favor, insira valores válidos.</p>';
        return;
    }

    const imc = weight / (height * height);
    let classification = '';
    let statusClass = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
        statusClass = 'status-alert';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
        statusClass = 'status-normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
        statusClass = 'status-alert';
    } else if (imc < 34.9) {
        classification = 'Obesidade grau 1';
        statusClass = 'status-danger';
    } else if (imc < 39.9) {
        classification = 'Obesidade grau 2';
        statusClass = 'status-danger';
    } else {
        classification = 'Obesidade grau 3';
        statusClass = 'status-danger';
    }

    resultDiv.className = statusClass;
    resultDiv.innerHTML = `
        <h3 style="font-size: 1.1rem; margin-bottom: 4px;">Seu Resultado:</h3>
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Classificação:</strong> ${classification}</p>
    `;
});