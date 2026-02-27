document.addEventListener('DOMContentLoaded', () => {
    const clickBox = document.getElementById('cliquebox');
    const downBox = document.getElementById('mousedowbox');
    const moveBox = document.getElementById('mousemouvebox');
    const overBox = document.getElementById('mouseouverbox');
    const outBox = document.getElementById('mousealtbox');

    clickBox.addEventListener('click', () => {
        clickBox.textContent = 'Você clicou!';
        clickBox.style.backgroundColor = '#cfe';
    });

    downBox.addEventListener('mousedown', () => {
        downBox.textContent = 'Botão pressionado';
        downBox.style.backgroundColor = '#fec';
    });

    downBox.addEventListener('mouseup', () => {
        downBox.textContent = 'Botão solto';
        downBox.style.backgroundColor = '';
    });

    moveBox.addEventListener('mousemove', (e) => {
        moveBox.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
    });

    overBox.addEventListener('mouseover', () => {
        overBox.textContent = 'Mouse dentro';
        overBox.style.backgroundColor = '#ffc';
    });

    overBox.addEventListener('mouseout', () => {
        overBox.textContent = 'Passe o mouse sobre mim';
        overBox.style.backgroundColor = '';
    });

    outBox.addEventListener('mouseout', () => {
        outBox.textContent = 'Mouse saiu';
        outBox.style.backgroundColor = '#eef';
    });

    outBox.addEventListener('mouseover', () => {
        outBox.textContent = 'Arraste para fora';
        outBox.style.backgroundColor = '';
    });
});