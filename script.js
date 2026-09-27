const imcForm = document.getElementById('imcForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const btnReset = document.getElementById('btnReset');

const emptyState = document.getElementById('emptyState');
const resultContent = document.getElementById('resultContent');
const imcNumber = document.getElementById('imcNumber');
const statusPill = document.getElementById('statusPill');
const gaugeMarker = document.getElementById('gaugeMarker');
const idealWeightRange = document.getElementById('idealWeightRange');
const weightDifference = document.getElementById('weightDifference');

// Mapeamento clínico baseado na OMS
const CLASSIFICATIONS = [
    { max: 18.5, label: 'Abaixo do peso', color: '#0369a1', bg: '#e0f2fe' },
    { max: 24.9, label: 'Peso saudável', color: '#047857', bg: '#d1fae5' },
    { max: 29.9, label: 'Sobrepeso', color: '#b45309', bg: '#fef3c7' },
    { max: Infinity, label: 'Obesidade', color: '#b91c1c', bg: '#fee2e2' }
];

imcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores positivos válidos para peso e altura.');
        return;
    }

    // Cálculo do IMC
    const imc = weight / (height * height);

    // Faixa saudável padrão (IMC entre 18.5 e 24.9)
    const minHealthyWeight = (18.5 * (height * height)).toFixed(1);
    const maxHealthyWeight = (24.9 * (height * height)).toFixed(1);

    // Diagnóstico
    let category = CLASSIFICATIONS.find(c => imc < c.max);

    // Ajuste da diferença em relação à faixa saudável
    let diffText = 'Dentro da faixa';
    if (weight < minHealthyWeight) {
        const diff = (minHealthyWeight - weight).toFixed(1);
        diffText = `Ganhar ~${diff} kg`;
    } else if (weight > maxHealthyWeight) {
        const diff = (weight - maxHealthyWeight).toFixed(1);
        diffText = `Perder ~${diff} kg`;
    }

    // Posição na régua (mapeia IMC 15 a 35 para 0% a 100%)
    const clampedImc = Math.min(Math.max(imc, 15), 35);
    const markerPercent = ((clampedImc - 15) / (35 - 15)) * 100;

    // Atualização da UI
    imcNumber.textContent = imc.toFixed(1);
    statusPill.textContent = category.label;
    statusPill.style.color = category.color;
    statusPill.style.backgroundColor = category.bg;

    gaugeMarker.style.left = `${markerPercent}%`;
    idealWeightRange.textContent = `${minHealthyWeight} kg - ${maxHealthyWeight} kg`;
    weightDifference.textContent = diffText;

    emptyState.classList.add('hidden');
    resultContent.classList.remove('hidden');
});

btnReset.addEventListener('click', function () {
    imcForm.reset();
    resultContent.classList.add('hidden');
    emptyState.classList.remove('hidden');
    weightInput.focus();
});