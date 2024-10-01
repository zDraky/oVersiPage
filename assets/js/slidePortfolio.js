document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');
        const intervalTime = 3000;

        // Função para mostrar a imagem atual
        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? '1' : '0';
            });
        }

        // Navegação para o próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        // Navegação para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Slideshow automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, intervalTime);

        // Exibe o slide inicial
        showSlide(currentIndex);
    });
});

const links = [
  {
    id: "rodrigoZin",
    url: "https://open.spotify.com/intl-pt/artist/71s3pi3yFhYB1P40dmRm1J?si=5yooU7RfTxWG8X-gTc1OeA",
  },
  {
    id: "taka",
    url: "https://open.spotify.com/intl-pt/artist/0ZCFSmJKfaYQi0gRSShdou?si=p9wkneIEROS-C9VhvzfFwg",
  },
  {
    id: "letodie",
    url: "https://open.spotify.com/intl-pt/artist/2JFpfD9p2vTjRCH8XLeO0l?si=KQDVxxHUTcO15_nhDvzYQA",
  },
];

links.forEach((link) => {
  document.getElementById(link.id).addEventListener("click", function () {
    window.open(link.url, "_blank");
  });
});
