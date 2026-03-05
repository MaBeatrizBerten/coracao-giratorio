# ❤️ Heart Code Animation

Uma animação fluida e responsiva desenvolvida com **HTML5 Canvas**, utilizando a equação paramétrica do coração para criar um efeito visual onde frases giram em torno de um nome centralizado.

Este projeto foi criado como um estudo de manipulação de coordenadas geométricas e animações em tempo real no navegador, unindo lógica de programação e design.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura e elemento Canvas.
- **CSS3:** Estilização responsiva e layout centralizado.
- **JavaScript (Vanilla):** Lógica matemática da animação, manipulação de frames (`requestAnimationFrame`) e cálculos de responsividade dinâmica.

## 🧠 Conceitos Aplicados

- **Geometria Analítica:** Uso da equação paramétrica para definir a trajetória do rastro:
  - $x = 16\sin^3(t)$
  - $y = -(13\cos(t) - 5\cos(2t) - 2\cos(3t) - \cos(4t))$
- **Responsividade:** O sistema calcula a escala do desenho com base na menor dimensão da tela (`Math.min(width, height)`), garantindo que a animação funcione perfeitamente em dispositivos móveis e desktops.
- **Clean Code:** Separação clara de responsabilidades entre HTML, CSS e JS.

## 🛠️ Como usar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/BiaBerten/heart-code-animation.git](https://github.com/BiaBerten/heart-code-animation.git)
    ```
2.  Abra o arquivo `index.html` em qualquer navegador.
3.  Para personalizar o nome central, altere a variável `centerName` no arquivo `script.js`.

## 🎨 Design & Favicon

O projeto conta com um favicon personalizado que une a estética de design ao mundo da programação, refletindo meu interesse em tecnologias front-end e criação visual.

---

_Desenvolvido por **Maria Beatriz Berten** - Estudante de Engenharia de Software_
