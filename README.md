# Calculadora e Diagnóstico de IMC

Aplicação web desenvolvida em JavaScript puro para avaliação biométrica rápida através do Índice de Massa Corporal (IMC), adotando as diretrizes de referência da Organização Mundial da Saúde (OMS).

A ferramenta processa o peso e a altura informados, calcula o índice antropométrico e gera um painel diagnóstico com categorização do estado nutricional, indicador gráfico contínuo e cálculo da margem de peso ideal para a estatura fornecida.

## Funcionalidades

- **Cálculo de IMC em tempo real:** Determinação imediata do índice biométrico no lado do cliente, sem recarregamento da página (`preventDefault`).
- **Classificação clínica por faixas:** Segmentação automática segundo os critérios da OMS (Baixo peso, Eutrofia/Normal, Sobrepeso e Obesidade).
- **Indicador gráfico de dispersão:** Marcador deslizante posicionado dinamicamente sobre uma escala de faixas proporcionais entre 15 e 35 kg/m².
- **Projeção de peso ideal:** Estimativa do intervalo saudável em quilogramas (baseado nos pontos de corte 18.5 e 24.9) e cálculo do saldo de massa necessário para atingir o intervalo de referência.
- **Validação e sanitização de dados:** Bloqueio de submissão de valores nulos, negativos ou incoerentes com os limites fisiológicos definidos nos atributos de entrada.
- **Limpeza de estado:** Reposição rápida do formulário e dos painéis de resultado através de botão de redefinição.

## Lógica de Implementação

### 1. Cálculo do Índice Antropométrico
O processamento matemático segue a relação convencional de massa por área de superfície corporal:

$$\text{IMC} = \frac{\text{peso (kg)}}{\text{altura (m)}^2}$$

### 2. Projeção de Faixa Saudável
A amplitude ponderal recomendada para a estatura fornecida é obtida invertendo os limites normativos de IMC:

$$\text{Peso Mínimo} = 18.5 \times \text{altura}^2$$
$$\text{Peso Máximo} = 24.9 \times \text{altura}^2$$

Com base nesses valores, o script avalia se o peso atual do utilizador está contido no intervalo, sugerindo a variação nominal necessária para alcançar a faixa eutrófica quando aplicável.

### 3. Posicionamento Dinâmico na Escala
O marcador visual é posicionado via CSS (`left: X%`) através de uma interpolação linear delimitada entre os limites de 15 e 35:

$$\text{Posição (\%)} = \frac{\text{clamp}(\text{IMC}, 15, 35) - 15}{35 - 15} \times 100$$

## Tecnologias Utilizadas

- **HTML5:** Marcação semântica com foco em acessibilidade e formulários nativos.
- **CSS3:** Estrutura responsiva com CSS Grid e Flexbox, tipografia fluida, variáveis globais e transições de estado para elementos interativos.
- **JavaScript (Vanilla / ES6+):** Manipulação direta da árvore DOM, gestão de eventos e lógica de cálculos matemáticos sem recurso a bibliotecas externas.

## Estrutura do Repositório

```text
├── index.html        Estrutura de apresentação e formulários
├── style.css         Design tokens, grelha responsiva e estados visuais
├── script.js         Lógica de cálculo, regras de negócio e manipulação de classes
└── README.md         Documentação técnica do projeto