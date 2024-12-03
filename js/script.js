// Seleciona o botão e o corpo do documento
// Função para alternar entre modo escuro e modo claro
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Adiciona ou remove a classe 'dark-mode'

    // Alterar o texto do botão conforme o estado do modo escuro
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Desativar Modo Escuro';
    } else {
        toggleButton.textContent = 'Ativar Modo Escuro';
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Script JS (adicionar ao seu arquivo "js/script.js" ou diretamente no arquivo HTML)
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let index = 0;
    const images = document.querySelectorAll('.carousel-item');
    const totalImages = images.length;

    // Função para mover o carrossel
    function moveCarousel() {
        index = (index + 1) % totalImages; // Atualiza o índice da imagem
        carousel.style.transform = `translateX(-${index * 100}%)`; // Move o carrossel
    }

    setInterval(moveCarousel, 3000); // A cada 3 segundos, troque a imagem
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

