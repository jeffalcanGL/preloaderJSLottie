const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 20%; /* ou o tamanho que você desejar */
    max-height: 20% /* ou o tamanho que você desejar */
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Variável para controlar se a animação foi carregada
let animationLoaded = false;

function hideOverlay() {
    if (!animationLoaded) {
        overlay.style.display = 'none';
        lottieContainer.style.display = 'block';
        
        // Carregar a animação Lottie
        lottie.loadAnimation({
            container: lottieContainer, // Referência ao elemento DOM para hospedar a animação Lottie
            renderer: 'svg', // Define o renderizador como 'svg'
            loop: true, // A animação deve repetir em loop
            autoplay: true, // A animação começa a tocar automaticamente
            path: 'https://jeffalcangl.github.io/preloaderJSLottie/R4s2Uh0L1c.json' // URL do arquivo JSON da animação Lottie
        });
        
        animationLoaded = true; // Atualiza a variável para indicar que a animação foi carregada
    }
}

// Optar por usar apenas um evento para evitar a carga dupla
document.addEventListener('DOMContentLoaded', hideOverlay);
