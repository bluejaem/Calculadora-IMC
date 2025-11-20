#  Calculadora de IMC (Índice de Massa Corporal)

Este projeto é uma aplicação web interativa desenvolvida para calcular o Índice de Massa Corporal (IMC) de um usuário com base em seu peso e altura. O objetivo é fornecer uma ferramenta rápida e acessível para monitoramento básico de saúde e classificação de peso.

##  Sobre o Projeto

A Calculadora de IMC foi desenvolvida como um projeto de prática de lógica de programação e manipulação do DOM (Document Object Model). Ela recebe dados numéricos, processa as informações seguindo a fórmula padrão da OMS e retorna um feedback visual instantâneo.

##  Funcionalidades e Utilidade

* **Cálculo Instantâneo:** Realiza a operação matemática em tempo real sem necessidade de recarregar a página.
* **Classificação de Saúde:** Além do número do IMC, o sistema informa a categoria em que o usuário se encontra:
    * Abaixo do peso
    * Peso normal
    * Sobrepeso
    * Obesidade (Graus 1, 2 e 3)
* **Validação de Dados:** O sistema impede cálculos com valores inválidos (números negativos ou campos vazios), garantindo a integridade do resultado.
* **Interface Amigável:** Design limpo com imagem de fundo temática e container com efeito de transparência para facilitar a leitura.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página (uso de tags como `<main>`, `<form>`, `<footer>`).
* **CSS3:** Estilização completa.
    * Uso de **Flexbox** para centralização do conteúdo e fixação do rodapé (Sticky Footer).
    * Implementação de imagem de fundo com `background-size: cover` para responsividade.
    * Efeito de transparência (`rgba`) no container principal.
* **JavaScript (ES6+):** Lógica de programação e interatividade.

## 💻 Como o Código Funciona

### 1. Estrutura (HTML)
O site é estruturado em um container centralizado que agrupa o formulário de entrada e a área de resultados. Foi utilizada a tag `<input type="number">` com o atributo `step="0.01"` para permitir a inserção precisa de altura em metros (ex: 1.75).

### 2. Estilo (CSS)
O layout foi desenhado para manter o conteúdo sempre ao centro da tela, independente do tamanho do monitor. 
* A propriedade `min-height: 100vh` no `body` garante que a página ocupe toda a altura da janela.
* A classe `.main` possui `flex: 1`, o que empurra o rodapé (`footer`) sempre para o final da página, evitando que ele "flutue" no meio da tela em monitores grandes.

### 3. Lógica (JavaScript)
O "cérebro" da aplicação funciona da seguinte maneira:
1.  **Escuta de Eventos:** O script monitora o evento de `submit` do formulário.
2.  **Prevenção de Reload:** Utilizamos `event.preventDefault()` para que a página não recarregue ao clicar no botão, permitindo uma experiência fluida (SPA - Single Page Application feel).
3.  **Cálculo:** A fórmula aplicada é:
    $$IMC = \frac{Peso}{Altura^2}$$
4.  **Condicionais (If/Else):** O resultado passa por uma cadeia de verificações para definir a categoria. Exemplo:
    ```javascript
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    }
    // ...continua até Obesidade grau 3
    ```
5.  **Validação:** Se o usuário digitar letras ou números menores que zero, o sistema exibe um alerta em vermelho pedindo valores válidos.

##  Como executar o projeto

1.  Faça o clone deste repositório.
2.  Certifique-se de ter o arquivo de imagem (ex: `foto de academia.jpg`) na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por [Seu Nome Aqui]