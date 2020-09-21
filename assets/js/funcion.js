$(document).ready(() => {
  // Ocultar loading window
  setTimeout(() => {
    $('#loader').fadeOut()
  }, 3000)
  
  // Ir hacia arriba
  $(window).scroll(() => {
    if ($(this).scrollTop() > 300) {
      $('.to_top').fadeIn()
    } else {
      $('.to_top').fadeOut()
    }
  })
  
  $('.to_top').click(function(event) {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 2000)
  })
  
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip()
  
  // Parallax
  const width = window.matchMedia('(min-width: 1024px)') // Variable para almacenar media query
  
  // Si se cumple el ancho dado como condicion ejecuta la funcion parallax 
  if (width.matches) {
    $(window).scroll(() => {
      let barra = $(window).scrollTop()
      let posicion = barra * 0.10

      $('.parallax').css({
        'background-position': '0 ' + posicion + 'px'
      })
    })
  }
  
  // Desplazamiento hacia las secciones
  $('.anchor').click(function(e) {
    e.preventDefault()
    enlace = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(enlace).offset().top
    }, 2000)
  })
  
  // Cambiar icono en el navbar
  $('.navbar-toggler').click(() => {
    $('.navbar-toggler .fas').toggleClass('fa-times')
  })
  
  // Carousel con libreria slick
  $('.container-card').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })
  
})

// Inicialización de Librería AOS
AOS.init()