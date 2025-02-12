$(document).ready(function(){
    $('.carrossel-container').slick({
        dots: true, // Mostra os pontos de navegação
        infinite: true, // Loop infinito
        speed: 500, // Velocidade da transição (mais lento para um efeito suave)
        slidesToShow: 4, // Quantidade de slides visíveis (aumente ou diminua conforme necessário)
        slidesToScroll: 1, // Quantidade de slides a rolar
        autoplay: true, // Autoplay
        autoplaySpeed: 2000, // Intervalo do autoplay (2 segundos)
        responsive: [
            {
                breakpoint: 768, // Ajustes para tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Ajustes para celulares
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});