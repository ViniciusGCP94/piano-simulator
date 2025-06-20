# Piano Simulator 🎹

É um Simulador de piano, interativo e desenvolvido em HTML, CSS e JavaScript. Toque de notas, explore acordes e aprenda os fundamentos do piano diretamente no navegador!

![Piano Simulator](assets/image/Piano-Simulator-Capa-readme.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.txt)

## Descrição

Este é um simulador de piano interativo, desenvolvido em HTML, CSS e JavaScript. Permite tocar notas, explorar acordes e aprender os fundamentos do piano diretamente no navegador. Ideal para iniciantes, estudantes de música ou qualquer pessoa interessada em praticar piano de forma simples e acessível. O projeto oferece sons realistas, visualização de teclas pressionadas e uma interface responsiva, proporcionando uma experiência imersiva tanto no computador quanto em dispositivos móveis.

## Funcionalidades

- Simulação de teclado de piano virtual, responsivo e centralizado.
- Toque de notas usando tanto o mouse quanto o teclado do computador.
- Sons realistas das teclas para maior imersão.
- Visualização instantânea das teclas pressionadas.
- Feedback visual para o usuário a cada ação.
- Indicação de notas e acordes básicos para aprendizado.
- Design moderno, limpo e adaptável para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização moderna, responsiva e efeitos visuais para as teclas.
- **JavaScript**: Lógica de funcionamento, interatividade e controle sonoro.

## Estrutura do Projeto

- `index.html`: Estrutura principal da interface do piano.
- `styles.css`: Estilos para o piano virtual e responsividade.
- `index.js`: Lógica de simulação, eventos de teclado/mouse e sons.

## Demonstração da aplicação

Acesse a versão online hospedada na Vercel:  

[![Acesse o app](https://img.shields.io/badge/Acessar%20App%20Na%20Web-0074D9?style=for-the-badge&logo=vercel)](https://piano-simulator-xi.vercel.app/)

## Como Usar

1. Abra o terminal no seu computador.
2. Clone este repositório:
    ```bash
    git clone https://github.com/ViniciusGCP94/piano-simulator.git
    ```
3. Acesse a pasta do projeto:
    ```bash
    cd piano-simulator
    ```
   Agora você terá uma cópia do repositório em seu computador!

4. Abra o arquivo `index.html` em seu navegador.

5. Utilize o mouse ou o teclado do computador para tocar o piano virtual. Explore notas, combinações e experimente acordes!

## Funcionalidades de Interatividade

O simulador inclui diversas interatividades para tornar o aprendizado e a prática mais dinâmicos:

- As teclas do piano reagem visualmente ao serem pressionadas, seja via mouse ou teclado.
- Ao pressionar uma tecla, além do som correspondente, a tecla virtual é destacada na interface.
- O layout é responsivo: se ajusta automaticamente para diferentes tamanhos de tela e dispositivos.
- Feedback visual rápido para garantir melhor usabilidade e engajamento do usuário.
- Exemplos de código para interação:

  ```javascript
  // Exemplo de evento para destacar tecla ao pressionar
  keyElement.addEventListener('mousedown', () => {
    keyElement.classList.add('active');
    playNote(key);
  });

  keyElement.addEventListener('mouseup', () => {
    keyElement.classList.remove('active');
  });

## Suporte ao uso do teclado físico

O simulador permite tocar notas usando teclas específicas do teclado do computador, proporcionando uma experiência mais natural para quem está acostumado a instrumentos físicos.

## Melhorias Futuras

- Adicionar notas mais graves e também mais agudas.
- Adicionar uma maior variedade de timbres.
- Implementar gravação e reprodução de sequências tocadas.
- Suporte para acordes automáticos e modos de aprendizagem.
- Interface customizável (criar temas interativos) para diferentes estilos de piano.
- Adicionar tutoriais interativos e desafios musicais.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para sugerir melhorias, relatar bugs ou adicionar novas funcionalidades.

## Licença [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.txt)

Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.